const express = require('express');
const app = express();
require('dotenv').config()
const Port = process.env.PORT;
const db = require('./config/mongoose');

app.use(
    express.urlencoded({extended: true})
)

app.use(express.json());

const router = require('./routes');
app.use('/', router);



app.listen(Port , (err) =>{
    if(err) {
        console.log(`Error: ${err}`);
        return;
    }
    console.log(`Success!! Running on Port: ${Port}`);
})