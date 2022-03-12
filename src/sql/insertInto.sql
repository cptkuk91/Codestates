-- https://www.w3schools.com/sql/sql_insert.asp
INSERT INTO table_name (column1, column2, column3, ...)
VALUES (value1, value2, value3, ...);

-- If you adding values for all the columns of the table, you don't need to specify the column names in the SQL
INSERT INTO table_name
VALUES (value1, value2, value3, ...);

-- ID column is an auto-increment field and will be generated automatically

-- It's possible to only insert data in specific columns.
INSERT INTO Customers (CustomerName, City, Country)
VALUES ('KJ', 'SEOUL', 'KOREA');