-- https://www.w3schools.com/sql/sql_join_right.asp
SELECT column_name
FROM table1 
RIGHT JOIN table2 
ON table1.column_name = table2.column_name;

SELECT Orders.OrderID, Employees.LastName, Employees.FirstName
FROM Orders
RIGHT JOIN Employees ON Orders.EmployeeID = Employees.EmployeeID
ORDER BY Orders.OrderID;
