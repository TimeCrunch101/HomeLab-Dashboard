CREATE DATABASE  IF NOT EXISTS `dashboard`;
USE `dashboard`;
-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: CTL-DATA01    Database: dashboard
-- ------------------------------------------------------
-- Server version	8.0.30

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `dbo_creds`
--

DROP TABLE IF EXISTS `dbo_creds`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `dbo_creds` (
  `cred_id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(50) DEFAULT NULL,
  `username` varchar(50) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `link` varchar(255) DEFAULT NULL,
  `related_service` int NOT NULL,
  PRIMARY KEY (`cred_id`),
  KEY `serviceFK_idx` (`related_service`),
  CONSTRAINT `credFK` FOREIGN KEY (`related_service`) REFERENCES `dbo_services` (`service_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `dbo_document_drafts`
--

DROP TABLE IF EXISTS `dbo_document_drafts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `dbo_document_drafts` (
  `draft_id` int NOT NULL AUTO_INCREMENT,
  `draft_title` varchar(255) DEFAULT NULL,
  `draft_html` longtext NOT NULL,
  `timestamp` varchar(60) DEFAULT NULL,
  `related_service` int DEFAULT NULL,
  PRIMARY KEY (`draft_id`),
  KEY `draftFK_idx` (`related_service`),
  CONSTRAINT `draftFK` FOREIGN KEY (`related_service`) REFERENCES `dbo_services` (`service_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=76 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `dbo_documents`
--

DROP TABLE IF EXISTS `dbo_documents`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `dbo_documents` (
  `doc_id` int NOT NULL AUTO_INCREMENT,
  `doc_title` varchar(50) DEFAULT NULL,
  `doc_html` longtext,
  `doc_timestamp` varchar(45) DEFAULT NULL,
  `related_service` int DEFAULT NULL,
  PRIMARY KEY (`doc_id`),
  KEY `docFK_idx` (`related_service`),
  CONSTRAINT `docFK` FOREIGN KEY (`related_service`) REFERENCES `dbo_services` (`service_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `dbo_hardware`
--

DROP TABLE IF EXISTS `dbo_hardware`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `dbo_hardware` (
  `hardware_id` int NOT NULL AUTO_INCREMENT,
  `make_model` varchar(45) DEFAULT NULL,
  `hostname` varchar(45) DEFAULT NULL,
  `ipmi` varchar(45) DEFAULT NULL,
  `ram` varchar(45) DEFAULT NULL,
  `storage` varchar(45) DEFAULT NULL,
  `nics` varchar(45) DEFAULT NULL,
  `cost` int DEFAULT NULL,
  `serial_number` varchar(45) DEFAULT NULL,
  `related_service` int NOT NULL,
  PRIMARY KEY (`hardware_id`),
  KEY `serviceFK_idx` (`related_service`),
  CONSTRAINT `serviceFK` FOREIGN KEY (`related_service`) REFERENCES `dbo_services` (`service_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `dbo_services`
--

DROP TABLE IF EXISTS `dbo_services`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `dbo_services` (
  `service_id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(45) DEFAULT NULL,
  `homepage` varchar(255) DEFAULT NULL,
  `service_username` varchar(45) DEFAULT NULL,
  `service_password` varchar(255) DEFAULT NULL,
  `service_icon` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`service_id`)
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed