CREATE DATABASE IF NOT EXISTS blog_zelda;
USE blog_zelda;

-- Create a user and grant privileges
CREATE USER IF NOT EXISTS 'blog_user'@'%' IDENTIFIED BY 'blog_password';
GRANT ALL PRIVILEGES ON blog_zelda.* TO 'blog_user'@'%' WITH GRANT OPTION;
FLUSH PRIVILEGES;

CREATE TABLE IF NOT EXISTS characters (
    id_character INT AUTO_INCREMENT PRIMARY KEY,
    name_character VARCHAR(255) NOT NULL,
    description_character TEXT NOT NULL,
    img_character TEXT
);

CREATE TABLE IF NOT EXISTS games (
    id_game int AUTO_INCREMENT PRIMARY KEY,
    name_game VARCHAR(255) NOT NULL,
    img_game TEXT NOT NULL,
    date_released_game DATE NOT NULL,
    description_game TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS objects (
    id_object int AUTO_INCREMENT PRIMARY KEY,
    name_object VARCHAR(255) NOT NULL,
    img_object TEXT NOT NULL,
    description_object TEXT NOT NULL
);
