
CREATE DATABASE IF NOT EXISTS insurance_db;

USE insurance_db;

CREATE TABLE IF NOT EXISTS car_users (
  id VARCHAR(12) PRIMARY KEY,
  name VARCHAR(30),
  age INT,
  mail VARCHAR(50),
  phone VARCHAR(15),
  vehicleNo VARCHAR(50),
  brand VARCHAR(50),
  insurance_id VARCHAR(5)
);


CREATE TABLE IF NOT EXISTS users (
  id VARCHAR(12) PRIMARY KEY,
  name VARCHAR(30),
  age INT,
  mail VARCHAR(50),
  phone VARCHAR(15),
  insurance_id VARCHAR(5)
);
