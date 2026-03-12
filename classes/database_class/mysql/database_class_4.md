## Database MongoDB and MySQLs


### mysql

The same knowledge we use in mongo db we can use it in mysql.
Note this: if you can find a suitable host for mysql you can switch to postgresql

`sequelize` also works with postgresql.

Focus for this project
- Redis package
- MySQL
- Nodemailer
- Logging Error and Request
- Cors
- Middleware (RBAC)
- API connection
- Validation
- JWT
- .env

We start with our folder structures which includes `config`, `controllers`, `middeware`, `models`, `routes`, `services`, `utils`, `validators`.

![alt text](src/screenshots/image_1.png)

Remember to add the `"type":"module"` in our package.json file because we are working with esm.

We are going to install our packages which includes: `bcryptjs`,`cors`, `dotenv`, `express`, `jsonwebtoken`, `mysql2`, `nodemailer`, `sequelize`, `uuid`, `express-validator`, `express-rate-limiter`, `compression`, `morgan`, `helmet`, `axios` (for fetching from other people), `winston`, `winston-daily-rotate-file`


Now what these packages are.

`cors` - Cors means cross origin resource sharing. If there is there is no cors we can share resources to frontend.

`axios` - is a tool or libary that helps us to properly fetch data from other endpoints or other APIs.

`compression` - it helps to compress our request into something like gzip file. It compresses our request and response.To ensure that your requests and your responses are lightweight.

Note if we have `cors` you will be able to recieve responses from selected frontend applications. This means that if a specific frontend must have access to our application. e.g www.frontend.com can access our backend but www.frontend2.com will not have access if you have the correct settings.

If we did not implement `cors` we will be getting cross orgin error. Note: Your frontend will not work if we did not implement `cors`

`dotenv` - There are certain secrets we can't hard code into our application, but with `dotenv` we can isolates different things. We can have multiple .env files to store things related to development, staging requirement database. So what is `.env`: secrets that should not ne hardcoded 

Note: We should not push `.env` and `node_modules` in github.
Beacue if we put .env file to github, we have expose secrets. For developers to communicate the .env file it needs to be through another means not github.


<b><i>How .env works</i> </b>

Every node.js process is a global object, and since it is a global object we can call it anywhere it is available. When .env loads in an application, it takes all the secrets and loads inside a process and call those secrets within the process. So when that process ends, i.e the applications end, those secrets disappear amd they can differ from one application to another

`express-rate-limiter` - it does throttling, it simply means that there is a cap to the amount of request we can get bu after the cap is reached, you will not be sent out of the application but the speed or amount of things you can acheive just reduces. So like saying that we have reached a request of 100 request per minute so our request hae been capped.

`express-validator`- it is used to validate forms

`helmet`- Helmet is largely used for things like logging requests.

`jsonwebtoken` - It is used to generate <b>signed </b>tokens, emphasis on signed token.

`morgan` - It is used for logging

`mysql` is our driver for our database

`nodemailer` is use for sending database

`sequlise` is used as ORM to connect to our database. We can also use sequelize with postgresql

`uuid` is used for generating uuid - Universal Uniform Identifer, which is used for logging

`winston` is used for logging things into a file. If production is down, it generates all the logs in a file so that we can identify error in logs

Note everything in the folder structure must be in the `src` (sourc ecode) folder

![alt text](src/screenshots/image_2.png)


### Starting we start with database configuration

<b><i>config/db.js</i></b>

We setup sequelize, if we check the documentation, we can authenticate, log and so many other things like closing connection after application stops running.

```
import { Sequelize } from "sequelize";

export const sequelize = new Sequelize('database', 'username', 'password', {
    host: 'localhost',
    dialet: 'mysql'
});
```
We can specify `dialet: ` to anything like 'mysql', 'postgresql'. We set `dialet: 'mysql';`


### Setting the env for the database
<b><i>config/env.js</i></b>

This will be responsible for bringing stuff from the env file. Once we imported env is now installed in our application

```
import 'dotenv/config';
```

Now we can now access the processes

`process.env`
What this does is that it creates an object of our configurations inside our .env file

```
export const configuration  = {
    API_URL: process.env.API_URL,
    FRONTEND_URL: process.env.FRONTEND_URL,
    CORS_ORIGIN: process.env.CORS_ORIGIN,
    PORT: process.env.PORT,
    DB_HOST: process.env.DB_HOST,
    DB_USER: process.env.DB_USER,
    DB_PASSWORD: process.env.DB_PASSWORD,
    DB_NAME: process.env.DB_NAME,
    DB_DIALET: process.env.DB_DIALET,
    JWT_SECRET: process.env.JWT_SECRET,
    JWT_EXPIRES: process.env.JWT_EXPIRES,
    SALT_MODE: process.env.SALT_MODE
};
```

So we can also set a value such that incase if a particular configuration is missing by using using the logic OR `||`

