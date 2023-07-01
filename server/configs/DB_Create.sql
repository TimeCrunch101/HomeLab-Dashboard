CREATE DATABASE  IF NOT EXISTS `dashboard_new`;
USE `dashboard_new`;

--
-- Table structure for table `dbo_creds`
--

DROP TABLE IF EXISTS `dbo_creds`;
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
);

--
-- Table structure for table `dbo_document_drafts`
--

DROP TABLE IF EXISTS `dbo_document_drafts`;
CREATE TABLE `dbo_document_drafts` (
  `draft_id` int NOT NULL AUTO_INCREMENT,
  `draft_title` varchar(255) DEFAULT NULL,
  `draft_html` longtext NOT NULL,
  `timestamp` varchar(60) DEFAULT NULL,
  `related_service` int DEFAULT NULL,
  PRIMARY KEY (`draft_id`),
  KEY `draftFK_idx` (`related_service`),
  CONSTRAINT `draftFK` FOREIGN KEY (`related_service`) REFERENCES `dbo_services` (`service_id`) ON DELETE CASCADE ON UPDATE CASCADE
);

--
-- Table structure for table `dbo_documents`
--

DROP TABLE IF EXISTS `dbo_documents`;
CREATE TABLE `dbo_documents` (
  `doc_id` int NOT NULL AUTO_INCREMENT,
  `doc_title` varchar(50) DEFAULT NULL,
  `doc_html` longtext,
  `doc_timestamp` varchar(45) DEFAULT NULL,
  `related_service` int DEFAULT NULL,
  PRIMARY KEY (`doc_id`),
  KEY `docFK_idx` (`related_service`),
  CONSTRAINT `docFK` FOREIGN KEY (`related_service`) REFERENCES `dbo_services` (`service_id`) ON DELETE CASCADE ON UPDATE CASCADE
);

--
-- Table structure for table `dbo_hardware`
--

DROP TABLE IF EXISTS `dbo_hardware`;
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
);

--
-- Table structure for table `dbo_services`
--

DROP TABLE IF EXISTS `dbo_services`;
CREATE TABLE `dbo_services` (
  `service_id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(45) DEFAULT NULL,
  `homepage` varchar(255) DEFAULT NULL,
  `service_username` varchar(45) DEFAULT NULL,
  `service_password` varchar(255) DEFAULT NULL,
  `service_icon` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`service_id`)
);