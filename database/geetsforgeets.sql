-- MySQL dump 10.13  Distrib 5.5.59, for Win64 (AMD64)
--
-- Host: localhost    Database: geetsforgeets
-- ------------------------------------------------------
-- Server version	5.5.59

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
-- Table structure for table `course_content`
--

DROP TABLE IF EXISTS `course_content`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `course_content` (
  `content_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `course_id` bigint(20) NOT NULL,
  `link` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`content_id`)
) ENGINE=InnoDB AUTO_INCREMENT=64 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `course_content`
--

LOCK TABLES `course_content` WRITE;
/*!40000 ALTER TABLE `course_content` DISABLE KEYS */;
INSERT INTO `course_content` VALUES (11,1,'https://www.youtube-nocookie.com/embed/bQssdSrSGNE?si=Lk3zjsP7IQjs06l-','Introduction to Time & Space Complexities','Video'),(12,1,'https://www.w3schools.com/dsa/dsa_intro.php','Introduction to Data Structures aAnd Algorithms','Article'),(13,1,'https://www.youtube-nocookie.com/embed/NTHVTY6w2Co?si=YN-wpf14Pm-RZtZE','Arrays in Java','Video'),(14,1,'https://www.youtube.com/embed/18Zt5I4S45o?si=-r3BxqBLZlaKH8xk','Strings in Java','Video'),(15,1,'https://www.youtube.com/embed/PkJIc5tBRUE?si=2QgDwfNtARp6n1A5','Sorting in Java','Video'),(16,1,'https://www.youtube.com/embed/unxAnJBy12Q?si=RM4hvvd9gLecdGAb','Merge Sort','Video'),(17,1,'https://www.youtube.com/embed/QXum8HQd_l4?si=Grj2P0fTpyW0xN01','Quick Sort','Video'),(18,1,'https://www.youtube.com/embed/5Boqfjissv0?si=kqD3iG504KCloB23','Introduction to Recursion','Video'),(19,1,'https://www.youtube.com/embed/bRs6E_SL2Tk?si=vd9morfFy3IOcLDD','Backtracking in one Video','Video'),(20,1,'https://www.geeksforgeeks.org/backtracking-algorithms','Backtracking: a Guide','Article'),(21,1,'https://www.youtube.com/embed/oAja8-Ulz6o?si=2MuDC2RUM5oU_mMI','Linked Lists','Video'),(22,1,'https://www.youtube.com/embed/7m1DMYAbdiY?si=VYGSDb1RgoxHJ7_8','Stacks','Video'),(23,1,'https://www.youtube.com/embed/va_6RmSrKCg?si=GAa6VGx7spFfpneN','Queues','Video'),(24,1,'https://www.youtube.com/embed/-DzowlcaUmE?si=GWhNZ0RDRLxXx2GJ','Binary Tree','Video'),(25,1,'https://www.youtube.com/embed/qAeitQWjNNg?si=W0oUnXgck4IdcBPh','Binary Search Tree','Video'),(26,1,'https://www.youtube.com/embed/59fUtYYz7ZU?si=FQ3LlhvyADdw7Lw5','Graphs: one Shot','Video'),(27,3,'https://www.coursera.org/articles/data-analytics','Introduction Data Analytics','Article'),(28,3,'https://www.geeksforgeeks.org/python-programming-language-tutorial/','Complete Python tutorial','Article'),(29,3,'https://www.youtube.com/embed/8JfDAm9y_7s?si=jnKYap_wVavNrdni','Introduction to numpy library in python','Video'),(30,3,'https://www.youtube.com/embed/UB3DE5Bgfx4?si=XsRhwxHYSpI7LAWZ','Introduction to Pandas library in python','Video'),(31,3,'https://www.youtube.com/embed/yZTBMMdPOww?si=bbdm8Itk6Gc0ZXrY','Python Matplotlib Tutorial','Video'),(32,3,'https://www.youtube.com/embed/TLdXM0A7SR8?si=RQ7sDp8m1OSEzA1g','Python Seaborn Tutorial','Video'),(33,3,'https://www.youtube.com/embed/mQ-3KwrBIN0?si=juxDGXCEzHgm2M3z','Statistics using python','Video'),(34,3,'https://www.geeksforgeeks.org/python-programming-language-tutorial/','Power Bi: a complete guide','Article'),(35,3,'https://www.youtube.com/embed/6cV3OwFrOkk?si=2B8X--k81JuB0itO','Introduction to Power Bi and Dashboard Creation','Video'),(36,3,'https://www.youtube.com/embed/j4xlVLgsmNQ?si=grasxXdgWnFnjIJt','Power Bi end-to-end Project: Dashboard','Video'),(37,3,'https://www.youtube.com/embed/fZn83JRt4Nk?si=LqW3FNjZmWesskHI','Power Bi project: Sales Dashboard','Video'),(38,3,'https://www.youtube.com/embed/T0geCaVBXXE?si=p_dJbeb4Ld8Ghmdt','Power Bi DAX tutorial','Video'),(39,2,'https://www.ibm.com/topics/data-science','Introduction Data Science','Article'),(40,2,'https://www.geeksforgeeks.org/python-programming-language-tutorial/','Complete Python tutorial','Article'),(41,2,'https://www.youtube.com/embed/8JfDAm9y_7s?si=jnKYap_wVavNrdni','Numpy Tutorial for Data Science','Video'),(42,2,'https://www.youtube.com/embed/cg8P0NSe8Ew?si=3hEeXT4rHweLrBrF','Numpy functions and Slicing','Video'),(43,2,'https://www.youtube.com/embed/mcpphUjarHo?si=ON8l2FagU3bQEeB7','Axis, Sorting and other Numpy Functions','Video'),(44,2,'https://www.youtube.com/embed/ZD1Qig8gmVA?si=XOlVrpUz0zCnQMjt','Argsort, Argmin and Argmax & other Numpy Tips','Video'),(45,2,'https://www.youtube.com/embed/iOX150jUnH8?si=MT3UF1ouXChilTrY','Introduction to Pandas for Data Science','Video'),(46,2,'https://www.youtube.com/embed/VZwYd4UaaeY?si=f8qhvLbHtoS5siaT','Slicing & Adding Columns in Pandas','Video'),(47,2,'https://www.youtube.com/embed/TRJr5h6HI8Q?si=jYc6cwnO00qnzbZB','Reading a CSV file in Pandas','Video'),(48,2,'https://www.youtube.com/embed/qtxrpHjG-oE?si=dl7wpR4NVYna74Pd','Writing a CSV file in Pandas','Video'),(49,2,'https://www.youtube.com/embed/v_f__2IWfZI?si=6ek9u_tIIy1tXE4x','Merging Dataframes in Pandas','Video'),(50,2,'https://www.youtube.com/embed/Rolq7_E4ses?si=XRpy_A2z_2TaUdJb','Working with JSON in Python','Video'),(51,4,'https://www.youtube.com/embed/eWRfhZUzrAc?si=fubXntQwBAr6w3lt','Basics of Python','Video'),(52,4,'https://www.youtube.com/embed/HGOBQPFzWKo?si=MBdx3KRp7-ulNfAT','Python: Intermediate','Video'),(53,4,'https://www.w3schools.com/python','Python: Complete Tutorial','Article'),(54,4,'https://www.youtube.com/embed/Ej_02ICOIgs?si=-UPmVUi-u5uOli6b','Object Oriented Programming using Python','Video'),(55,4,'https://www.youtube.com/embed/YXPyB4XeYLA?si=pX1OdGk3fZObpQSc','GUI Development using Tkinter Python','Video'),(56,4,'https://www.geeksforgeeks.org/python-tkinter-tutorial','Tkinter Tutorial','Article'),(57,4,'https://www.youtube.com/embed/YXPyB4XeYLA?si=Xu-KC9-ul_oMKG9s','Data Structures and Algorithm in Python','Video'),(58,4,'https://www.youtube.com/embed/jBzwzrDvZ18?si=s8O5eKYHpNUuVQxI','Backend Web Development using Django','Video'),(59,4,'https://www.djangoproject.com/start/','Django: Official Documentation','Article'),(60,4,'https://www.youtube.com/embed/Qr4QMBUPxWo?si=VlQiIacwRrWNOV9M','Backend Web Development using Flask','Video'),(61,4,'https://www.geeksforgeeks.org/flask-tutorial','Flask Tutorial','Article'),(62,4,'https://www.youtube.com/embed/LHBE6Q9XlzI?si=xQqeHQpdKuPZjp5H','Python for Data Science','Video'),(63,4,'https://www.youtube.com/embed/WcDaZ67TVRo?si=lIi3II157iMT_QjR','Python for Data Analytics with MS Excel','Video');
/*!40000 ALTER TABLE `course_content` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `courses`
--

DROP TABLE IF EXISTS `courses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `courses` (
  `course_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `course_name` varchar(255) DEFAULT NULL,
  `description` varchar(512) DEFAULT NULL,
  `instructor` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`course_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `courses`
--

LOCK TABLES `courses` WRITE;
/*!40000 ALTER TABLE `courses` DISABLE KEYS */;
INSERT INTO `courses` VALUES (1,'Data Structures and Algorithms','Unlock the power of Data Structures and Algorithms with our comprehensive course! Designed for both beginners and intermediates, this course covers essential data structures like arrays, linked lists, stacks, and queues, along with advanced topics like trees, graphs, and hash tables. Master algorithmic techniques for sorting, searching, and optimization. Gain problem-solving skills and prepare for technical interviews, ensuring you\'re ready to tackle real-world challenges efficiently and effectively.','Shradha Khapra'),(2,'Data Science Using Python','Transform your career with our Data Science using Python course! Start with Python basics, then dive into data analysis, visualization, and manipulation using libraries like Pandas, NumPy, and Matplotlib. Learn machine learning techniques with Scikit-Learn, and handle real-world datasets. Gain practical skills in data cleaning, model building, and evaluation. Perfect for beginners and intermediates aiming to excel in data science and analytics. Get ready to turn data into actionable insights!','Carmen Santos'),(3,'Data Analytics Using Python and Power Bi','Elevate your data analytics skills with our course on Python and Power BI! Start with Python basics and progress to data manipulation, analysis, and visualization using Pandas, NumPy, and Matplotlib. Master Power BI for dynamic, interactive dashboards and reports. Learn to integrate Python scripts in Power BI for advanced analytics. Ideal for beginners and intermediates aiming to harness the power of Python and Power BI to drive data-driven decision-making and insights.','Harris Khan'),(4,'Everything About Python','Master Python from basics to advanced in our comprehensive course! Learn fundamental concepts, intermediate topics, and backend development with Flask and Django. Enhance your skills in data analytics, data structures and algorithms (DSA), and object-oriented programming (OOP). Explore GUI development with Tkinter and API development. Perfect for beginners and intermediates aiming to become proficient Python developers, this course equips you with versatile Python expertise.','Carmen Santos');
/*!40000 ALTER TABLE `courses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `user_email` varchar(255) NOT NULL,
  `password` varchar(255) DEFAULT NULL,
  `user_name` varchar(255) DEFAULT NULL,
  `category` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`user_email`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES ('codewithharry@gmail.com','Harry@123','Harris Khan','Instructor'),('csantos@outlook.com','leet@541','Carmen Santos','Instructor'),('geetansh.gandhi2504@gmail.com','Pas@124','Geetansh Gandhi','Student'),('johndave@gmail.com','data123','John Dave','Instructor'),('shradhakhapra@gmail.com','tutorial@78','Shradha Khapra','Instructor');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-06-11 17:21:15
