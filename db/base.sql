-- MySQL dump 10.13  Distrib 5.7.9, for Win64 (x86_64)
--
-- Host: localhost    Database: sbertest
-- ------------------------------------------------------
-- Server version	5.5.23

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

-- -----------------------------------------------------
-- Schema SberTest
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `SberTest` DEFAULT CHARACTER SET utf8 ;
USE `SberTest` ;

--
-- Table structure for table `accounts`
--

DROP TABLE IF EXISTS `accounts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `accounts` (
  `id_account` bigint(20) NOT NULL AUTO_INCREMENT,
  `id_client` bigint(20) DEFAULT NULL,
  `amount` double DEFAULT NULL,
  PRIMARY KEY (`id_account`),
  KEY `FK_client_idx` (`id_client`),
  CONSTRAINT `FK_client` FOREIGN KEY (`id_client`) REFERENCES `clients` (`id_client`) ON DELETE NO ACTION ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `accounts`
--

LOCK TABLES `accounts` WRITE;
/*!40000 ALTER TABLE `accounts` DISABLE KEYS */;
INSERT INTO `accounts` VALUES (1,1,20000),(2,1,23442.1),(3,2,654233.5),(4,2,8223.1),(5,3,13594.3),(6,3,12463.22),(7,3,5920.5),(8,4,34543.8),(9,4,1492.54),(10,4,92123.62),(11,5,324112.5),(12,5,81364.21),(13,5,44782.3),(14,1,43534),(15,1,324234),(16,4,34542),(17,6,53453.45),(18,7,34553.76),(19,1,343),(20,1,43523),(21,1,23546),(22,8,234442.12);
/*!40000 ALTER TABLE `accounts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `clients`
--

DROP TABLE IF EXISTS `clients`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `clients` (
  `id_client` bigint(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(200) DEFAULT NULL,
  `age` tinyint(4) DEFAULT NULL,
  `address` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id_client`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `clients`
--

LOCK TABLES `clients` WRITE;
/*!40000 ALTER TABLE `clients` DISABLE KEYS */;
INSERT INTO `clients` VALUES (1,'Ирина',35,'Менделеевский бульвар, 10'),(2,'Сергей',23,'Камышовая ул, 4'),(3,'Иван',19,'Загородный пр., 17 к.2'),(4,'Елизавета',35,'пер. Водников, 3'),(5,'Кирилл',24,'Камышовая 35'),(6,'Иван Иванов',18,'Марата 45'),(7,'Сергей Петров',45,'Устюжная 21 к.2'),(8,'Елизаров Алексей',34,'Лесная 45');
/*!40000 ALTER TABLE `clients` ENABLE KEYS */;
UNLOCK TABLES;


--
-- Create user
--

SET SQL_MODE = '';
GRANT USAGE ON *.* TO sber_user;
 DROP USER sber_user@localhost;
SET SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';
CREATE USER 'sber_user'@'localhost' IDENTIFIED BY '12345';

GRANT SELECT, INSERT, TRIGGER ON TABLE `SberTest`.* TO 'sber_user';


/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-04-10  8:29:59
