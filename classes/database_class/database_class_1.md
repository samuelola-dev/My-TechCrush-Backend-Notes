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

For SQL you need to run scripts to add column and make changes. But for NoSQL, you just change your line of code and this won't break anything

Scalability: For SQL you scale data vertically,because how structured it is we don't really do cluster but imporve the performance our pc, while NoSQL database are designed to scale horizontally across multiple server.

To scale vertically is like your database is using v2 so your system must use v3.

Variety of Data: No SQL can store different type of data models including 

- Document Stores (e.g MongoDB) stores data in JSON-like documents
- Key valued-pairs Stores (e.g Redis) stores as key-value pairs
- Column-Family Stores (e.g Cassandra) stores data in column insteadof rows.
- Graph Database (e.g Neo4) store data as nodes and edges for representing relationship.

If you know MySQL, you will know Postgress.

#### Use case of NoSQL
Applications requiring rapid development with changing requirements such as social media platfroms, real-time analytics and content management system

Comparing SQL and NoSQL
Data Structure: SQL is tabular (relational), NoSQL (various formats, documents, key-value)

- Schema: SQL has fixed schema, NoSQL has dynamic schema
- Transactions: SQL is ACID compliance, NoSQL is BASE (Basicaly, Available Soft state)
- Scalability: SQL is vertical scaling, NoSQL is horizontal scaling
- Query Language: SQL is the query language of SQL database, NoSQL Database query language varies by database.
- Usecases: SQL is for complex queries and structured data. NoSQL is for large volumes of unstructure. 


NoSQL error is hard to fix. Like saying we create a table called "database" and "Database". SQL will say table exists, but NoSQL will just accept it.

MongoDB use mongoose

Don't ever use NoSQL for any banking

#### CRUD
Create, Read, Update and Delete. There are the four basic operations fundamental to managing data in application.

- Create new record(s)
- Read some/all record(s)
- Update some/all record(s)
- Delete some/all record(s)

We also have DDL, like for double data manipulation

If you want strict go for SQL. You can choose to use SQL or NoSQL for any applications. We can use both but not the same functions. But advisable to use one.




