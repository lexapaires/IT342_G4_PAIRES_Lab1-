-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Feb 13, 2026 at 03:18 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `miniapp_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `userid` bigint(20) NOT NULL,
  `birthdate` date DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `password_hash` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`userid`, `birthdate`, `email`, `first_name`, `last_name`, `password_hash`, `username`) VALUES
(1, '2005-06-25', 'kyenija@gmail.com', 'Kyen', 'Ija', '$2a$10$FueRDXgwVHHZrBWMiyD7D.SSiqVmBfyOjGbyLW9Xeckj9KJiONC7m', 'kyenija'),
(2, '2004-11-23', 'alexapaires12@gmail.com', 'Alexa', 'Paires', '$2a$10$wp/bpkpJks.sH2a0u/jN3OrC7nIk0ApB5lDnmbvv4Vj05xBNxWVWi', 'alexapaires'),
(3, '2004-04-17', 'kuikui@gmail.com', 'KURT', 'KIUNISALA', '$2a$10$TIC2PXGlO2sGFzVMqUsRF.VSA/kLrFYMi1W.iYAwxh0qbyhIHYwEO', 'kurtira'),
(4, '2004-06-08', 'krizzaolodin@gmail.com', 'Krizza', 'Beth', '$2a$10$Rv3/ekCl5AMNRjXZA3MGRu4yW8yN9KT6C0LFvCxNt9ldCLdg009gu', 'krizzabeth');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`userid`),
  ADD UNIQUE KEY `UK6dotkott2kjsp8vw4d0m25fb7` (`email`),
  ADD UNIQUE KEY `UKr43af9ap4edm43mmtq01oddj6` (`username`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `userid` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
