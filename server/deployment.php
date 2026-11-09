<?php
declare(strict_types=1);
// Install this helper beside api.php and setup.php in the application's web directory.
function tutor_document_root(): string {
    return rtrim(realpath($_SERVER['DOCUMENT_ROOT'] ?? __DIR__) ?: __DIR__, DIRECTORY_SEPARATOR);
}
function tutor_config_path(): string {
    $override = getenv('BINDER_TUTOR_CONFIG');
    if ($override) return $override;
    // The hash separates multiple tutor installations on the same webspace.
    $identity = substr(hash('sha256', realpath(__DIR__) ?: __DIR__), 0, 12);
    return dirname(tutor_document_root()) . '/.binder-tutor-' . $identity . '/config.php';
}
function tutor_path_is_public(string $path): bool {
    $real = realpath($path);
    if ($real === false) return true;
    $web = tutor_document_root();
    return $real === $web || str_starts_with($real, $web . DIRECTORY_SEPARATOR);
}
function tutor_https(): bool {
    return (!empty($_SERVER['HTTPS']) && strtolower((string)$_SERVER['HTTPS']) !== 'off') || (int)($_SERVER['SERVER_PORT'] ?? 0) === 443;
}
