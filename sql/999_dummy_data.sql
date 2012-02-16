-- MySQL dump 10.13  Distrib 5.1.58, for debian-linux-gnu (x86_64)
--
-- Host: localhost    Database: iafbm
-- ------------------------------------------------------
-- Server version	5.1.58-1ubuntu1

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

--
-- Dumping data for table `personnes`
--

LOCK TABLES `personnes` WRITE;
/*!40000 ALTER TABLE `personnes` DISABLE KEYS */;
INSERT INTO `personnes` VALUES
(1,NULL,NULL,NULL,1,1,'Rice','Damien',NULL,'2011-04-01',NULL,NULL,36,NULL,NULL,NULL),
(2,NULL,NULL,NULL,1,1,'Maryline','Monroe',NULL,'2011-04-01',NULL,NULL,32,NULL,NULL,NULL),
(3,NULL,NULL,NULL,1,1,'Catherine','Deneuve',NULL,'2011-04-01',NULL,NULL,31,NULL,NULL,NULL),
(4,NULL,NULL,NULL,1,1,'Isabelle','Alésiebleu',NULL,'2011-04-01',NULL,NULL,26,NULL,NULL,NULL),
(5,NULL,NULL,NULL,1,1,'Cannelle','Vanille',NULL,'2011-04-01',NULL,NULL,21,NULL,NULL,NULL),
(6,NULL,NULL,NULL,1,1,'Marie','Jesus',NULL,'2011-04-01',NULL,NULL,22,NULL,NULL,NULL),
(7,NULL,NULL,NULL,1,1,'Stefan','Bern',NULL,'2011-04-01',NULL,NULL,14,NULL,NULL,NULL),
(8,NULL,NULL,NULL,1,1,'Matthieu','Kassovic',NULL,'2011-04-01',NULL,NULL,16,NULL,NULL,NULL);
/*!40000 ALTER TABLE `personnes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `adresses`
--

LOCK TABLES `adresses` WRITE;
/*!40000 ALTER TABLE `adresses` DISABLE KEYS */;
INSERT INTO `adresses` VALUES
(1,1,1,'Rue du Bugnon 25','1000','Lausanne',208),
(2,1,2,'Villy 10','1009','Pully',208);
/*!40000 ALTER TABLE `adresses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `personnes_adresses`
--

LOCK TABLES `personnes_adresses` WRITE;
/*!40000 ALTER TABLE `personnes_adresses` DISABLE KEYS */;
INSERT INTO `personnes_adresses` VALUES
(1,1,1,1,1),
(2,1,1,2,NULL);
/*!40000 ALTER TABLE `personnes_adresses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `personnes_emails`
--

LOCK TABLES `personnes_emails` WRITE;
/*!40000 ALTER TABLE `personnes_emails` DISABLE KEYS */;
INSERT INTO `personnes_emails` VALUES
(1,1,1,1,'damien@example.com',NULL),
(2,1,1,2,'damien.prive@example.com',NULL);
/*!40000 ALTER TABLE `personnes_emails` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `personnes_activites`
--

LOCK TABLES `personnes_activites` WRITE;
/*!40000 ALTER TABLE `personnes_activites` DISABLE KEYS */;
INSERT INTO `personnes_activites` VALUES
(2,1,1,1,4,NULL,NULL,NULL),
(3,1,1,2,5,NULL,NULL,NULL),
(4,1,1,24,6,NULL,NULL,NULL),
(5,1,1,25,1,NULL,NULL,NULL),
(6,1,1,28,2,NULL,NULL,NULL),
(7,1,2,39,1,NULL,NULL,NULL),
(8,1,3,17,4,NULL,NULL,NULL),
(9,1,4,48,1,NULL,NULL,NULL),
(10,1,5,19,4,NULL,NULL,NULL),
(11,1,6,10,5,NULL,NULL,NULL);
/*!40000 ALTER TABLE `personnes_activites` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `personnes_formations`
--

LOCK TABLES `personnes_formations` WRITE;
/*!40000 ALTER TABLE `personnes_formations` DISABLE KEYS */;
INSERT INTO `personnes_formations` VALUES
(1,1,1,1,'Lausanne',NULL,'A demander'),
(2,1,1,4,'Lucens','1992-09-28',NULL),
(3,1,2,1,NULL,NULL,NULL);
/*!40000 ALTER TABLE `personnes_formations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `commissions`
--

LOCK TABLES `commissions` WRITE;
/*!40000 ALTER TABLE `commissions` DISABLE KEYS */;
INSERT INTO `commissions` VALUES
(1,1,1,'Commission de titularisation pour le Professeur X','Commentaire concernant l\'aperçu général',1,1,2),
(2,1,NULL,'Commission de titularisation pour le Docteur Y','Cette commission est en suspens en raison de X, Y et Z.',1,3,1),
(3,1,NULL,'Commission vide pour tests',NULL,1,1,1);
/*!40000 ALTER TABLE `commissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `candidats`
--

LOCK TABLES `candidats` WRITE;
/*!40000 ALTER TABLE `candidats` DISABLE KEYS */;
INSERT INTO `candidats` VALUES
(1,1,1,'Nom-Candidat','Prénom Candidat',1,NULL,NULL,'1980-10-01',NULL,NULL,'Rue du candidat 1','100','Lausanne',208,'41','219996633','un.candidat@example.com',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'Post-doctorant','Lausanne'),
(2,1,1,'Nom-Candidate','Prénom Candidate',2,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),
(3,1,1,'Candidat-Surprise','Arrive',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `candidats` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `candidats_formations`
--

LOCK TABLES `candidats_formations` WRITE;
/*!40000 ALTER TABLE `candidats_formations` DISABLE KEYS */;
INSERT INTO `candidats_formations` VALUES
(2,1,1,1,NULL,NULL,'A fournir lors du prochain contact tél');
/*!40000 ALTER TABLE `candidats_formations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `commissions_candidats_commentaires`
--

LOCK TABLES `commissions_candidats_commentaires` WRITE;
/*!40000 ALTER TABLE `commissions_candidats_commentaires` DISABLE KEYS */;
INSERT INTO `commissions_candidats_commentaires` VALUES
(1,1,1,1,'Commentaire concernant la phase candidat'),
(2,1,0,2,NULL),
(3,1,0,3,NULL);
/*!40000 ALTER TABLE `commissions_candidats_commentaires` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `commissions_creations`
--

LOCK TABLES `commissions_creations` WRITE;
/*!40000 ALTER TABLE `commissions_creations` DISABLE KEYS */;
INSERT INTO `commissions_creations` VALUES
(1,1,1,1,'2011-10-05','2011-10-06','2011-10-07','2011-10-05','2011-10-05','2011-10-10','Commentaire concernant la phase de création'),
(2,1,0,2,NULL,NULL,NULL,NULL,NULL,NULL,NULL),
(3,1,0,3,NULL,NULL,NULL,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `commissions_creations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `commissions_finalisations`
--

LOCK TABLES `commissions_finalisations` WRITE;
/*!40000 ALTER TABLE `commissions_finalisations` DISABLE KEYS */;
INSERT INTO `commissions_finalisations` VALUES
(1,1,1,1,2,'2011-12-01',0,'Commentaire concernant la réception du contrat','2012-01-01','Commentaire concernant la phase de finalisation'),
(2,1,0,2,NULL,NULL,0,NULL,NULL,NULL),
(3,1,0,3,NULL,NULL,0,NULL,NULL,NULL);
/*!40000 ALTER TABLE `commissions_finalisations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `commissions_membres`
--

LOCK TABLES `commissions_membres` WRITE;
/*!40000 ALTER TABLE `commissions_membres` DISABLE KEYS */;
INSERT INTO `commissions_membres` VALUES
(1,1,1,1,2,NULL,NULL),
(2,1,4,1,1,NULL,NULL),
(3,1,6,1,2,NULL,NULL),
(4,1,7,1,2,NULL,NULL),
(5,1,8,1,2,NULL,NULL),
(6,1,2,2,1,NULL,NULL),
(7,1,1,2,2,NULL,NULL);
/*!40000 ALTER TABLE `commissions_membres` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `commissions_travails`
--

LOCK TABLES `commissions_travails` WRITE;
/*!40000 ALTER TABLE `commissions_travails` DISABLE KEYS */;
INSERT INTO `commissions_travails` VALUES
(1,1,1,1,1,2,3,'Commentaire concernant la phase de travail'),
(2,1,0,2,NULL,NULL,NULL,NULL),
(3,1,0,3,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `commissions_travails` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `commissions_travails_evenements`
--

LOCK TABLES `commissions_travails_evenements` WRITE;
/*!40000 ALTER TABLE `commissions_travails_evenements` DISABLE KEYS */;
INSERT INTO `commissions_travails_evenements` VALUES
(1,1,1,1,'2011-10-03',1,90),
(2,1,1,2,'2011-09-07',1,45),
(3,1,1,3,'2011-10-05',1,30);
/*!40000 ALTER TABLE `commissions_travails_evenements` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `commissions_validations`
--

LOCK TABLES `commissions_validations` WRITE;
/*!40000 ALTER TABLE `commissions_validations` DISABLE KEYS */;
INSERT INTO `commissions_validations` VALUES
(1,1,1,1,'2011-11-01',2,'Commentaire de validation par le Décanant\n\nNotez que les commentaires peuvent être rédigés sur plusieurs lignes, le champs y relatif s\'agrandit en conséquence','2011-11-02','Commentaire relatif au commentaire DG-CHUV','2011-11-03',2,'Commentaire concernant la validation par le CF','2011-11-04',4,'Commentaire concernant la validation par le CDir','2011-11-07','2011-11-06','Commentaire relatif à la phase de validation de rapport'),
(2,1,0,2,NULL,1,NULL,NULL,NULL,NULL,1,NULL,NULL,1,NULL,NULL,NULL,NULL),
(3,1,0,3,NULL,1,NULL,NULL,NULL,NULL,1,NULL,NULL,1,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `commissions_validations` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2012-01-05 14:50:44
