-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`roles`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`roles` (
  `id` INT  AUTO_INCREMENT,
  `name` TEXT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`countries`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`countries` (
  `id` INT  AUTO_INCREMENT,
  `name` TEXT NULL,
  `code` CHAR(3) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`users` (
  `id` INT  AUTO_INCREMENT,
  `name` TEXT NOT NULL,
  `surname` TEXT NOT NULL,
  `email` TEXT NULL,
  `password` TEXT NULL,
  `avatar` text NOT NULL,
  `roles_id` INT NOT NULL,
  `countries_Id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_users_roles1_idx` (`roles_id` ASC),
  INDEX `fk_users_country1_idx` (`countries_Id` ASC),
  CONSTRAINT `fk_users_roles1`
    FOREIGN KEY (`roles_id`)
    REFERENCES `mydb`.`roles` (`id`)
    ON DELETE  CASCADE
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_users_country1`
    FOREIGN KEY (`countries_Id`)
    REFERENCES `mydb`.`countries` (`id`)
    ON DELETE  CASCADE
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`dificulties`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`dificulties` (
  `id` INT  AUTO_INCREMENT,
  `name` TEXT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`activities`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`activities` (
  `id` INT  AUTO_INCREMENT,
  `name` TEXT NULL,
  `description` TEXT NULL,
  `price` DECIMAL(11,2) NOT NULL,
  `dateStart` DATETIME NULL,
  `dateFinish` DATETIME NULL,
  `dificulties_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_Activity_Dificulty1_idx` (`dificulties_id` ASC),
  CONSTRAINT `fk_Activity_Dificulty1`
    FOREIGN KEY (`dificulties_id`) 
    REFERENCES `mydb`.`dificulties` (`id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`activity_images`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`activity_images` (
  `id` INT  AUTO_INCREMENT,
  `name` TEXT NULL,
  `activities_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_Images_Activity1_idx` (`activities_id` ASC),
  CONSTRAINT `fk_Images_Activity1`
    FOREIGN KEY (`activities_id`)
    REFERENCES `mydb`.`activities` (`id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
