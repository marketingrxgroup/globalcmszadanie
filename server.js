const http = require("http");
const fs = require("fs");
const path = require("path");

const root = __dirname;
const stateFile = path.join(root, "cms-state.json");
const port = Number(process.env.PORT || 8787);

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

function readBody(req) {
  return new Promise((resolve, reject) => {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
      if (body.length > 2_000_000) {
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
        fs.writeFileSync(stateFile, JSON.stringify({ assignments: {}, details: {}, completed: {}, customModules: [], moduleLayout: null, collapsedTreeGroups: {}, customMvpItems: [], customQuestions: [], checkedQuestions: {} }, null, 2));
      }
      send(res, 200, fs.readFileSync(stateFile, "utf8"));
      return;
    }

    if (req.url === "/api/state" && req.method === "POST") {
      const body = await readBody(req);
      const parsed = JSON.parse(body);
      const state = {
        assignments: parsed.assignments || {},
        details: parsed.details || {},
        completed: parsed.completed || {},
        customModules: parsed.customModules || [],
        moduleLayout: parsed.moduleLayout || null,
        collapsedTreeGroups: parsed.collapsedTreeGroups || {},
        customMvpItems: parsed.customMvpItems || [],
        customQuestions: parsed.customQuestions || [],
        checkedQuestions: parsed.checkedQuestions || {},
      };
      fs.writeFileSync(stateFile, JSON.stringify(state, null, 2), "utf8");
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
