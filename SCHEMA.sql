DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;

USE employee_db;

CREATE TABLE roles(
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(30),
    salary DECIMAL,
    department_id INT,
    FOREIGN KEY (department_id) REFERENCES department (id),
    PRIMARY KEY (id)
);

CREATE TABLE department (
    id INT NOT NULL AUTO_INCREMENT,
    department_name VARCHAR(30) NOT NULL,
    PRIMARY KEY (id)
);
CREATE TABLE manager (
    id INT NOT NULL,
    manager_name VARCHAR(30) NOT NULL
);
CREATE TABLE employee (
    id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    roles_id INT,
    manager_id INT,
    department_name VARCHAR(30),
    FOREIGN KEY (manager_id) REFERENCES employee (id),
    FOREIGN KEY (roles_id) REFERENCES roles (id),
    PRIMARY KEY (id)
);
