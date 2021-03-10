-- MySQL dump 10.13  Distrib 8.0.23, for Win64 (x86_64)
--
-- Host: localhost    Database: recipe_db
-- ------------------------------------------------------
-- Server version	8.0.23

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
-- Table structure for table `recipes`
--

DROP TABLE IF EXISTS `recipes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `recipes` (
  `recipe_id` int NOT NULL AUTO_INCREMENT,
  `recipe_name` varchar(45) DEFAULT NULL,
  `recipe_description` text,
  `recipe_instructions` longtext,
  `recipe_ingredients` longtext,
  `user_id` int DEFAULT NULL,
  `category_id` int DEFAULT NULL,
  PRIMARY KEY (`recipe_id`),
  KEY `user_idfk_idx` (`user_id`),
  KEY `category_idfk_idx` (`category_id`),
  CONSTRAINT `category_idfk` FOREIGN KEY (`category_id`) REFERENCES `category` (`category_id`),
  CONSTRAINT `user_idfk` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `recipes`
--

LOCK TABLES `recipes` WRITE;
/*!40000 ALTER TABLE `recipes` DISABLE KEYS */;
INSERT INTO `recipes` VALUES (1,'Chicken & Veggie Stir-Fry','Getting take-out is a crave-worthy indulgence. And with our easy chicken veggie stir fry recipe, you can recreate the magic of a Chinese takeout right in your very own kitchen. Feel free to mix up the protein or vegetables depending on what you have in your fridge. The simple sauce packs a flavor punch that will bring the dish together, no matter what.','1. In a large pan on medium-high heat, add 1 tablespoon of oil. Once the oil is hot, add chicken, season with salt and pepper, and sauté until cooked through and browned. Remove cooked chicken from pan and set aside.\n\n2. In the same pan, heat 1 tablespoon of oil and add mushrooms. When the mushrooms start to soften, add broccoli florets and stir-fry until the broccoli is tender. Remove cooked mushrooms and broccoli from the pan and set aside.\n\n3. Add 1 tablespoon of oil to the pan and sauté garlic and ginger until fragrant. Add the remaining sauce ingredients and stir until smooth.\n\n4. Return the chicken and vegetables to the saucy pan, stir until heated through.\n\n5. Serve with hot rice or noodles.\n\n6. Enjoy!','1 lb chicken breast, cubed\nsalt, to taste\npepper, to taste\n1 lb broccoli florets\n8 oz mushroom, sliced\n3 tablespoons oil, for frying\n\nSAUCE\n\n3 cloves garlic, minced\n1 tablespoon ginger, minced\n2 teaspoons sesame oil\n⅓ cup reduced sodium soy sauce\n1 tablespoon brown sugar\n1 cup chicken broth\n¼ cup flour\n1 tablespoon brown sugar\n1 cup chicken broth\n¼ cup flour\n',1,3),(2,'Broccoli Pesto Pasta','This broccoli pesto pasta recipe is a thing of logistical beauty. A stock pot of boiling water does double-duty (we love that kind of efficiency, don’t you?) and simple ingredients come together to make a healthy, satisfying supper everyone can feel good about. Oh yeah, that’s the stuff. Here’s how to make this easy, healthy pasta recipe:','1. In a large pot bring water ** to a rapid boil.','1 lb Cooked pasta of youir choice, pasta water reserved\n4 cups Broccoli florets\n2 cups Basil leaf\n2 garlic cloves\n1/4 cup Pinenuts\n1 cup Extra virgin olive oil\n1/2 tsp salt\n1 cup Parmigiano-reggiano, grated\n',1,3),(3,'Five Spice Chicken Sheet Pan Dinner','Need more weeknight-friendly dinner options? This five spice chicken sheet pan dinner is so delicious and easy, we guarantee it’ll become the new standard for weeknight dinners.','1. Preheat oven to 425°.','4 lbs Bone in skin on chicken thighs\n1 Head of cabbage, cut into 1\" wedges\n3 Large carrots, peeled and cut into 2\" pieces\n1 tbsp Soy sauce (or tamari)\n1 tbsp Five spice powder\n2 tbsp Honey\n1 tsp Garlic\n1/4 cup + 2 tbsp Olive oil\nRed pepper flakes for finishing\nGreen onions for finishing',1,3);
/*!40000 ALTER TABLE `recipes` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-03-09 23:10:04
