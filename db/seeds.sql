INSERT INTO department (name)
VALUES
("Home"),
("Jrs"),
("Toys"),
("Mens"),
("Womens");

INSERT INTO role (title, salary, department_id) VALUES ("Home manager", 50000, 1),
("Home employee", 30000, 1),
("Jrs manager", 55000, 2),
("Jrs employee", 35000, 2),
("Toys manager", 40000, 3),
("Toys employee", 35000, 3),
("Mens manager", 40000, 4),
("Mens employee", 35000, 4),
("Womens manager", 35000, 5),
("Womens employee", 30000, 5);

INSERT INTO employee (first_name, last_name, role_id,manager_id)
VALUES
("Jane", "Doe", 1, null), 
("Jack", "Frost", 2, 1),
('john', 'kennedy', 3,NULL),
('leslie', 'bong', 4, 3),
('jackie', 'chan', 5, null),
('jet', 'li', 6, 5),
('chris', 'tucker', 7, null),
('scarlet', 'johansson',8, 7),
('angelina', 'jolie', 9, NULL),
('king', 'kong', 10, 9);