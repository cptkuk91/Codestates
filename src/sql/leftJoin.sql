-- https://www.w3schools.com/sql/sql_join_left.asp
SELECT column_name FROM table1 LEFT JOIN table2 ON table1.column_name = table2.column_name;

SELECT Customers.CustomerName, Orders.OrderId
FROM Customers
LEFT JOIN Orders ON Customers.CustomerID = Orders.CustomerID
ORDER BY Customers.CustomerName;

