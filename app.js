const express = require('express');
const app = express();
const Port = 3000;

app.get('/' , (req , res) =>{
    req.send('<h1> Hello </h1>');
});

app.listen(Port , (err) =>{
    if(err) {
        console.log(`Error: ${err}`);
        return;
    }
    console.log(`Success!! Running on Port: ${Port}`);
})