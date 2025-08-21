

--
-- Table structure for table `enlight`
--

DROP TABLE IF EXISTS `enlight`;

CREATE TABLE `enlight` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` varchar(255) NOT NULL,
  `note_id` int NOT NULL,
  `title` varchar(255) NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `learn_time` varchar(255) DEFAULT NULL,
  `servings` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


--
-- Dumping data for table `enlight`
--

LOCK TABLES `enlight` WRITE;
/*!40000 ALTER TABLE `enlight` DISABLE KEYS */;
/*!40000 ALTER TABLE `enlight` ENABLE KEYS */;
UNLOCK TABLES;

