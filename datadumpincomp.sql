CREATE DATABASE  IF NOT EXISTS `restaurant_review` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `restaurant_review`;
-- MySQL dump 10.13  Distrib 8.0.31, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: restaurant_review
-- ------------------------------------------------------
-- Server version	8.0.31

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
-- Table structure for table `profile`
--

DROP TABLE IF EXISTS `profile`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `profile` (
  `_id` int NOT NULL AUTO_INCREMENT,
  `profileid` int NOT NULL,
  `username` varchar(60) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(45) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_address` varchar(60) COLLATE utf8mb4_unicode_ci NOT NULL,
  `pfp` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `address` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`_id`),
  UNIQUE KEY `username_UNIQUE` (`username`),
  UNIQUE KEY `profileid_UNIQUE` (`profileid`),
  UNIQUE KEY `email_address_UNIQUE` (`email_address`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `profile`
--

LOCK TABLES `profile` WRITE;
/*!40000 ALTER TABLE `profile` DISABLE KEYS */;
INSERT INTO `profile` VALUES (1,1,'isaac','isaac123','isaac@gmail.com',NULL,'bedok ave 2 block 10f'),(2,2,'sally','sally123','sally@gmail.com',NULL,'marine parade block 12'),(3,3,'amy','john123','amy@gmail.com',NULL,'tampines east block 3'),(4,4,'john','john123','john@gmail.com',NULL,'tampines north block 8'),(5,5,'samuel','samuel123','samuel@gmail.com',NULL,'tampines west block 4');
/*!40000 ALTER TABLE `profile` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `restaurant`
--

DROP TABLE IF EXISTS `restaurant`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `restaurant` (
  `_id` int NOT NULL AUTO_INCREMENT,
  `restaurantid` int NOT NULL,
  `logo` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(70) COLLATE utf8mb4_unicode_ci NOT NULL,
  `contact` int DEFAULT NULL,
  `rating` int NOT NULL,
  `operating_hours` varchar(45) COLLATE utf8mb4_unicode_ci NOT NULL,
  `location` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `longtitude` float NOT NULL,
  `latitude` float NOT NULL,
  `website_url` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `about` varchar(3000) COLLATE utf8mb4_unicode_ci NOT NULL,
  `photogallery` varchar(200) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `restaurant_type` varchar(45) COLLATE utf8mb4_unicode_ci NOT NULL,
  `youtubereviewurl` varchar(200) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`_id`),
  UNIQUE KEY `restaurantid_UNIQUE` (`restaurantid`) /*!80000 INVISIBLE */,
  UNIQUE KEY `res_id` (`restaurantid`) /*!80000 INVISIBLE */
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `restaurant`
--

LOCK TABLES `restaurant` WRITE;
/*!40000 ALTER TABLE `restaurant` DISABLE KEYS */;
INSERT INTO `restaurant` VALUES (1,1,'null','Itacho Sushi',65098911,4,'11:30AM-11PM','Itacho Sushi Bedok Mall, 311 New Upper Changi Rd, Bedok Mall, #B2, #42, Singapore 467360',103.93,1.32478,'https://www.itachosushi.com.sg/','\"Itacho Sushi is a subsidiary brand of Taste of Japan  Group founded in Hong Kong back in 2004. The group visualizes the importance to provide excellent quality of food in a comfortable dining environment, sincere service attitude at an affordable price point.\n\n​\n\nOur food ingredients are mainly sourced from Tokyo, Hokkaido, and Kyushu in Japan. We then delegate procurement personnel in Japan to purchase the ingredients and have it directly shipped to all our restaurants.\n\n​\n\nItacho Sushi currently has more than 40 over outlets in Hong Kong, Japan and Singapore. With Itacho Sushi Singapore having marked its 12th anniversary in July 2021, we aim to excel and hold on to our motto for many more years to come.\"',NULL,'Japanese','https://www.youtube.com/watch?v=w0lm-6yJ3Xc'),(2,2,'null','Macdonald',67773777,5,'7AM-1AM','1 Marine Parade Central, #01-01 Parkway Centre, Singapore 449408',103.906,1.3019,'https://www.mcdonalds.com/us/en-us.html','McDonald\'s Corporation is an American-based multinational fast food chain, founded in 1940 as a restaurant operated by Richard and Maurice McDonald, in San Bernardino, California, United States. They rechristened their business as a hamburger stand, and later turned the company into a franchise, with the Golden Arches logo being introduced in 1953 at a location in Phoenix, Arizona. In 1955, Ray Kroc (1902–1984), a businessman, joined the company as a franchise agent and proceeded to purchase the chain from the McDonald brothers. ',NULL,'Western','https://www.youtube.com/watch?v=h_roHzPW2sE'),(3,3,'null','Monster Curry',63582377,4,'11AM-10PM','3 Temasek Boulevard, #02-377/378, Suntec City Mall West Wing, Singapore 038983',103.857,1.2932,'https://www.monstercurry.com.sg/','Monster Curry is the only restaurant in Singapore that serves Japanese demi-glace curry made with 14 different vegetables and spices. Our smooth and fragrant curry is the result of a 2-day rigorous cooking process. Our curry rice come in 35cm and 41cm sized plates, giving us good reasons to call ourselves Monster Curry. Share the love of our monstrous plates of delicious curry with your friends and families! To give the curry sauce an extra kick, Monster Curry serves all its dishes at five different levels of spiciness, thanks to a hot sauce that is a concoction of chilli padi, garlic, ginger and celery.',NULL,'Japanese','https://www.youtube.com/watch?v=DPQQQ0OsDwE\n'),(4,4,'null','Ginza Tendon',62216678,4,'11AM-9PM','101 Tg Pagar Rd, Singapore 088522',103.844,1.27732,'https://www.keisuke.sg/ginza-tendon-itsuki-tanjong-pagar','Tendon is often regarded as delightful one-bowl soul food meals for many Japanese around the world especially during summer. With freshest quality ingredients served in special porcelain bowls by Arita - a 400 year-old porcelain brand from Japan, this new offering will add another dimension to Keisuke\'s Japanese soul food offering that includes its well-known brand of ramen creations here in Singapore.',NULL,'Japanese','https://www.youtube.com/watch?v=09gKJ2wj2gk '),(5,5,'null','Hai Di Lao',63853343,5,'10AM-6AM','311 New Upper Changi Road 01-13 Bedok Mall, 467360',103.929,1.32415,'https://www.haidilao.com/about/ ','Haidilao always upholds the idea of “putting customers first and always go the extra miles”, and transforms traditional, standardized and monotonous services into personalized services through innovation. Following the basic principle of full devotion to services, we are committed to provide customers with “considerate, warm and comfortable” services. Advocating the value of changing destiny through hard work, Haidilao strives to create a fair and equal working environment for our staff and implement a humanized and people-oriented management model so as to improve their personal value.',NULL,'Chinese','https://www.youtube.com/watch?v=o9JyRAHoPVs'),(6,6,'null','Tamago En',67333789,3,'11AM-10PM','23 Serangoon Central #02-K5 K6, NEX, 556083\n',103.872,1.35078,'https://tamago-en.com/outlets/','\"Tamago-EN is a casual egg specialty restaurant, and only uses the freshest eggs imported direct from Okinawa.\nDelight in the golden orange yolk unique to Japanese eggs and revel in the fuwa fuwa (fluffy) texture of our egg dishes. All our eggs go through a process of UV sanitisation for the highest food safety standards, and are SO FRESH they can be eaten raw.\"',NULL,'Japanese','https://www.youtube.com/watch?v=ql__0syQ928'),(7,7,'null','Pepper Lunch',68449384,3,'11AM-10PM','311 New Upper Changi Rd, #01-05/06/07/08, Singapore 467360',103.929,1.32477,'https://www.pepperlunch.com.sg/','\"Hailing from Japan, Pepper Lunch is a popular DIY restaurant that promises superior-quality ingredients and a unique culinary experience for everyone. The most exciting part about dining here is that you get to play chef! Here, every dish is served on a Japanese Teppan. You get to stir and mix the ingredients while watching them sizzle right in front of your eyes. Immerse yourself in their rich and diverse menu which covers everything from chicken, to seafood, to my favorite steak. Pepper Lunch has recently introduced 8 tantalizing new items to ensure that all palates are pleased!\n\n\"',NULL,'Japanese','https://www.youtube.com/watch?v=LK7IolqzLDo'),(8,8,'null','shikar.sg',88660823,4,'12PM-10PM','\"Maxwell Reserve, Autograph Collection\n2 Cook St\nSingapore\n078857\"',103.845,1.2796,'https://shikar.sg/','Inspired by the grand old feasts of Indian Royals where members of high society socialised, ate and drank, the menu at Shikar reflects traditional integrity, as well as an attitude of progressiveness and openness toward Indian cuisine. Step into the beautifully decorated dining room adorned with wall murals and plush seats – and feel important too. Indulge in dishes like Blue Swimmer crab rillettes with flying fish caviar ($35), seekh (a kebab made from ground meat) – but with duck meat ($47), biryani with Australian lamb saddle and shoulder ($57), and the house signature pistachio rose kulfi ($21). There are also a variety of vegetarian options that include paneer ($37), tender stemmed broccoli ($35), and crushed corn and fenugreek skewers ($33).',NULL,'Indian','https://www.youtube.com/watch?v=6jCHB8xp0dE'),(9,9,'null','Osteria Mozza',68316271,4,'5PM-10PM','\"Hilton Singapore Orchard\n333 Orchard Rd\nLevel 5\nSingapore\n238867\"',103.836,1.30204,'\"www.hilton.com/en/hotels/sinorhi-hilton-singapore-orchard/dining/osteria-mozza\n6831 6271\"','The Cal-Italian dining concept of famed American celebrity Chef Nancy Silverton is back. The cosy Tuscan living room now has a stunning mozzarella bar, two wood-burning ovens and an alfresco herb garden. Swing in during lunch and feast on 10 signature pizzas, our favourites are Silverton’s all-time favourite, the Burrata ($40), the simply satisfying Bianca ($34), and the Singapore-exclusive BLT ($38). Come nightfall, dishes are nodes to classics that first rocketed Osteria Mozza into the dining sphere. Remember the Orecchiette ($32) that stole the show – and our hearts? Its glistening little ears of al-dente pasta, sausage and Swiss chard take you straight to flavour town. ',NULL,'Italian','https://ww.youtube.com/watch?v=0hGZJXfvgeE\n'),(10,10,'null','Astons',63372468,3,'11AM-10PM','3 Temasek Blvd, B1-161/162, Singapore 038983',103.86,1.29486,'https://www.astons.com.sg/\n','A local food chain dining concept well-known for its Quality and Value-For-Money western cuisine for the masses at affordable prices, with quality ingredients and generous portions in a comfortable and casual ambience.\n',NULL,'Western','https://www.youtube.com/watch?v=mw_66CnL19o');
/*!40000 ALTER TABLE `restaurant` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `restaurantcategory`
--

DROP TABLE IF EXISTS `restaurantcategory`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `restaurantcategory` (
  `_id` int NOT NULL AUTO_INCREMENT,
  `restaurantcatid` int NOT NULL,
  `chinese` int NOT NULL,
  `japanese` int NOT NULL,
  `malay` int NOT NULL,
  `western` int NOT NULL,
  `italian` int NOT NULL,
  `indian` int NOT NULL,
  `restaurantid` int NOT NULL,
  PRIMARY KEY (`_id`),
  KEY `restaurantcatid_UNIQUE` (`restaurantcatid`) /*!80000 INVISIBLE */,
  KEY `fk_restaurantid_restcat_idx` (`restaurantid`),
  CONSTRAINT `fk_restaurantid_restcat` FOREIGN KEY (`restaurantid`) REFERENCES `restaurant` (`restaurantid`) ON DELETE CASCADE ON UPDATE RESTRICT
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `restaurantcategory`
--

LOCK TABLES `restaurantcategory` WRITE;
/*!40000 ALTER TABLE `restaurantcategory` DISABLE KEYS */;
INSERT INTO `restaurantcategory` VALUES (1,1,0,1,0,0,0,0,1),(2,2,0,0,0,1,0,0,2),(3,3,0,1,0,0,0,0,3),(4,4,0,1,0,0,0,0,4),(5,5,1,0,0,0,0,0,5),(6,6,0,1,0,0,0,0,6),(7,7,0,1,0,0,0,0,7),(8,8,0,0,0,0,0,1,8),(9,9,0,0,0,0,1,0,9),(10,10,0,0,0,1,0,0,10);
/*!40000 ALTER TABLE `restaurantcategory` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `review`
--

DROP TABLE IF EXISTS `review`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `review` (
  `_id` int NOT NULL AUTO_INCREMENT,
  `reviewid` int NOT NULL,
  `username` varchar(45) COLLATE utf8mb4_unicode_ci NOT NULL,
  `logo` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `reviewtxt` varchar(1000) COLLATE utf8mb4_unicode_ci NOT NULL,
  `rating` int NOT NULL,
  `profileid` int NOT NULL,
  `restaurantid` int NOT NULL,
  `date_posted` date NOT NULL,
  `time` time NOT NULL,
  PRIMARY KEY (`_id`),
  UNIQUE KEY `reviewid_UNIQUE` (`reviewid`),
  KEY `profileid_idx` (`profileid`),
  KEY `restaurantid_idx` (`restaurantid`) /*!80000 INVISIBLE */,
  CONSTRAINT `fk_profileid_review` FOREIGN KEY (`profileid`) REFERENCES `profile` (`profileid`) ON DELETE CASCADE ON UPDATE RESTRICT,
  CONSTRAINT `fk_restaurantid_review` FOREIGN KEY (`restaurantid`) REFERENCES `restaurant` (`restaurantid`) ON DELETE CASCADE ON UPDATE RESTRICT
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `review`
--

LOCK TABLES `review` WRITE;
/*!40000 ALTER TABLE `review` DISABLE KEYS */;
INSERT INTO `review` VALUES (1,1,'Isaac',NULL,'this is a very good restaurant, the food is amazing',4,1,1,'2023-01-02','00:17:20'),(2,2,'Isaac',NULL,'this is one of the best restaurants ive been to',5,1,5,'2023-01-01','00:18:00'),(3,3,'Isaac',NULL,'this restaurant is has good value for money',3,1,3,'2023-01-01','00:14:00'),(4,4,'Isaac',NULL,'this restaurant is really good\n',4,1,8,'2022-12-30','00:17:00'),(5,5,'Sally',NULL,'I would not mind eating at this restaurant again',3,2,3,'2022-12-31','00:12:00'),(6,6,'Sally',NULL,'the food is okay\n',3,2,2,'2022-12-05','00:13:00'),(7,7,'Sally',NULL,'the food here is nice',4,2,1,'2022-12-08','00:17:00'),(8,8,'Amy',NULL,'the food did not meet up to my expectations',2,3,4,'2023-02-01','00:18:30'),(9,9,'John',NULL,'this is my favourite restauarant to go to!',5,4,1,'2022-12-12','00:20:00'),(10,10,'John',NULL,'I think the food could be a lot better\n',2,4,7,'2022-12-11','00:20:30'),(11,11,'Samuel',NULL,'the food is okay',3,5,3,'2023-01-01','00:17:00'),(12,12,'Samuel',NULL,'the food is horrible',1,5,2,'2022-12-31','00:17:00');
/*!40000 ALTER TABLE `review` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-01-05  8:57:12
