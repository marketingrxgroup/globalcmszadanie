const http = require("http");
const fs = require("fs");
const path = require("path");

const root = __dirname;
const stateFile = path.join(root, "cms-state.json");
const port = Number(process.env.PORT || 8787);
const n8nWebhookUrl = process.env.N8N_WEBHOOK_URL || "https://n8n.milaski.xyz/webhook/cms-events";
const n8nWebhookSecret = process.env.N8N_WEBHOOK_SECRET || "";
const maxRequestBodySize = 12_000_000;

const defaultState = {
  assignments: {},
  details: {},
  completed: {},
  customModules: [],
  moduleLayout: null,
  collapsedTreeGroups: {},
  customMvpItems: [],
  mvpLayout: null,
  customQuestions: [],
  checkedQuestions: {},
  deletedQuestions: [],
  questionAnswers: {},
  siteMeta: {},
  deletedModules: [],
};

const siteNames = {
  rentex: "Rentex.bg",
  bauportal: "Bauportal.bg",
  bautrax: "Bautrax.com",
  mashini: "Mashini.bg",
  cmx: "CMX.bg",
  cimex: "Cimex.bg",
  lonking: "Lonking",
  astralis: "Astralis.bg",
};

const mimeTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
};

function send(res, status, body, type = "application/json; charset=utf-8") {
  res.writeHead(status, { "Content-Type": type });
  res.end(body);
}

function readStateFromDisk() {
  if (!fs.existsSync(stateFile)) return { ...defaultState };

  try {
    return JSON.parse(fs.readFileSync(stateFile, "utf8"));
  } catch (error) {
    console.warn("Cannot parse cms-state.json before save", error);
    return { ...defaultState };
  }
}

function normalizeState(parsed) {
  return {
    assignments: parsed.assignments || {},
    details: parsed.details || {},
    completed: parsed.completed || {},
    customModules: parsed.customModules || [],
    moduleLayout: parsed.moduleLayout || null,
    collapsedTreeGroups: parsed.collapsedTreeGroups || {},
    customMvpItems: parsed.customMvpItems || [],
    mvpLayout: parsed.mvpLayout || null,
    customQuestions: parsed.customQuestions || [],
    checkedQuestions: parsed.checkedQuestions || {},
    deletedQuestions: parsed.deletedQuestions || [],
    questionAnswers: parsed.questionAnswers || {},
    siteMeta: parsed.siteMeta || {},
    deletedModules: parsed.deletedModules || [],
  };
}

function stableJson(value) {
  return JSON.stringify(value ?? null);
}

function firstChangedKey(before = {}, after = {}) {
  const keys = new Set([...Object.keys(before || {}), ...Object.keys(after || {})]);
  for (const key of keys) {
    if (stableJson(before?.[key]) !== stableJson(after?.[key])) return key;
  }
  return "";
}

function splitStateKey(key = "") {
  const [siteId = "", groupTitle = "", itemLabel = ""] = key.split("||");
  return {
    siteId,
    siteName: siteNames[siteId] || siteId || "",
    moduleGroup: groupTitle,
    moduleName: itemLabel,
  };
}

function valueLines(value) {
  if (Array.isArray(value)) return value.map(String).filter(Boolean);
  return String(value || "")
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);
}

function formatFieldValue(value) {
  const lines = valueLines(value);
  return lines.length ? lines.join("\n") : "(празно)";
}

function addedLines(before, after) {
  const beforeLines = valueLines(before);
  return valueLines(after).filter((line) => !beforeLines.includes(line));
}

function buildFieldChangeText(before = {}, after = {}, fields = []) {
  return fields
    .filter((field) => stableJson(before?.[field.key] || "") !== stableJson(after?.[field.key] || ""))
    .map((field) => {
      const added = addedLines(before?.[field.key], after?.[field.key]);
      const parts = [`Поле: ${field.label}`];

      if (added.length) {
        parts.push(`Допълнено:\n${added.join("\n")}`);
      } else {
        parts.push(`Преди:\n${formatFieldValue(before?.[field.key])}`);
      }

      parts.push(`Сега:\n${formatFieldValue(after?.[field.key])}`);
      return parts.join("\n");
    })
    .join("\n\n");
}

