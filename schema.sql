DROP DATABASE IF EXISTS movie_db;
CREATE DATABASE movie_db;

USE movie_db;

CREATE TABLE movies_names (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(30) NOT NULL 
  
);



CREATE TABLE movies_reviews (
    id INT AUTO_INCREMENT ,
    FOREIGN KEY movies_names(id)
    REFERENCES movies_names(id),
    review VARCHAR(300)
);



INSERT INTO movies_names (name)
VALUES ("Super Mario"),
       ("Encanto"),
       ("Little Mermaid")