### Express Validator

It is a package that allows us to sanitise and validate what is coming from frontend. There something called SQL injection, where people write their codes which unintentionaly leaves a loop hole for hackers to hijack. Sometimes we are running scripts that we don't know hackers are running in our server. With this they can hijack, steal or even wipe our data.

Apart from Express validator, we have Joy, Zoid especially with typescripts, Yup, Ajav. Some of these packages are also used in frontend.

Postman allows use to do frontend stuff without actually building.

Express now takes care of some of these validations.

Example of hacking script scenerio
```
{
    "userId": "268268",
    "message": "<script>alert(0)</script>"
}
```

`<script>alert(0)</script>` is like example of script inject sent as a data which an hacker can use for hacking.

So now we are going to need to sanitise and validate user's input

<b>Express Validator</b> is a set of middleware functions that provide validation and santisation capabilities for Express.js applications. We can use express validator to validate incoming data in route, such as checking if a field is required, whether it is an email, or if it matches, a specific format.

Understanding documentation is very important rather than just asking for code from ChatGPT. You can check the documentation for <a href="https://express-validator.github.io/docs/guides/getting-started">express-validator</a>

We can validate `req.body`, `req.headers`, cookies, `req.params`, `req.query`

### Installation

`npm install express-validator`

Note we are building api that returns json

It is one thing to add the validator middleware function and it is also one thing to add errors.

### Using Express validator

Let's say we are transfering a json so we want to validate the json 

To validate body we use body function, if we want to validate param, we use param function, header we use header function

So we are validating body

`import {body} from "express-validator"`

#### Postman
Anything that is written in the request section is known as request payload. The body is the request payload sent. We also have reponse payload in the body.

If you want to check the cheat sheat for express validation methods, you can check Week 7 class One. We have `body()`, `query()`, `param()`, `check()` which is used for checking generally. We have for validating Numner `isNum()`, Date `isDate()`, Boolean `isBool()` which are Regex.

Since express-validator is a middleware and we want to put it in the route, we put it in between the route and callback - Route Level Middleware

```
app.get("/json-date", body(), (req, res) => {});
```

This is the json file we are sending as the request payload

```
{
    "userId": "268268",
    "message": "Hello World"
}
```

So we want to validate `userId` key from the body - `body("userId")`

```
app.post("/json-data", body("userId").isNumeric(), (req, res)=>{
    const {userId, message} = req.body;
    res.json({
        status,
        userId,
    });
});
```

We want to check if the userId is a number `body("userId").isNum()`

Now we are just checking but we have not throw error yet


Now to throw errors - we are going to need the `validationResult()` function from `express-validator`

`import {body, validationResult} from "express-vaidator"`

```

const validationStatus = validationResult(req);
console.log(validationStatus);
```
This logs out all the errors in the `req.body`

After running the code above we can see an array of the error 

#### Response
---
```
errors: [
    {
      type: 'field',
      value: undefined,
      msg: 'Invalid value',        
      path: 'userId',
      location: 'body'
    }
  ]
```

value: `undefined` means user input no value.

`validationStatus.isEmpty()` carries a boolean value true or false to show if the there is error or not. It will return `true` which is <b>error is empty </b>that is no error. It will return `false` which is <b>error is not empty</b> that is there is error

So we can handle whenever there is error or not

```
if (!validationStatus.isEmpty()) {
    res.json(validationStatus.errors);
}
```

So since value is undefined, there is error, so that's false. So we say that if `!validationStatus.isEmpty()` that is <b>if it is not empty </b>


```
if (!validationStatus.isEmpty()) {
    res.json(validationStatus.errors);
} else{
    const {userId, message} = req.body;
    res.json({
        status: "Sucess",
        userId: userId,
        message,
    });       
}
```

So if there is error return a Error response or if there is no error continue to return a Sucess response

Note: there is also the `.notEmpty()` which checks if the there is error. It is like saying `!validationStatus.isEmpty()` is equal to `validationStatus.notEmpty()`

Now so if we want to secure things we use `.escape()`we use it in the routelevel middleware `body("userId").isNumeric().escape()`. This is method chaining

```
app.post("/json-data", body("userId").isNumeric().escape(), (req, res)=>{
    const validationStatus = validationResult(req);

    console.log(validationResult)
    if (!validationStatus.isEmpty()) {
        res.json(validationStatus.errors)
    }

    const {userId, message} = req.body;
    
    res.json({
        status: "Sucess",
        userId: userId,
        message,
    });
});    
```

The `.escape()` runs the remainig code instead of using the else statement

Now we can add multiple middle way to validate multiple request payloads

