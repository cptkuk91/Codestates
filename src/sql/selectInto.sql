-- https://www.w3schools.com/sql/sql_select_into.asp
-- SELECT INTO statement copies data from one table into a new table.

-- Copy all columns into a new table:
SELECT *
INTO newtable
FROM oldtable
WHERE condition;

-- Copy only some columns into a new table:
SELECT column1, column2, column3
INTO newtable
FROM oldtable
WHERE condition;


-- Copies only the German customers into a new table:
SELECT * FROM CustomersGermany
FROM Customers
WHERE Country = 'Germany';

-- SELECT INTO use for create new table, upside is just normal, reason why use INSERT INTO
-- create new table after JOIN
SELECT Customers.CustomerName, Orders.OrderID
INTO CustomerOrderBackup
FROM Customers
LEFT JOIN Orders ON Customers.CustomerID = Orders.CustomerID;


