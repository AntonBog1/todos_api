const express = require('express');

const app = express();

app.get('/', function(req, res){
    res.send("HI THERE!")
})

app.listen(3000, function(){
    console.log('App is live on port 3000')
});