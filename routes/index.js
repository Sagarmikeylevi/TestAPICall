const express = require('express')
const router = express.Router()

router.get('/' , (req , res) =>{
    req.send('<h1> Hello </h1>');
});

console.log('Router is running fine');
module.exports = router;
