<?php
declare(strict_types=1);

$stateFile = dirname(__DIR__) . DIRECTORY_SEPARATOR . 'cms-state.json';

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
    ];
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
    ]);
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $raw = file_get_contents('php://input');
    if ($raw === false || strlen($raw) > 2000000) {
        send_json(400, ['ok' => false, 'error' => 'Invalid request body']);
    }

    $decoded = json_decode($raw, true);
    if (!is_array($decoded)) {
        send_json(400, ['ok' => false, 'error' => 'Invalid JSON']);
    }

    $state = [
        'assignments' => $decoded['assignments'] ?? new stdClass(),
        'details' => $decoded['details'] ?? new stdClass(),
        'completed' => $decoded['completed'] ?? new stdClass(),
        'customModules' => $decoded['customModules'] ?? [],
        'moduleLayout' => $decoded['moduleLayout'] ?? null,
    ];

    $written = file_put_contents($stateFile, json_encode($state, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT), LOCK_EX);
    if ($written === false) {
        send_json(500, ['ok' => false, 'error' => 'Cannot write cms-state.json']);
    }

    send_json(200, ['ok' => true]);
}

send_json(405, ['ok' => false, 'error' => 'Method not allowed']);
