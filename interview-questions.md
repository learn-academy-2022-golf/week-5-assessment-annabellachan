# ASSESSMENT 5: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What does calling super do in a class?

Your answer: Ruby super is used to implement super class implementation of the current method. It can be used in subclasses and after being invoked, it has access to instant variables in that method.

Researched answer: Ruby uses the super keyword to call the superclass implementation of the current method. Within the body of a method, calls to super acts just like a call to that original method. The search for a method body starts in the superclass of the object that was found to contain the original method.

2. What is a gem?

Your answer: Ruby gems are  open source libraries that contain Ruby code and are packaged with a little extra data . Using a gem allows a programmer to use the code within the gem in their own program.

Researched answer: Gem is a package manager that is designed to install libraries. With gems, it provides easy code sharing by allowing any dev to download gems that are necessary to any device allowing developers to publish and distribute. It can contain files, snippets of code, etc. 

3. What is a relational database? Are there other kinds of databases?

Your answer: Relational databases are similar to excel sheets and contain information that are displayed in rows and columns. A database can have many tables that have relationships to each other. 

Researched answer: Relational databases stores data in tables that can be related to one another through the use of primary keys. Each row in the table is a record with a unique ID called the key. Other kinds of databases like non-relational databases does not include rows and colomns like most traditional database systems. Non-relational databases use a storage model that specificall requires the type of data being stored.

4. What are primary keys? Why are they important?

Your answer: Primary key are unique identifiers that makes it easier to differentiate between values and information that are stored.

Researched answer: Primary keys are unique identifiers that are useful for differentiating between values that are stored. With primary keys, there can not be duplicates because it  prevents any overlapping of information and can be easily referred to when needed. It can be used to identify, organize, and create relationships between different databases. 

5. What are the HTTP verbs? What is each verb's corresponding CRUD action?

Your answer: The most commonly used HTTP verbs are: POST (create), GET (read), PUT(update), PATCH(update or modify), and DELETE(delete.)

Researched answer: 
The HTTP verbs comprise a major portion of our “uniform interface” constraint and provide us the action counterpart to the noun-based resource. The primary or most-commonly-used HTTP verbs are POST, GET, PUT, PATCH, and DELETE. These correspond to CRUD operations. 

## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. RESTful routes: RESTful routing is a set of standards used in many different languages to create efficient and reusable routes. It aims to map HTTP methods and CRUD actiion together. This makes it easier for other developers to understand and navigate an application and results in clean, consistent URL paths for users.

2. Ruby on Rails: Web application framework used to build web applications. It is a gem created by Ruby that makes creating applications effortless since it provides a prebuilt structure. The model view controlloer is designed to provide structures for databases and pages.

3. Database migrations: Database migration is the process of migrating data from one or more source databases to one or more target databases by using a database migration service. 

4. Params: Params is short for parameters. It can be used to pass values to a controller.

5. ERB: ERB is embedded Ruby. Templates that allow codes to be added to a plain text document in Ruby. 
