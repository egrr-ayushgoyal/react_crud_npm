/*
SQLyog Ultimate v10.00 Beta1
MySQL - 5.5.27 : Database - react_crud_db
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`react_crud_db` /*!40100 DEFAULT CHARACTER SET latin1 */;

USE `react_crud_db`;

/*Table structure for table `employees` */

DROP TABLE IF EXISTS `employees`;

CREATE TABLE `employees` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `age` int(5) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=latin1;

/*Data for the table `employees` */

insert  into `employees`(`id`,`name`,`age`,`email`,`password`) values (2,'ayush',22,'goyal.ayush@yash.com','yash1234'),(3,'shubham',22,'shubham.likhar@yash.com','yash1234'),(4,'fdf',434,'goyal.ayush@yash.comre','yash1234er'),(5,'kjkjhkjh',45,'goyal.ayush@yash.com4','yash1234'),(6,'sadsad',32,'goyal.ayush@yash.comeee','yash1234'),(7,'sadsad',32,'goyal.ayush@yash.tt','yash1234tt'),(8,'as',21,'goyal.ayush@yash.com','yash1234'),(9,'asd',32,'','');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