function siteNamesFromIds(siteIds = []) {
  return siteIds.map((siteId) => siteNames[siteId] || siteId);
}

function buildAssignmentChangeText(previousSiteIds = [], nextSiteIds = []) {
  const previous = new Set(previousSiteIds || []);
  const next = new Set(nextSiteIds || []);
  const added = [...next].filter((siteId) => !previous.has(siteId));
  const removed = [...previous].filter((siteId) => !next.has(siteId));
  const current = siteNamesFromIds(nextSiteIds || []);
  const parts = [];

  if (added.length) {
    parts.push(`Добавено към сайтове:\n${siteNamesFromIds(added).join("\n")}`);
  }

  if (removed.length) {
    parts.push(`Премахнато от сайтове:\n${siteNamesFromIds(removed).join("\n")}`);
  }

  parts.push(`Сега се показва в:\n${current.length ? current.join("\n") : "(няма избрани сайтове)"}`);
  return parts.join("\n\n");
}

function splitAssignmentKey(key = "") {
  const [groupTitle = "", itemLabel = ""] = key.split("||");
  return { moduleGroup: groupTitle, moduleName: itemLabel };
}

function makeStateKey(siteId, groupTitle, itemLabel) {
  return `${siteId}||${groupTitle}||${itemLabel}`;
}

function firstAddedModule(before = [], after = []) {
  return after.find((next) => !before.some((previous) => stableJson(previous) === stableJson(next)));
}

function firstAddedValue(before = [], after = []) {
  return after.find((next) => !before.includes(next));
}

function buildCmsEvent(previousState, nextState) {
  const now = new Date().toISOString();
  const baseEvent = {
    app: "Global CMS Map",
    source: "globalcmszadanie",
    occurredAt: now,
  };

  const addedModule = firstAddedModule(previousState.customModules, nextState.customModules);
  if (addedModule) {
    return {
      ...baseEvent,
      eventType: "module.created",
      action: "Създаден е модул",
      title: `Създаден е модул "${addedModule.itemLabel}"`,
      moduleGroup: addedModule.groupTitle,
      moduleName: addedModule.itemLabel,
      description: `Модулът е добавен в група "${addedModule.groupTitle}".`,
    };
  }

  const deletedModuleKey = firstAddedValue(previousState.deletedModules, nextState.deletedModules);
  if (deletedModuleKey) {
    const moduleInfo = splitAssignmentKey(deletedModuleKey);
    return {
      ...baseEvent,
      eventType: "module.deleted",
      action: "Изтрит е модул",
      title: `Изтрит е модул "${moduleInfo.moduleName}"`,
      ...moduleInfo,
      description: `Модулът е премахнат от група "${moduleInfo.moduleGroup}".`,
    };
  }

  const detailKey = firstChangedKey(previousState.details, nextState.details);
  if (detailKey) {
    const detailInfo = splitStateKey(detailKey);
    return {
      ...baseEvent,
      eventType: previousState.details?.[detailKey] ? "detail.updated" : "detail.created",
      action: previousState.details?.[detailKey] ? "Обновено е описание" : "Добавено е описание",
      title: `${previousState.details?.[detailKey] ? "Обновено" : "Добавено"} е описание за "${detailInfo.moduleName}"`,
      ...detailInfo,
      description: `Промяна в ${detailInfo.siteName}, модул "${detailInfo.moduleName}" (${detailInfo.moduleGroup}).`,
    };
  }

  const assignmentKey = firstChangedKey(previousState.assignments, nextState.assignments);
  if (assignmentKey) {
    const assignmentInfo = splitAssignmentKey(assignmentKey);
    return {
      ...baseEvent,
      eventType: "assignment.updated",
      action: "Обновено е разпределение на модул",
      title: `Обновено е разпределение за "${assignmentInfo.moduleName}"`,
      ...assignmentInfo,
      description: `Променени са сайтовете, към които е закачен модулът "${assignmentInfo.moduleName}".`,
    };
  }

  const completedKey = firstChangedKey(previousState.completed, nextState.completed);
  if (completedKey) {
    const completedInfo = splitStateKey(completedKey);
    const completed = Boolean(nextState.completed?.[completedKey]);
    return {
      ...baseEvent,
      eventType: completed ? "module.completed" : "module.reopened",
      action: completed ? "Маркиран е модул като готов" : "Модул е върнат като неготов",
      title: `${completed ? "Готово" : "Върнато"}: "${completedInfo.moduleName}"`,
      ...completedInfo,
      description: `${completedInfo.siteName}: "${completedInfo.moduleName}" е ${completed ? "маркиран като готов" : "върнат като неготов"}.`,
    };
  }

  const siteMetaKey = firstChangedKey(previousState.siteMeta, nextState.siteMeta);
  if (siteMetaKey) {
    return {
      ...baseEvent,
      eventType: "site.updated",
      action: "Обновени са данни за сайт",
      title: `Обновени са данни за ${siteNames[siteMetaKey] || siteMetaKey}`,
      siteId: siteMetaKey,
      siteName: siteNames[siteMetaKey] || siteMetaKey,
      description: `Променени са полета, процеси или бележки за сайта.`,
    };
  }

  if (stableJson(previousState.moduleLayout) !== stableJson(nextState.moduleLayout)) {
    return {
      ...baseEvent,
      eventType: "module.layout.updated",
      action: "Променена е подредба на модули",
      title: "Променена е подредба или група на модул",
      description: "Има промяна в структурата на CMS модулите.",
    };
  }

  const mvpItem = firstAddedModule(previousState.customMvpItems, nextState.customMvpItems);
  if (mvpItem) {
    return {
      ...baseEvent,
      eventType: "mvp.created",
      action: "Добавена е MVP точка",
      title: "Добавена е MVP точка",
      description: mvpItem.text || "Добавена е нова точка към MVP списъка.",
    };
  }

  const question = firstAddedValue(previousState.customQuestions, nextState.customQuestions);
  if (question) {
    return {
      ...baseEvent,
      eventType: "question.created",
      action: "Добавен е въпрос",
      title: "Добавен е въпрос",
      description: question,
    };
  }

  const checkedQuestionKey = firstChangedKey(previousState.checkedQuestions, nextState.checkedQuestions);
  if (checkedQuestionKey) {
    return {
      ...baseEvent,
      eventType: "question.updated",
      action: "Обновен е въпрос",
      title: "Обновен е статус на въпрос",
      description: checkedQuestionKey,
    };
  }

  return {
    ...baseEvent,
    eventType: "state.updated",
    action: "Има промяна в CMS картата",
    title: "Има промяна в CMS картата",
    description: "Записан е нов вариант на cms-state.json.",
  };
}

