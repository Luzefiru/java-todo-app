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
  );

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