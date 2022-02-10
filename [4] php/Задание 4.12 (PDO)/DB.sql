CREATE TABLE `users` (
  `id` INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY, 
  `username` VARCHAR(255) NOT NULL, 
  `password` VARCHAR(255) NOT NULL, 
  `email` VARCHAR(50) NOT NULL, 
  `phone` VARCHAR(30) NOT NULL
);
ALTER TABLE users ADD UNIQUE (`username`, `email`, `phone`);