function buildClientCmsEvent(clientEvent = {}) {
  const eventType = clientEvent.eventType || "state.updated";
  const action = clientEvent.action || clientEvent.title || "Има промяна в CMS картата";

  return {
    app: "Global CMS Map",
    source: "globalcmszadanie",
    occurredAt: new Date().toISOString(),
    eventType,
    action,
    authorName: clientEvent.authorName || "",
    title: clientEvent.title || action,
    siteId: clientEvent.siteId || "",
    siteName: clientEvent.siteName || "",
    moduleGroup: clientEvent.moduleGroup || "",
    moduleName: clientEvent.moduleName || "",
    questionKey: clientEvent.questionKey || "",
    questionText: clientEvent.questionText || "",
    description: clientEvent.description || action,
    changeText: clientEvent.changeText || "",
  };
}

function enrichClientCmsEvent(clientEvent = {}, previousState, nextState) {
  if (clientEvent.changeText) return clientEvent;

  if (clientEvent.eventType === "detail.updated" || clientEvent.eventType === "detail.created" || clientEvent.eventType === "editor.saved") {
    const key = makeStateKey(clientEvent.siteId, clientEvent.moduleGroup, clientEvent.moduleName);
    const changeText = buildFieldChangeText(previousState.details?.[key] || {}, nextState.details?.[key] || {}, [
      { key: "summary", label: "Кратко описание" },
      { key: "includes", label: "Какво включва" },
      { key: "fields", label: "Полета / данни" },
      { key: "note", label: "Бележка за заданието" },
    ]);
    return { ...clientEvent, changeText };
  }

  if (clientEvent.eventType === "site.updated") {
    const siteId = clientEvent.siteId || "";
    const changeText = buildFieldChangeText(previousState.siteMeta?.[siteId] || {}, nextState.siteMeta?.[siteId] || {}, [
      { key: "fields", label: "Полета / данни" },
      { key: "processes", label: "Процеси" },
      { key: "notes", label: "Бележки" },
    ]);
    return { ...clientEvent, changeText };
  }

  if (clientEvent.eventType === "assignment.updated") {
    const key = `${clientEvent.moduleGroup || ""}||${clientEvent.moduleName || ""}`;
    const changeText = buildAssignmentChangeText(previousState.assignments?.[key] || [], nextState.assignments?.[key] || []);
    return { ...clientEvent, changeText };
  }

  if (clientEvent.eventType === "question.answered") {
    const questionKey =
      clientEvent.questionKey || firstChangedKey(previousState.questionAnswers || {}, nextState.questionAnswers || {});
    if (questionKey) {
      const label = clientEvent.questionText || clientEvent.description || questionKey;
      const answer = nextState.questionAnswers?.[questionKey] || "";
      return {
        ...clientEvent,
        questionKey,
        questionText: label,
        description: label,
        changeText:
          clientEvent.changeText ||
          (String(answer).trim()
            ? `Въпрос:\n${label}\n\nОтговор:\n${answer}`
            : `Въпрос:\n${label}\n\nОтговор: (изтрит)`),
      };
    }
  }

  return clientEvent;
}

