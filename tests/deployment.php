<?php
declare(strict_types=1);
require __DIR__ . '/../server/deployment.php';
function check(bool $condition, string $label): void { if (!$condition) throw new RuntimeException($label); }
$_SERVER['DOCUMENT_ROOT'] = realpath(__DIR__ . '/..');
$default = tutor_config_path();
check(!str_starts_with($default, tutor_document_root() . '/'), 'Config must be outside document root');
check(tutor_path_is_public(tutor_document_root()), 'Webroot must be identified as public');
check(!tutor_path_is_public(dirname(tutor_document_root())), 'Parent must be private relative to this root');
putenv('BINDER_TUTOR_CONFIG=/private/explicit/config.php');
check(tutor_config_path()==='/private/explicit/config.php', 'Existing deployment overrides must remain supported');
putenv('BINDER_TUTOR_CONFIG');
$_SERVER['HTTPS']='off';$_SERVER['SERVER_PORT']='80';check(!tutor_https(), 'Plain HTTP must be rejected');
$_SERVER['HTTPS']='on';check(tutor_https(), 'HTTPS must be accepted');
$_SERVER['HTTPS']='off';$_SERVER['SERVER_PORT']='443';check(tutor_https(), 'TLS server port must be accepted');
echo "PASS: private configuration paths, deployment override and HTTPS detection.\n";
