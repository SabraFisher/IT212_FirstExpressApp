const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const crypto = require('crypto');

let users = [
    { id: crypto.randomUUID(), name: "Tim", age: 20 },
    { id: crypto.randomUUID(), name: "Alice", age: 24 },
    { id: crypto.randomUUID(), name: "Lilly", age: 13 }
];



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Hello Centralia!')
})
//create Specification HTTP POST method to create a resource
app.post('/users', (req, res) => {
    console.log(req.body);
    users.push(req.body);
    res.status(201);
    res.json(req.body);
});


//read all at once
app.get('/users', (req, res) => {
    res.json(users);
});

//     OR
// read each by id
app.get('/users/:id', (req, res) => {
    const id = parseInt(req.params.id);
    if (id < 0 || id >= users.length) {
        return res.status(404).send('User not found');
    }
    console.log("user requested id:", id);
    res.json(users[0]);
})

//update  Specification HTTP POST method to update by replacing with data provided in the request body
app.post('/users/:id', (req, res) => {
    res.status(500);
    res.send();
});

//delete   HTTP DELETE specification method
app.delete();


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})