async function notifyN8n(event) {
  if (!n8nWebhookUrl) return;

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 2500);

  try {
    const response = await fetch(n8nWebhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(n8nWebhookSecret ? { "X-CMS-Webhook-Secret": n8nWebhookSecret } : {}),
      },
      body: JSON.stringify(event),
      signal: controller.signal,
    });
    if (!response.ok) {
      console.warn(`n8n webhook returned ${response.status} ${response.statusText}`);
    }
  } catch (error) {
    console.warn("n8n webhook notification failed", error.message);
  } finally {
    clearTimeout(timeout);
  }
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
      if (body.length > maxRequestBodySize) {
        req.destroy();
        reject(new Error("Body too large"));
      }
    });
    req.on("end", () => resolve(body));
    req.on("error", reject);
  });
}

function serveStatic(req, res) {
  const urlPath = decodeURIComponent(req.url.split("?")[0] === "/" ? "/index.html" : req.url.split("?")[0]);
  const filePath = path.normalize(path.join(root, urlPath));

  if (!filePath.startsWith(root)) {
    send(res, 403, "Forbidden", "text/plain; charset=utf-8");
    return;
  }

  fs.readFile(filePath, (error, data) => {
    if (error) {
      send(res, 404, "Not found", "text/plain; charset=utf-8");
      return;
    }

    send(res, 200, data, mimeTypes[path.extname(filePath)] || "text/plain; charset=utf-8");
  });
}

const server = http.createServer(async (req, res) => {
  try {
    if (req.url === "/api/state" && req.method === "GET") {
      if (!fs.existsSync(stateFile)) {
        fs.writeFileSync(stateFile, JSON.stringify(defaultState, null, 2));
      }
      send(res, 200, fs.readFileSync(stateFile, "utf8"));
      return;
    }

    if (req.url === "/api/state" && req.method === "POST") {
      const previousState = readStateFromDisk();
      const body = await readBody(req);
      const parsed = JSON.parse(body);
      const state = normalizeState(parsed);
      fs.writeFileSync(stateFile, JSON.stringify(state, null, 2), "utf8");
      const normalizedPreviousState = normalizeState(previousState);
      const event = parsed._cmsEvent
        ? buildClientCmsEvent(enrichClientCmsEvent(parsed._cmsEvent, normalizedPreviousState, state))
        : buildCmsEvent(normalizedPreviousState, state);
      await notifyN8n(event);
      send(res, 200, JSON.stringify({ ok: true }));
      return;
    }

    serveStatic(req, res);
  } catch (error) {
    send(res, 500, JSON.stringify({ ok: false, error: error.message }));
  }
});

server.listen(port, () => {
  console.log(`Global CMS map is running on port ${port}`);
});
