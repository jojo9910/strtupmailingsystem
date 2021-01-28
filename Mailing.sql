DROP DATABASE IF EXISTS Mailing;
CREATE DATABASE Mailing;
DROP TABLE IF EXISTS users;
CREATE TABLE users(
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
email VARCHAR(255) NOT NULL UNIQUE,
created_at TIMESTAMP DEFAULT NOW()
);

INSERT INTO users(id,email,created_at) VALUES('1','bingbing@gmail.com',current_timestamp());