```
    FRONTEND_URL: process.env.FRONTEND_URL || 'http://localhost:5000', 
    CORS_ORIGIN: process.env.CORS_ORIGIN || 'http://localhost:5000',
    PORT: process.env.PORT || 3000,
```

All what we are doing the `import 'dotenv/config';` is loading it inside process.


### Loading the configurations inside the .env file
So we are going to create a .env file inside our root folder

<b><i>.env</i></b>

```
NODE_ENV=development
PORT=3000

API_URL=http://localhost:3000;
FRONTEND_URL=http://localhost:5000/
CORS_ORIGIN=http://localhost:5000/ 

DB_HOST=localhost
DB_USER=samuel
DB_PASSWORD=ola
DB_NAME=samuelola
DB_DIALET=mysql
JWT_SECRET=b04867c5736c2dc349ae0a28ed02ac9f291483ad1dc30a968b8a8edf7460fb07
JWT_REFRESH=7d
JWT_REFRESH_SECRET=d37877319e8872525fb0b4c7875d2007547b64886af3c7dbebccfd12f4240bd6
JWT_REFRESH_EXPIRES=30d
SALT_ROUNDS=10
```

For the `JWT_SECRET` you can generate one by going to <a href="https://jwtsecrets.com/">jwtsecrets.com</a>

```
CORS_ORIGIN=http://localhost:5000/, http://local:4000, http://github.com
```

Setting this allows to get another cors urls incase if one url doesn't work


```
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=
SMTP_PASSWORD=
MAIL_FROM=
```

This part of configuration handles node mailer

To use the configurations we just use like an object and each as the property

`configuration.NODE_ENV`, `configuration.DB_USER`

Back to <b><i>config/db.js</i></b>
We import the configuration inside the db so that we can make use of `DB_HOST`, `DB_PORT` and other things related to database

`pool:` sets the minimum number of requests spawn 

    logging: configuration.NODE_ENV === 'development' ? console.log : false,

This means that if it is development, log it, if it is not do not log.

### Configuring Cors - Cross Origin Resource Sharing

<b><i>src/config/cors.js</i></b>

Remember in our .env file, we set multiple cross origins incase if one doesn't work,  so we can't send that to `cors.js`. We need to send them url by url

    ALLOWED_ORIGIN=http://localhost:5000/, http://local:4000, http://github.com  

So we do so by splitting them with comma

on <b><i>.env</i></b> file, we are going to make use of ternary operations

    ALLOWED_ORIGIN: process.env.ALLOWED_ORIGIN ? (process.env.ALLOWED_ORIGIN).split(",") : 'http://localhost:4000',

This configuration says that of the confguration exixts return the strings of the 4 origins, but we must return one value, so we use .split(",") and returned an array instead. That means it is dynamic origin.

<b><i>src/config/cors.js</i></b>

    export const corsOptions = {
        origin: configuration.ALLOWED_ORIGIN,
        credentials: true
    };

If we check the documentation, we can assign a call back to handle error. Callback lets us to manually setup a function that will do the actual checkup. It checks if the origins work

    export const corsOptions = {
    origin(origin, callback){
        if (!origin || configuration.ALLOWED_ORIGIN.includes(origin)){
            callback(null, true);
        }
        callback(new Error("Not allowed by CORS"));
    },
    credentials: true

};

The origin sets a callback that uses the logical OR `||` that checks incase origin does it exist, or takes a origin and checks if that origin exists in the array of origins in the configuration. 

If that origin exists the among the array of origins using the `Array.includes()` method, the callback return true for success

If both conditions are not meet throw an error "Not allowed CORS"

Some other things to note, is to set some methods that pass through cors, you may decide not to validate some methods through cors

Ideally we should validate methods that changes things in your database like POST, PUT, PATCH, DELETE, you may ignore POST

So we going to do that in our cors options

    methods: ["GET", "PUT", "DELETE", "OPTIONS", "PATCH"],
    allowedHeaders: ["Content-type", "Authorization"]

### Importing configurations into our app.js

<b><i>app.js</i></b>

We start by importing express, middlewares and cors because we need it in resource methods like POST.

    import express from "express";
    import cors from "cors";


We then import our configurations for .env, database, cors

    import { configuration } from "./config/env.js";
    import { corsOptions } from "./config/cors.js";
    import { sequelize } from "./config/db.js";

If we did not import configuration, the .env will not work

    const app = express();

Now our express middlewares like expressURLencoded, expressJSON middleware, cookieparser and even our cors serves as 3rd party middleware

    app.use(cors(corsOptions));
    app.use(express.json());
    app.use(express.urlencoded({extended: true}));
    app.use(cookieParser)

`cor` uses the cors option configuration in `cor(corsOption)`

`express.json()` for handling
`express.usrlencoded` in case if frontend want to send form
`cookieParser`for cookies

Note for cookie-parser it is

    npm install cookie-parser

Now to set our endpoints to check the status or health of our application. like OK status, Date. Note that the date is based on the PC. So if we have our server hosted in China, we going to have China's date in our server.

    app.get("/health", (req, res)=>{
        res.json({status: "OK", date: new Date()});
    });

