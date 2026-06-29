CREATE DATABASE  IF NOT EXISTS `rva_rezervacija_karata` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `rva_rezervacija_karata`;
-- MySQL dump 10.13  Distrib 8.0.46, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: rva_rezervacija_karata
-- ------------------------------------------------------
-- Server version	9.3.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `pozoriste`
--

DROP TABLE IF EXISTS `pozoriste`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pozoriste` (
  `pozoriste_id` int unsigned NOT NULL AUTO_INCREMENT,
  `naziv` varchar(45) NOT NULL,
  PRIMARY KEY (`pozoriste_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pozoriste`
--

LOCK TABLES `pozoriste` WRITE;
/*!40000 ALTER TABLE `pozoriste` DISABLE KEYS */;
INSERT INTO `pozoriste` VALUES (1,'Atelje 212'),(2,'Zvezdara teatar'),(3,'Pozorište Boško Buha');
/*!40000 ALTER TABLE `pozoriste` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `predstava`
--

DROP TABLE IF EXISTS `predstava`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `predstava` (
  `predstava_id` int unsigned NOT NULL AUTO_INCREMENT,
  `pozoriste_id` int unsigned NOT NULL,
  `naziv` varchar(45) NOT NULL,
  `opis` text NOT NULL,
  `baner` varchar(255) NOT NULL,
  PRIMARY KEY (`predstava_id`),
  KEY `fk_predstava_pozoriste_id_idx` (`pozoriste_id`),
  CONSTRAINT `FK_5282e8a6ab270ca8f01b49c0984` FOREIGN KEY (`pozoriste_id`) REFERENCES `pozoriste` (`pozoriste_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `predstava`
--

LOCK TABLES `predstava` WRITE;
/*!40000 ALTER TABLE `predstava` DISABLE KEYS */;
INSERT INTO `predstava` VALUES (1,2,'Balkanski špijun','Satira o paranoji Ilije Čvorovića koji u svom podstanaru vidi državnog neprijatelja.','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmCdAhyXCL4lNrhYAAXeiOndrZAWMIuU40NoahkkIDrA&s=10'),(2,2,'Profesionalac','Gorka komedija o susretu bivšeg agenta državne bezbednosti i pisca.','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRHgBVDZzzxNcDt79F_N4zfWwUGMH6BSzBd3wNHhrczA&s=10'),(3,2,'Pasivno pušenje','Urnebesna komedija zabune sa elementima političke satire na našim prostorima.','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_y0B1bHxnXu05vgbG1qHSHdbiVX6xSzw6GsKPldH1GA&s=10'),(4,1,'Radovan Treći','Kultna komedija Dušana Kovačevića o životu porodice u soliteru.','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvszQcapLfGOAz1nSh6F33Hyy9WLuBKfV9TJulr2l3oA&s=10'),(5,1,'Maratonci trče počasni krug','Priča o najstarijoj grobarskoj porodici Topalović i njihovim unutrašnjim sukobima.','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5fK81-PQ61U6muVG1zRgdMTVUOmw0lfke2AMUTCpTvw&s=10'),(6,1,'Avgust u okrugu Ogejdž','Snažna porodična drama koja otkriva mračne tajne i disfunkcionalne odnose.','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5AXoGhGt1h-s9zvZdvKCoZu1CdGG4Nf912ioCKn4nDQ&s=10'),(7,3,'Petar Pan','Bezvremena priča o dečaku koji ne želi da odraste i njegovim avanturama u Nedođiji.','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSE1llwhSA7p4lGb2a_jyc1JjxwcTlFiNYK82UMqN-_w&s=10'),(8,3,'Crvenkapa','Klasična bajka za decu prilagođena modernoj i zabavnoj pozorišnoj sceni.','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd2bvpjS4um5MNELz24DTwdNuNTLikvvcVFTfBN3tiTA&s=10'),(9,3,'Snežana i sedam patuljaka','Čuvena priča o lepoj princezi, zloj kraljici i njenom čarobnom ogledalu.','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4_BLsy8yx8AL9t3XttWIVtYEbDfPTcKViikGd0E22OQ&s=10');
/*!40000 ALTER TABLE `predstava` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rezervacija`
--

DROP TABLE IF EXISTS `rezervacija`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `rezervacija` (
  `rezervacija_id` int unsigned NOT NULL AUTO_INCREMENT,
  `predstava_id` int unsigned NOT NULL,
  `user_id` int unsigned NOT NULL,
  `broj_karata` int unsigned NOT NULL,
  `paid_at` datetime DEFAULT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT NULL,
  `deleted_at` datetime DEFAULT NULL,
  PRIMARY KEY (`rezervacija_id`),
  KEY `fk_rezervacija_predstava_id_idx` (`predstava_id`),
  KEY `fk_rezervacija_user_id_idx` (`user_id`),
  CONSTRAINT `FK_1c92ee7c23b58ac89e865a24592` FOREIGN KEY (`predstava_id`) REFERENCES `predstava` (`predstava_id`),
  CONSTRAINT `FK_b42aa168d9925f7b487c3fa2775` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rezervacija`
--

LOCK TABLES `rezervacija` WRITE;
/*!40000 ALTER TABLE `rezervacija` DISABLE KEYS */;
INSERT INTO `rezervacija` VALUES (1,2,1,2,NULL,'2026-06-26 19:54:47','2026-06-26 23:21:44',NULL),(2,7,1,4,NULL,'2026-06-28 20:22:43','2026-06-28 21:02:09',NULL);
/*!40000 ALTER TABLE `rezervacija` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `user_id` int unsigned NOT NULL AUTO_INCREMENT,
  `ime` varchar(45) NOT NULL,
  `prezime` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `password` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT NULL,
  `deleted_at` datetime DEFAULT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'Petar','Petrovic','petarpetrovic@gmail.com','$2a$12$onqkDu8G58slc7BLulwGi.uSAvgZNzAv7kCJ56zC82DXoSOjlJg0i','2026-06-23 21:24:18','2026-06-26 23:13:07',NULL),(2,'Marko','Markovic','markomarkovic@gmail.com','$2b$12$2loAmvxrc9q12pwxRju5m.Fri830k6a9VGcxCnW1/.n8cBvz812.e','2026-06-28 00:56:48',NULL,NULL),(3,'Mateo','Horvat','mateohorvat@gmail.com','$2b$12$UvjP9USt0Fg7G47m0ah5juaMt.KY0VZJtKhsbid1/O4QKg9KBgOym','2026-06-28 01:03:25',NULL,NULL);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2026-06-28 22:06:21
