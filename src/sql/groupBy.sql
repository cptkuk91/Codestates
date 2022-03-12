-- https://www.w3schools.com/sql/sql_groupby.asp
SELECT column_name
FROM table_name
WHERE condition
GROUP BY column_name
ORDER BY column_name;

-- following SQL statement lists the number of customers in each country:
SELECT COUNT(CustomerID), Country
FROM Customers
GROUP BY Country;

-- (JOIN을 사용한) GROUP BY 심화 
SELECT Shippers.ShipperName, COUNT(Orders.OrderID) AS NumberOfOrders FROM Orders
LEFT JOIN Shippers ON Orders.ShipperID = Shippers.ShipperID
GROUP BY ShipperName;
