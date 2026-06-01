<?php
declare(strict_types=1);

$stateFile = dirname(__DIR__) . DIRECTORY_SEPARATOR . 'cms-state.json';
$webhookLogFile = dirname(__DIR__) . DIRECTORY_SEPARATOR . 'cms-webhook.log';
$n8nWebhookUrl = getenv('N8N_WEBHOOK_URL') ?: 'https://n8n.milaski.xyz/webhook/cms-events';
$n8nWebhookSecret = getenv('N8N_WEBHOOK_SECRET') ?: '';
$siteNames = [
    'rentex' => 'Rentex.bg',
    'bauportal' => 'Bauportal.bg',
    'bautrax' => 'Bautrax.com',
    'mashini' => 'Mashini.bg',
    'cmx' => 'CMX.bg',
    'cimex' => 'Cimex.bg',
    'lonking' => 'Lonking',
    'astralis' => 'Astralis.bg',
];

header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');

function send_json(int $status, array $payload): void
{
    http_response_code($status);
    echo json_encode($payload, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
    exit;
}

function default_state(): array
{
    return [
        'assignments' => new stdClass(),
        'details' => new stdClass(),
        'completed' => new stdClass(),
        'customModules' => [],
        'moduleLayout' => null,
        'collapsedTreeGroups' => new stdClass(),
        'customMvpItems' => [],
        'customQuestions' => [],
        'checkedQuestions' => new stdClass(),
        'siteMeta' => new stdClass(),
        'deletedModules' => [],
    ];
}

function stable_json($value): string
{
    return json_encode($value ?? null, JSON_UNESCAPED_UNICODE);
}

function normalize_state(array $decoded): array
{
    return [
        'assignments' => $decoded['assignments'] ?? [],
        'details' => $decoded['details'] ?? [],
        'completed' => $decoded['completed'] ?? [],
        'customModules' => $decoded['customModules'] ?? [],
        'moduleLayout' => $decoded['moduleLayout'] ?? null,
        'collapsedTreeGroups' => $decoded['collapsedTreeGroups'] ?? [],
        'customMvpItems' => $decoded['customMvpItems'] ?? [],
        'customQuestions' => $decoded['customQuestions'] ?? [],
        'checkedQuestions' => $decoded['checkedQuestions'] ?? [],
        'siteMeta' => $decoded['siteMeta'] ?? [],
        'deletedModules' => $decoded['deletedModules'] ?? [],
    ];
}

function state_for_storage(array $state): array
{
    foreach (['assignments', 'details', 'completed', 'collapsedTreeGroups', 'checkedQuestions', 'siteMeta'] as $key) {
        if (empty($state[$key])) {
            $state[$key] = new stdClass();
        }
    }

    return $state;
}

function read_previous_state(string $stateFile): array
{
    if (!file_exists($stateFile)) {
        return normalize_state([]);
    }

    $contents = file_get_contents($stateFile);
    if ($contents === false || trim($contents) === '') {
        return normalize_state([]);
    }

    $decoded = json_decode($contents, true);
    return is_array($decoded) ? normalize_state($decoded) : normalize_state([]);
}

function first_changed_key($before, $after): string
{
    $before = is_array($before) ? $before : [];
    $after = is_array($after) ? $after : [];
    $keys = array_unique(array_merge(array_keys($before), array_keys($after)));

    foreach ($keys as $key) {
        if (stable_json($before[$key] ?? null) !== stable_json($after[$key] ?? null)) {
            return (string) $key;
        }
    }

    return '';
}

function split_state_key(string $key, array $siteNames): array
{
    $parts = explode('||', $key);
    $siteId = $parts[0] ?? '';

    return [
        'siteId' => $siteId,
        'siteName' => $siteNames[$siteId] ?? $siteId,
        'moduleGroup' => $parts[1] ?? '',
        'moduleName' => $parts[2] ?? '',
    ];
}

function value_lines($value): array
{
    if (is_array($value)) {
        return array_values(array_filter(array_map('strval', $value), fn($line) => trim($line) !== ''));
    }

    return array_values(array_filter(array_map('trim', explode("\n", (string) ($value ?? ''))), fn($line) => $line !== ''));
}

function format_field_value($value): string
{
    $lines = value_lines($value);
    return count($lines) ? implode("\n", $lines) : '(празно)';
}

function added_lines($before, $after): array
{
    $beforeLines = value_lines($before);
    return array_values(array_filter(value_lines($after), fn($line) => !in_array($line, $beforeLines, true)));
}

function build_field_change_text(array $before, array $after, array $fields): string
{
    $blocks = [];

    foreach ($fields as $field) {
        $key = $field['key'];
        if (stable_json($before[$key] ?? '') === stable_json($after[$key] ?? '')) {
            continue;
        }

        $added = added_lines($before[$key] ?? '', $after[$key] ?? '');
        $parts = ['Поле: ' . $field['label']];
        if (count($added)) {
            $parts[] = "Допълнено:\n" . implode("\n", $added);
        } else {
            $parts[] = "Преди:\n" . format_field_value($before[$key] ?? '');
        }
        $parts[] = "Сега:\n" . format_field_value($after[$key] ?? '');
        $blocks[] = implode("\n", $parts);
    }

    return implode("\n\n", $blocks);
}

function site_names_from_ids(array $siteIds, array $siteNames): array
{
    return array_map(fn($siteId) => $siteNames[$siteId] ?? $siteId, $siteIds);
}

function build_assignment_change_text(array $previousSiteIds, array $nextSiteIds, array $siteNames): string
{
    $added = array_values(array_filter($nextSiteIds, fn($siteId) => !in_array($siteId, $previousSiteIds, true)));
    $removed = array_values(array_filter($previousSiteIds, fn($siteId) => !in_array($siteId, $nextSiteIds, true)));
    $current = site_names_from_ids($nextSiteIds, $siteNames);
    $parts = [];

    if (count($added)) {
        $parts[] = "Добавено към сайтове:\n" . implode("\n", site_names_from_ids($added, $siteNames));
    }

    if (count($removed)) {
        $parts[] = "Премахнато от сайтове:\n" . implode("\n", site_names_from_ids($removed, $siteNames));
    }

    $parts[] = "Сега се показва в:\n" . (count($current) ? implode("\n", $current) : '(няма избрани сайтове)');
    return implode("\n\n", $parts);
}

function split_assignment_key(string $key): array
{
    $parts = explode('||', $key);
    return [
        'moduleGroup' => $parts[0] ?? '',
        'moduleName' => $parts[1] ?? '',
    ];
}

function first_added_module(array $before, array $after): ?array
{
    foreach ($after as $next) {
        $exists = false;
        foreach ($before as $previous) {
            if (stable_json($previous) === stable_json($next)) {
                $exists = true;
                break;
            }
        }
        if (!$exists && is_array($next)) {
            return $next;
        }
    }

    return null;
}

function first_added_value(array $before, array $after): string
{
    foreach ($after as $next) {
        if (!in_array($next, $before, true)) {
            return (string) $next;
        }
    }

    return '';
}

function build_cms_event(array $previousState, array $nextState, array $siteNames): array
{
    $baseEvent = [
        'app' => 'Global CMS Map',
        'source' => 'globalcmszadanie',
        'occurredAt' => gmdate('c'),
    ];

    $addedModule = first_added_module($previousState['customModules'], $nextState['customModules']);
    if ($addedModule !== null) {
        return array_merge($baseEvent, [
            'eventType' => 'module.created',
            'action' => 'Създаден е модул',
            'title' => 'Създаден е модул "' . ($addedModule['itemLabel'] ?? '') . '"',
            'moduleGroup' => $addedModule['groupTitle'] ?? '',
            'moduleName' => $addedModule['itemLabel'] ?? '',
            'description' => 'Модулът е добавен в група "' . ($addedModule['groupTitle'] ?? '') . '".',
        ]);
    }

    $deletedModuleKey = first_added_value($previousState['deletedModules'], $nextState['deletedModules']);
    if ($deletedModuleKey !== '') {
        $moduleInfo = split_assignment_key($deletedModuleKey);
        return array_merge($baseEvent, $moduleInfo, [
            'eventType' => 'module.deleted',
            'action' => 'Изтрит е модул',
            'title' => 'Изтрит е модул "' . $moduleInfo['moduleName'] . '"',
            'description' => 'Модулът е премахнат от група "' . $moduleInfo['moduleGroup'] . '".',
        ]);
    }

    $detailKey = first_changed_key($previousState['details'], $nextState['details']);
    if ($detailKey !== '') {
        $detailInfo = split_state_key($detailKey, $siteNames);
        $isUpdate = array_key_exists($detailKey, $previousState['details']);
        return array_merge($baseEvent, $detailInfo, [
            'eventType' => $isUpdate ? 'detail.updated' : 'detail.created',
            'action' => $isUpdate ? 'Обновено е описание' : 'Добавено е описание',
            'title' => ($isUpdate ? 'Обновено' : 'Добавено') . ' е описание за "' . $detailInfo['moduleName'] . '"',
            'description' => 'Промяна в ' . $detailInfo['siteName'] . ', модул "' . $detailInfo['moduleName'] . '" (' . $detailInfo['moduleGroup'] . ').',
        ]);
    }

    $assignmentKey = first_changed_key($previousState['assignments'], $nextState['assignments']);
    if ($assignmentKey !== '') {
        $assignmentInfo = split_assignment_key($assignmentKey);
        return array_merge($baseEvent, $assignmentInfo, [
            'eventType' => 'assignment.updated',
            'action' => 'Обновено е разпределение на модул',
            'title' => 'Обновено е разпределение за "' . $assignmentInfo['moduleName'] . '"',
            'description' => 'Променени са сайтовете, към които е закачен модулът "' . $assignmentInfo['moduleName'] . '".',
        ]);
    }

    $completedKey = first_changed_key($previousState['completed'], $nextState['completed']);
    if ($completedKey !== '') {
        $completedInfo = split_state_key($completedKey, $siteNames);
        $completed = (bool) ($nextState['completed'][$completedKey] ?? false);
        return array_merge($baseEvent, $completedInfo, [
            'eventType' => $completed ? 'module.completed' : 'module.reopened',
            'action' => $completed ? 'Маркиран е модул като готов' : 'Модул е върнат като неготов',
            'title' => ($completed ? 'Готово' : 'Върнато') . ': "' . $completedInfo['moduleName'] . '"',
            'description' => $completedInfo['siteName'] . ': "' . $completedInfo['moduleName'] . '" е ' . ($completed ? 'маркиран като готов' : 'върнат като неготов') . '.',
        ]);
    }

    $siteMetaKey = first_changed_key($previousState['siteMeta'], $nextState['siteMeta']);
    if ($siteMetaKey !== '') {
        return array_merge($baseEvent, [
            'eventType' => 'site.updated',
            'action' => 'Обновени са данни за сайт',
            'title' => 'Обновени са данни за ' . ($siteNames[$siteMetaKey] ?? $siteMetaKey),
            'siteId' => $siteMetaKey,
            'siteName' => $siteNames[$siteMetaKey] ?? $siteMetaKey,
            'description' => 'Променени са полета, процеси или бележки за сайта.',
        ]);
    }

    if (stable_json($previousState['moduleLayout']) !== stable_json($nextState['moduleLayout'])) {
        return array_merge($baseEvent, [
            'eventType' => 'module.layout.updated',
            'action' => 'Променена е подредба на модули',
            'title' => 'Променена е подредба или група на модул',
            'description' => 'Има промяна в структурата на CMS модулите.',
        ]);
    }

    $mvpItem = first_added_module($previousState['customMvpItems'], $nextState['customMvpItems']);
    if ($mvpItem !== null) {
        return array_merge($baseEvent, [
            'eventType' => 'mvp.created',
            'action' => 'Добавена е MVP точка',
            'title' => 'Добавена е MVP точка',
            'description' => $mvpItem['text'] ?? 'Добавена е нова точка към MVP списъка.',
        ]);
    }

    $question = first_added_value($previousState['customQuestions'], $nextState['customQuestions']);
    if ($question !== '') {
        return array_merge($baseEvent, [
            'eventType' => 'question.created',
            'action' => 'Добавен е въпрос',
            'title' => 'Добавен е въпрос',
            'description' => $question,
        ]);
    }

    $checkedQuestionKey = first_changed_key($previousState['checkedQuestions'], $nextState['checkedQuestions']);
    if ($checkedQuestionKey !== '') {
        return array_merge($baseEvent, [
            'eventType' => 'question.updated',
            'action' => 'Обновен е въпрос',
            'title' => 'Обновен е статус на въпрос',
            'description' => $checkedQuestionKey,
        ]);
    }

    return array_merge($baseEvent, [
        'eventType' => 'state.updated',
        'action' => 'Има промяна в CMS картата',
        'title' => 'Има промяна в CMS картата',
        'description' => 'Записан е нов вариант на cms-state.json.',
    ]);
}

function build_client_cms_event(array $clientEvent): array
{
    $action = $clientEvent['action'] ?? $clientEvent['title'] ?? 'Има промяна в CMS картата';

    return [
        'app' => 'Global CMS Map',
        'source' => 'globalcmszadanie',
        'occurredAt' => gmdate('c'),
        'eventType' => $clientEvent['eventType'] ?? 'state.updated',
        'action' => $action,
        'title' => $clientEvent['title'] ?? $action,
        'siteId' => $clientEvent['siteId'] ?? '',
        'siteName' => $clientEvent['siteName'] ?? '',
        'moduleGroup' => $clientEvent['moduleGroup'] ?? '',
        'moduleName' => $clientEvent['moduleName'] ?? '',
        'description' => $clientEvent['description'] ?? $action,
        'changeText' => $clientEvent['changeText'] ?? '',
    ];
}

function enrich_client_cms_event(array $clientEvent, array $previousState, array $nextState, array $siteNames): array
{
    if (($clientEvent['changeText'] ?? '') !== '') {
        return $clientEvent;
    }

    $eventType = $clientEvent['eventType'] ?? '';
    if (in_array($eventType, ['detail.updated', 'detail.created', 'editor.saved'], true)) {
        $key = ($clientEvent['siteId'] ?? '') . '||' . ($clientEvent['moduleGroup'] ?? '') . '||' . ($clientEvent['moduleName'] ?? '');
        $clientEvent['changeText'] = build_field_change_text($previousState['details'][$key] ?? [], $nextState['details'][$key] ?? [], [
            ['key' => 'summary', 'label' => 'Кратко описание'],
            ['key' => 'includes', 'label' => 'Какво включва'],
            ['key' => 'fields', 'label' => 'Полета / данни'],
            ['key' => 'note', 'label' => 'Бележка за заданието'],
        ]);
        return $clientEvent;
    }

    if ($eventType === 'site.updated') {
        $siteId = $clientEvent['siteId'] ?? '';
        $clientEvent['changeText'] = build_field_change_text($previousState['siteMeta'][$siteId] ?? [], $nextState['siteMeta'][$siteId] ?? [], [
            ['key' => 'fields', 'label' => 'Полета / данни'],
            ['key' => 'processes', 'label' => 'Процеси'],
            ['key' => 'notes', 'label' => 'Бележки'],
        ]);
    }

    if ($eventType === 'assignment.updated') {
        $key = ($clientEvent['moduleGroup'] ?? '') . '||' . ($clientEvent['moduleName'] ?? '');
        $clientEvent['changeText'] = build_assignment_change_text($previousState['assignments'][$key] ?? [], $nextState['assignments'][$key] ?? [], $siteNames);
    }

    return $clientEvent;
}

function notify_n8n(array $event, string $webhookUrl, string $webhookSecret): void
{
    global $webhookLogFile;

    if ($webhookUrl === '') {
        return;
    }

    $body = json_encode($event, JSON_UNESCAPED_UNICODE);
    $headers = [
        'Content-Type: application/json',
    ];
    if ($webhookSecret !== '') {
        $headers[] = 'X-CMS-Webhook-Secret: ' . $webhookSecret;
    }

    if (function_exists('curl_init')) {
        $ch = curl_init($webhookUrl);
        curl_setopt_array($ch, [
            CURLOPT_POST => true,
            CURLOPT_HTTPHEADER => $headers,
            CURLOPT_POSTFIELDS => $body,
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_TIMEOUT => 8,
            CURLOPT_CONNECTTIMEOUT => 5,
            CURLOPT_FOLLOWLOCATION => true,
            CURLOPT_SSL_VERIFYPEER => true,
            CURLOPT_SSL_VERIFYHOST => 2,
        ]);

        $responseBody = curl_exec($ch);
        $statusCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
        $error = curl_error($ch);
        curl_close($ch);

        log_webhook_result($webhookLogFile, $webhookUrl, $statusCode, $error, is_string($responseBody) ? $responseBody : '');
        return;
    }

    $context = stream_context_create([
        'http' => [
            'method' => 'POST',
            'header' => implode("\r\n", $headers),
            'content' => $body,
            'timeout' => 8,
            'ignore_errors' => true,
        ],
    ]);

    $responseBody = @file_get_contents($webhookUrl, false, $context);
    $statusCode = 0;
    if (isset($http_response_header[0]) && preg_match('/\s(\d{3})\s/', $http_response_header[0], $matches)) {
        $statusCode = (int) $matches[1];
    }

    log_webhook_result($webhookLogFile, $webhookUrl, $statusCode, '', is_string($responseBody) ? $responseBody : '');
}

function log_webhook_result(string $logFile, string $webhookUrl, int $statusCode, string $error, string $responseBody): void
{
    $line = sprintf(
        "[%s] url=%s status=%s error=%s response=%s\n",
        gmdate('c'),
        $webhookUrl,
        $statusCode ?: 'none',
        $error !== '' ? $error : '-',
        mb_substr(str_replace(["\r", "\n"], ' ', $responseBody), 0, 300)
    );

    @file_put_contents($logFile, $line, FILE_APPEND | LOCK_EX);
}

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    if (!file_exists($stateFile)) {
        file_put_contents($stateFile, json_encode(default_state(), JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT), LOCK_EX);
    }

    $contents = file_get_contents($stateFile);
    if ($contents === false || trim($contents) === '') {
        send_json(200, default_state());
    }

    $decoded = json_decode($contents, true);
    if (!is_array($decoded)) {
        send_json(200, default_state());
    }

    send_json(200, [
        'assignments' => $decoded['assignments'] ?? new stdClass(),
        'details' => $decoded['details'] ?? new stdClass(),
        'completed' => $decoded['completed'] ?? new stdClass(),
        'customModules' => $decoded['customModules'] ?? [],
        'moduleLayout' => $decoded['moduleLayout'] ?? null,
        'collapsedTreeGroups' => $decoded['collapsedTreeGroups'] ?? new stdClass(),
        'customMvpItems' => $decoded['customMvpItems'] ?? [],
        'customQuestions' => $decoded['customQuestions'] ?? [],
        'checkedQuestions' => $decoded['checkedQuestions'] ?? new stdClass(),
        'siteMeta' => $decoded['siteMeta'] ?? new stdClass(),
        'deletedModules' => $decoded['deletedModules'] ?? [],
    ]);
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $previousState = read_previous_state($stateFile);
    $raw = file_get_contents('php://input');
    if ($raw === false || strlen($raw) > 2000000) {
        send_json(400, ['ok' => false, 'error' => 'Invalid request body']);
    }

    $decoded = json_decode($raw, true);
    if (!is_array($decoded)) {
        send_json(400, ['ok' => false, 'error' => 'Invalid JSON']);
    }

    $state = normalize_state($decoded);

    $written = file_put_contents($stateFile, json_encode(state_for_storage($state), JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT), LOCK_EX);
    if ($written === false) {
        send_json(500, ['ok' => false, 'error' => 'Cannot write cms-state.json']);
    }

    $event = isset($decoded['_cmsEvent']) && is_array($decoded['_cmsEvent'])
        ? build_client_cms_event(enrich_client_cms_event($decoded['_cmsEvent'], $previousState, $state, $siteNames))
        : build_cms_event($previousState, $state, $siteNames);

    notify_n8n($event, $n8nWebhookUrl, $n8nWebhookSecret);

    send_json(200, ['ok' => true]);
}

send_json(405, ['ok' => false, 'error' => 'Method not allowed']);
