### Using Express.js with MongoDB
Database is essential for managing data n software applications. They provide a structured ways to store, retrieve and manipuate data. There are primarily two types of databases

- <b>SQL</b> - Structured Query Language databases and
- <b>NO SQL</b> - Not Ony databases. 

SQL are also called relational databases, hence NoSQL are called non-relational databases. Each type has its own characteristics, uses cases and advantages

SQL Databases are relational databases that store data in tables with predefined schema. They use Structured Query Language or pronounced "squile" This is means that we can relate a particular table to another table

But on No SQL, you have to manually use your codebase to relate tables. SQL works on a predefined schema, that it everthing is set like excel spreadsheet.

We have MongoDB, Postgreem, SQL lite, Redis etc..

#### Table 1

|  | A | B | C | D | E | F | G |  
| - | - | - | - | - | - | - | - |
| <b>1</b> | id | name | age |
| <b>2</b> |1  | Samuel |
| <b>3</b> | 2 | Adeolu |
| <b>4</b> |  |  |
| <b>5</b> |  |  |


#### Table 2
|  | A | B | C | D | E | F | G |  
| - | - | - | - | - | - | - | - |
| <b>1</b> | userId | recipient id| message |
| <b>2</b> | 1 | 2 | Are you still in the rest room |
| <b>3</b> |  |  | Yes I am
| <b>4</b> |  |  |
| <b>5</b> |  |  |

This is a database where the users are related by id. So with their id we can set the user id and the recipient of the message.

user id 1 (Samuel) sends message the receiptent id 2 (Adeolu). So they are related


### Key characteristics of SQL
It is Schema-based: meaning it has tables, columns, data-types. So each column have it's own data type. There is a column for Numbers, Strings. 

Relational: Data stored in tables can be related to one another through the use of foreign keys

ACID: SQL adheres to Atomicity, Consistency, Isolation, Durability, ensuring reliable transactions.

Examples of SQL: MySQL, PostgreSQL, Microsoft SQL server, Oracle Database.
Uses cases are application requiring complex queries and transactions, such as banking systems e-commerce, platform and enterprise resource planning EPR systems.

A banking system will never use MongoDB. <b>Do not use MongoDB in a fintech app.</b>


<b>NoSQL</b> database are relational database that stores data in various format such as key-values pairs, document, graphs or wide-column stores. They are designed to handle large bolums of unstructured and semi-structured data.

### Key Characteristics of NoSQL
It does not require a fixed schema. So it allows easy modification to data strutures during downtime. 

For SQL you need to run scripts to add column and make changes. But for NoSQL, they can edit it and this won't break anything

Scalability: For SQL you scale data vertically, while NoSQL databased are designed to scale horizontally across multiple server.

To scale vertically is like your database is using v2 so your system must use v3.

Variety of Data: No SQL can stire different type of data models including 

- Document Stores

