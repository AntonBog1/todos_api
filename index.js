const express = require('express');
const app = express();
const todoRoutes = require('./routes/todos');
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res){
    res.send("Hi from the root route")
});

app.use('/api/todos', todoRoutes);

app.listen(3000, function(){
    console.log('App is live on port 3000')
});