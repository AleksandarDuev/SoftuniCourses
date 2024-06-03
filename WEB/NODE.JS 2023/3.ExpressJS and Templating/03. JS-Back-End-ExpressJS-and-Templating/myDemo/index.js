const express = require('express');
const handlebars = require('express-handlebars');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello form Express!')
});

app.get('/cats', (req, res) => {
    res.send('This page contains cats list')
});

app.get('/cats/:catId', (req, res) => {
    console.log(req.params);                    //req.params == all the params form the URL
    res.send(`request with parameter- ${req.params.catId}`)
})

app.post('/cats', (req, res) => {
    res.status(201).send('Cat has been created')
})



app.get('*', (req, res) => {
    res.status(404).send('(404) Page not found')     // "*" always must be last handler
})

app.listen(5000, ()=>{
    console.log('Server listening on port 5000');
})