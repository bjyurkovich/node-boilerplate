
DROP DATABASE IF EXISTS `ExampleDB`;
CREATE SCHEMA IF NOT EXISTS `ExampleDB` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci ;
USE `ExampleDB` ;

-- -----------------------------------------------------
-- Table `User`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `User` ;

CREATE  TABLE IF NOT EXISTS `User` (
  `id` BIGINT NOT NULL AUTO_INCREMENT ,
  `firstName` VARCHAR(45) NULL ,
  `lastName` VARCHAR(45) NULL ,
  `password` VARCHAR(1024) NULL ,
  `lastUpdated` TIMESTAMP DEFAULT 0 ON UPDATE CURRENT_TIMESTAMP,
  `email` VARCHAR(45) NOT NULL ,
  PRIMARY KEY (`id`) ,
  UNIQUE KEY `id` (`id`))
ENGINE = InnoDB;


INSERT INTO `User` (`firstName`, `lastName`, `password`, `email`) VALUES ('first', 'last', SHA2('1234', 256), 'user@email.com');