You can put your sequelize after all our route. So this we want all our route to run while application is setup. We plan to but our sequelize after

We use our iife - Immediately Invoked Function Expression `()=>{}()` for our sequelize

    (async ()=> {
        try {
            await sequelize.authenticate();
            await sequelize.sync({alter: true});
            console.log("Connection Sucessful")
        } catch (error) {
            console.error("Unable to start the application", error)
            process.exit(1);
        }
    });


`sequelize.authenticate()` allows us to authenticate into our database. It checks if connection, db password is valid. After that we need to sync our models. - `sequelize.sync()` for Synchronizaion

 `sequelize.sync({ alter: true })` This also checks if the same models (i.e tables in mysql) we are syncing exists in the database.

If you change your models, like you added "age" to your model the `alter: true` applies those changes to the database. It advisable not to use `sequelize.sync(force)` because it first wipes the entire database before making changes. It first drops or delete tables before applying changes.

### Creating Model for Sequelize to work with

<b><i>src/models/user.model.js</i></b>

We need to create a model for our users in MySQL. We will import Database, Model, sequelize configuration which is where the connection will come from, bycrpt for hashing user password,

    import { DataTypes, Model } from "sequelize";
    import { sequelize } from "../config/db";
    import bcrypt from "bcryptjs";

For us to create our model we need to extend the `Model` Object

    class User extends Model {}
    
Then we set the key for each field and value by initializing `User` class in `Uset.init()`. The `.init()` methods takes in the object of all keys as the argument.  The keys serve as columns of yables in our MySQL database   

```
User.init({
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false},
    email: {type: DataTypes.STRING, allowNull: false, unique: true},
    password: {type: DataTypes.STRING, allowNull: false},
    isActive: {type: DataTypes.BOOLEAN, defaultValue: true},
    isVerified: {type: DataTypes.BOOLEAN, defaultValue: true},
    role: {type: DataTypes.ENUM('user', 'admin'), defaultValue: 'user'},
    resetToken: {type: DataTypes.STRING, allowNull: true},
    lastLogin: {type: DataTypes.DATE, allowNull: true}
    }
);
```


We may decide not to put id because sequelize

- Attributes

`type: DataTypes.INTEGER` sets the data type to Number, we also have for other types `DataTypes.BOOLEAN`, `DataTypes.STRING`, 


`primaryKey: true` to make it the only key.

`autoIncrement: true` makes the id increase.

`autoNull: false` sets it that the user must fill it

`unique: true` so that we won't have multiple emails

`defaultValueL true` sets default values


`resetToken` for password resetting and is set via email

`resetTokenExpiration` sets time for the reset token to expire

`lastLogin` this takes timestamps which is `type: DataTypes.DATE`

`role` for setting either user role or admin

    role: {type: DataTypes.ENUM('user', 'admin'), defaultValue: 'user'},

`.ENUM` means enumerator - means this or that, that is we can have diiferent options. - `.ENUM('user', 'admin')` is only accepts `user` or `admin` as the value.

Ensure that phone number is a string. If we use number, it will remove the `0` also use string in the case of country code `"+234"`

If we check the documentation. there are ither ways to extend the `Model` Object

After that we add `timestamps: true` for tracking time data was created, `sequelize` and `modelName` for referencing, `tableName` for table name.

```
User.init({
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false},
    email: {type: DataTypes.STRING, allowNull: false, unique: true},
    password: {type: DataTypes.STRING, allowNull: false},
    ...........................

    }, {
        timestamps: true,
        sequelize,
        modelName: 'User',
        tableName: 'users', 
        hooks:
    }
);
```

With `hooks` We can perform database actions before they enter the database. We have:

`beforeCreate` - before the models is created into the database
 Here we can perform hashing using `bcrypt`

`beforeUpsert` - before anything update if it exists or insert if it exists

 ```
 hooks: {

            // Before creating password, check if the password is there, hash it
            beforeCreate: async (user) => {
                if (user.password) {
                    const salt = await bcrypt.genSalt(10);
                    user.password = await bcrypt.hash(user.password, salt);
                }
            },

            // If password is changed, then hash it
            beforeUpdate: async (user) => {
                if (user.changed("password")) {
                    const salt = await bcrypt.genSalt(10);
                    user.password = await bcrypt.hash(user.password, salt)
                }
            },
        }
 ```

The bcrypt.salt() is to tighten the hashing
 
 Going back to models we can specify actions for generally any model created by using the Class Model Methods

```
class User extends Model {
    async comparePassword(plain) {
        return await bcrypt.compare(plain, this.password);
    }
    toJSON(){
        const values = {...this.get()};
        delete values.password;
        delete values.resetToken;
        return values;
    }
}
```

`toJSON()` converts everything in any Model to json.
`delete` deletes things we don't want to enter database.

We will continue with registration next into the services




 







































