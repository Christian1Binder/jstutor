-- Design scaffold only. Not an implemented authentication backend.
CREATE TABLE users (
 id CHAR(36) PRIMARY KEY,
 email VARCHAR(254) NOT NULL UNIQUE,
 display_name VARCHAR(80) NOT NULL,
 password_hash VARCHAR(255) NOT NULL,
 email_verified_at DATETIME NULL,
 created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
 updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
CREATE TABLE sessions (
 token_hash CHAR(64) PRIMARY KEY,
 user_id CHAR(36) NOT NULL,
 expires_at DATETIME NOT NULL,
 created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
 FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
 INDEX sessions_user (user_id), INDEX sessions_expiry (expires_at)
);
CREATE TABLE learning_states (
 user_id CHAR(36) PRIMARY KEY,
 schema_version INT NOT NULL DEFAULT 1,
 revision BIGINT NOT NULL DEFAULT 0,
 state_json JSON NOT NULL,
 updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
 FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);
CREATE TABLE auth_tokens (
 token_hash CHAR(64) PRIMARY KEY,
 user_id CHAR(36) NOT NULL,
 purpose VARCHAR(24) NOT NULL,
 expires_at DATETIME NOT NULL,
 consumed_at DATETIME NULL,
 FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
 INDEX auth_token_expiry (expires_at)
);
