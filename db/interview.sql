-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 09, 2021 at 03:17 PM
-- Server version: 10.4.18-MariaDB
-- PHP Version: 7.3.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `interview`
--

-- --------------------------------------------------------

--
-- Table structure for table `company_tbl`
--

CREATE TABLE `company_tbl` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `location` varchar(255) NOT NULL,
  `registration_no` varchar(255) NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `company_tbl`
--

INSERT INTO `company_tbl` (`id`, `name`, `location`, `registration_no`, `image`, `created_at`) VALUES
(1, 'yash', 'indore', '8569', '', '2021-07-09 11:52:07'),
(2, 'graffersid', 'indore', '5555', '16212524521621252452.jpg', '2021-07-09 11:52:32'),
(3, 'yash1', 'indore', '85691', '', '2021-07-09 11:52:07'),
(4, 'graffersid1', 'indore', '55551', '16212524521621252452.jpg', '2021-07-09 11:52:32');

-- --------------------------------------------------------

--
-- Table structure for table `review_tbl`
--

CREATE TABLE `review_tbl` (
  `id` int(11) NOT NULL,
  `com_id` int(11) NOT NULL,
  `reviewer_name` varchar(255) NOT NULL,
  `reviewer_image` varchar(255) NOT NULL,
  `subject` varchar(255) NOT NULL,
  `rating` int(5) NOT NULL,
  `body` longtext NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `review_tbl`
--

INSERT INTO `review_tbl` (`id`, `com_id`, `reviewer_name`, `reviewer_image`, `subject`, `rating`, `body`, `created_at`) VALUES
(1, 1, 'mohit', '', 'test', 1, 'test msg', '2021-07-09 11:54:20'),
(2, 1, 'hemendra', '16212524521621252452.jpg', 'test', 2, 'test msg', '2021-07-09 11:55:01'),
(3, 1, 'mohan', '16212524521621252452.jpg', 'test', 4, 'test msg', '2021-07-09 11:58:14'),
(4, 1, 'rahul', '16212524521621252452.jpg', 'test', 5, 'test msg', '2021-07-09 11:59:01'),
(5, 2, 'ravendra', '16212524521621252452.jpg', 'test', 5, 'test msg', '2021-07-09 11:59:11'),
(6, 2, 'vishu', '16212524521621252452.jpg', 'test', 4, 'test msg', '2021-07-09 11:59:14'),
(7, 2, 'dheeraj', '16212524521621252452.jpg', 'test', 5, 'test msg', '2021-07-09 11:59:15'),
(8, 2, 'hemendra', '16212524521621252452.jpg', 'test', 5, 'test msg', '2021-07-09 12:00:28'),
(9, 1, 'ramesh', '16212524521621252452.jpg', 'test', 5, 'test msg', '2021-07-09 12:04:48'),
(10, 2, 'rju', '16212524521621252452.jpg', 'test', 3, 'test msg', '2021-07-09 12:13:23'),
(11, 1, 'hemendra', '16212524521621252452.jpg', 'test', 4, 'test msg', '2021-07-09 12:14:02');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `company_tbl`
--
ALTER TABLE `company_tbl`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `review_tbl`
--
ALTER TABLE `review_tbl`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `company_tbl`
--
ALTER TABLE `company_tbl`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `review_tbl`
--
ALTER TABLE `review_tbl`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
