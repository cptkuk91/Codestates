-- https://www.w3schools.com/sql/sql_insert_into_select.asp
-- INSERT INTO SELECT statement copies data from one table and inserts it into another table.

-- But existing records in the target table are unaffected.
-- Copy all columns from one table to another table:
INSERT INTO table2
SELECT * FROM table1
WHERE condition;

-- Copy only some columns from one table into another table:
INSERT INTO table2 (column1, column2, column3)
SELECT column1, column2, column3
FROM table1
WHERE condition;

