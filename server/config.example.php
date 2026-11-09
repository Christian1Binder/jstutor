<?php
// Store the real config outside the web root. Point BINDER_TUTOR_CONFIG to its absolute path.
return [
    'dsn' => 'mysql:host=DB_HOST;dbname=DB_NAME;charset=utf8mb4',
    'user' => 'DB_USER',
    'password' => 'REPLACE_OUTSIDE_WEBROOT',
    'registration_enabled' => false,
];
