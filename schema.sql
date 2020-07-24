CREATE DATABASE codegig_db;
USE codegig_db;

CREATE TABLE IF NOT EXISTS `codegig_db`.`gigs` (
  `id` INT AUTO_INCREMENT,
  `title` VARCHAR(200),
  `technologies` VARCHAR(200),
  `budget` VARCHAR(20),
  `description` TEXT,
  `contact_email` VARCHAR(255),
  `createdAt` DATE,
  `contact_number` DATE,
  PRIMARY KEY (`id`) )
