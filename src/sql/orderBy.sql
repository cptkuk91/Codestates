-- https://www.w3schools.com/sql/sql_orderby.asp
SELECT column1, column2, ...
FROM table_name
ORDER BY column1, column2, ... ASC | DESC;
--  기본값은 ASC로 설정된 상태다. ASC를 적용할 필요가 없다.
--  DESC의 경우 별도로 설정이 필요하다.

SELECT * FROM Customers
ORDER BY Country;
-- Customers를 Country 기준으로 정렬한다.
