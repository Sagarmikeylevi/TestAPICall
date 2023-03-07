const mongoose = require('mongoose');
require('dotenv').config();

mongoose.set('strictQuery', false);

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });

const db = mongoose.connection;


db.on('error' , console.error.bind(console , "Error connecting to MongoDB"));

db.on('connected', () => {
    console.log('Mongoose default connection open');
});

module.exports = db;