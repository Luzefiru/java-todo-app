-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 20, 2024 at 10:08 AM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.0.25
SET
  SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";

START TRANSACTION;

SET
  time_zone = "+00:00";

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;

/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;

/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;

/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `todoapp`
--
-- --------------------------------------------------------
--
-- Table structure for table `task`
--
CREATE TABLE
  `task` (
    `taskID` int (11) NOT NULL,
    `title` varchar(50) NOT NULL,
    `description` varchar(150) DEFAULT NULL,
    `due_date` datetime DEFAULT NULL,
    `is_completed` tinyint (1) NOT NULL
  ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_general_ci;

--
-- Dumping data for table `task`
--
INSERT INTO
  `task` (
    `taskID`,
    `title`,
    `description`,
    `due_date`,
    `is_completed`
  )
VALUES
  (
    5,
    'JDBC Assignment',
    'Must work on it!',
    '2024-01-19 14:08:30',
    0
  ),
  (
    8,
    'work',
    'workxfdsfdsfs',
    '2021-06-25 22:22:21',
    1
  );

--
-- Indexes for dumped tables
--
--
-- Indexes for table `task`
--
ALTER TABLE `task` ADD PRIMARY KEY (`taskID`);

--
-- AUTO_INCREMENT for dumped tables
--
--
-- AUTO_INCREMENT for table `task`
--
ALTER TABLE `task` MODIFY `taskID` int (11) NOT NULL AUTO_INCREMENT,
AUTO_INCREMENT = 9;

COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;

/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;

/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;