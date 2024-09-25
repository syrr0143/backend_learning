# DBMS

* to view all the database in a system 
```SQL
SHOW DATABASES;
```
* to create database
```SQL
CREATE DATABASE blogging;
```
* before doing any operation to any database , switch to that databse
```SQL
USE database_name;
```
* to delete the database
```SQL
DROP DATABASE database_name;
```
* To list all the table in any chosen database
```SQL
SHOW TABLES;
```
* TO create a new table in any selected databse 
```SQL
<!-- CREATE TABLE table_name (attribute_name  attribute_type .......) -->

CREATE TABLE student(full_name VARCHAR(30), age INT , dob VARCHAR);
```
WE can also extraproperties to each attribute, like we can use NOT NULL to mark any properties entry as neccessary such that it will not be left blank 

Some of the <mark>extraproperties</mark> are as follow

* To delete a table 
```SQL
DROP TABLE tablename
```

* To get details about any table 
```SQL
DESC tablename;
```


# SQL QUERIES

> To get all data from a table 

```SQL
SELECT * FROM TABLE_NAME
```

> To get filtered data , we can apply some conditions on the select query 

```SQL
SELECT  * FROM STUDENTS WHERE AGE > 25
```
```SQL
SELECT  (NAME , AGE ) FROM STUDENTS WHERE AGE > 25
```
> <Mark>LIKE</mark> query in mysql

```SQL
SELECT * FROM STUDENTS WHERE NAME LIKE "Chris%"
<!-- it denotes the prefix matching , for suffix matching add % first  -->
```
`To match any substring we can add % before and after the specific  substring we want to match 
`

> AND , OR etc. these are used to combine multiple queries into one

### Sorting the result 

* Ascending order  -- order by asc
* descending order -- order by desc

### Limited data

* OFFSET number - this is used to apply pagination logic 

### changing the table

* we use the alter command to change anything in table

### JOIN OPERATIONS

```SQL
SELECT * FROM MOVIES JOIN ACTORS ON MOVIES.ACTOR = ACTORS.ID;

-- THIS WILL FETCH US THOSE ENTRIES WHERE MOVIES HAVING SAME ACTOR AND ACTOR HAVE SAME ID  
```


