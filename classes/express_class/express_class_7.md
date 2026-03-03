### Handling Parameters in Express.js

Params are like certain variables in URLs. Example:

`api/users/12345`

If we used query strings:

`api/users?userId=12345`

Remember, anything in URL is a resource. Let's say we are looking fro a student in a university named Samuel. We have a place for student's record where students are identified by ids

Instead of using a long query to find the admission letter of Samuel

`api/users?userId=12345&document=admission_letter`

We use this:

`api/users/12345/student_admission_letter`

We may have a case where we need to get admission letter or documents of several students and other long info

`api/users?userId=12345&document=admission_letter`

`api/users?userId=43545&document=birth_certificate&department=computerengineering`

`api/users?userId=4w545&document=letter`

`api/users?userId=54656&document=admission_letter`

So we will use params. But params means we will have separate routes of each user id which will be a lot of routes

`api/users/12345/admission_letter`
`api/users/32713/admission_letter`
`api/users/13075/admission_letter`
`api/users/30333/admission_letter`

Instead we save the ids as a single variable: `:userId`

`api/user/:userId/admisson_letter`

This will get any admission letter for any user id

Since we can request for different documents like admission letter, birth certificate, o level result, we can save them in a singele variable `:document`

`api/user/:userId/:document`

Now we may want to just fetch the document and then we also want to edit the document

`api/user/:userId/:document/edit`

Example: 
```
app.get("/users/:id", (req, res)=> {
    const userId = req.params.id;
    res.send(`User ID ${userId}`);
});
```


These resources are coming from database


Now working with database
```
const database = {
    12345: {
        name: "Samuel",
        matric: "12345"
    },
    12346: {
        name: "Itunu",
        matric: "12346"
    }
}

// /user/:id
app.get("/users/:id", (req, res)=> {
    
});
```






