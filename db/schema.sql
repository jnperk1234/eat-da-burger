CREATE DATABASE burgers_db;
use 'burgers_db';

CREATE  TABLE 'burgers'
(
    'id' int(10) NOT NULL AUTO_INCREMENT,
    'burger_name' VARCHAR (255) NOT NULL,
    'devoured' BOOLEAN DEFAULT false,
    'date' TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id)
);