```
app.post(... [body("userId").isNumeric().escape(), body("message").isLength({min: 2})], ...);
```

We save them as an array

We added an additional express body validator that validates the message to be a minimum of 2 characters.

`body("message").isLength({min, max})`

So in postman if we send
```
{   
    "userId": "",
    "message": "H"
}
```

It will give two errors. One for userId is not a number, the other one that message does not have a minimum of 2 characters

#### Response
---
```
[
    {
        "type": "field",
        "value": "",
        "msg": "Invalid value",
        "path": "userId",
        "location": "body"
    },
    {
        "type": "field",
        "value": "H",
        "msg": "Invalid value",
        "path": "message",
        "location": "body"
    }
]
```

Using `.withMessage()` in the `body("message")` we can send a message to the client that says "Must be a minimum of two character"

`body("message").isLength().withMessage("Must be a minimum of two characters")`

#### Response
---
```
{
    "type": "field",
    "value": "H",
    "msg": "Must be minimum of 2 characters",
    "path": "message",
    "location": "body"
}
```

Since all our validations is an array, we can save it in a variable or even destructure it.

```
const jsonValidator = [
    body("userId").isNumeric().escape(), 
    body("message")
        .isLength({min: 2})
        .withMessage("Must be minimum of 2 characters");
    ];

app.post("/json-data", jsonValidator, ...);
```

We can put these express validations are in our `/utils` folder as save as jsonValidator.js

then export it and import it in our app.js

#### <i>utils/jsonValidator.js</i>

```
import {body} from "express-validator";

const jsonValidator = [
    body("userId").isNumeric().escape(), 
    body("message")
    .isLength({min: 2})
    .withMessage("Must be minimum of 2 characters")
];

export default jsonValidator;

```

then

`import jsonValidator from "./utils/jsonValidator.json"`

Also we can store the validationResult middleware in the utils folder

#### <i>utils/validationMiddleware.js</i>

```
import {validationResult} from "express-validator"

const validationMiddleware = (req, req, next) => {
    const validationStatus = validationResult(req);
    !validationStatus.isEmpty() && res.json({success: "false", error: validationStatus.array()});
    next();
}

export default validationMiddleware;
```

then 

`import validationMiddleware from "./utils/validationMiddleware.js"`

Using `validationStatus.array()` we can return array of the two errors instead of an array of separate objects

`app.post("/json-data", jsonValidator, validationMiddleware, (req, res)=>{});`

### Validation Methods

- `body()`: validates data in the body of the request
- `query()`: validates data in the query strings
- `param()`: validate data in the route parameters
- `check()`: generic validator for any field
- `header()`: validate data in header
- `withMessage()`: attached after validator, contains a message if the validation fails

### Sanitisation Methods

Santisation is used to clean up data before it is used. This includes actions like trimming whitespaces or escaping special characters/

- `sanitise()`: sanitises fields 
- `escape()`: escapes HTML tags
- `normalizeEmail()`: Converts email to normalised format e.g lowercased
- `trim()`: Removes whitespacs from the start and end of a strings.

We can chain multiple validation methods together apply several rules to the same fields.

`escape()` prevents the use of `<script></script>`

### String Validators

`isLength()`, `isEmpty()`, `notEmpty()`, is `isAlpha()` only alphabets, `isAlphanumeric()` for checking if string contains letters and numbers only, `isAscii()`, `isBase64()`, `isEmail()` validates email format, `isURL()` validates URL format, `isUDID()` checks for valid UDID (v1-v5)

### Numeric, Boolean, Date and Time Validators
`isInt()`, `isFloat()`, `isDecimal()`, `isDivisibleBy(number)`, `isDate()`, `isAfter(date)`, `isBefore(date)`, `isBoolean()`

### Array, Regex, File, and Custom Validators

- `isArray()` - validates if the input is an array, 
- `isIn()` - checks if the value is in a specified array
- `matches(regex)`- checks if the strings matches a given expression
```
body('user').matches(/^[a-xA-z0-9]*$/)
```

- `contains(seed)`: Checks id the string contains a given seed value
- `isMimeType(type)`: Validates MIME type of a file
- `isBase64()`: Ensure the value is Base-64 encoded

- `custom(callback)` Enables custom validation logic

```
body("age").custom(value => {
    if (value < 18) {
        throw new Error("Age must be at least 18");
    } else {
        return true;
    }
});
```

#### Response
---
```
"success": "false",
"error": [
    {
        "type": "field",
        "value": 12,
        "msg": "Age must be at least 18",
        "path": "age",
        "location": "body"
    }
]
}
```

















