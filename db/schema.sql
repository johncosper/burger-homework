CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
    id INT AUTO_INCREMENT NOT NULL,
    burger_name VARCHAR(64) NOT NULL,
    devoured BOOLEAN,
    primary key (id)
)