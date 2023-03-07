const express = require('express')
const router = express.Router()

const homeController = require('../controllers/homeController');

router.get('/' , homeController.home);

router.post('/create-product' , homeController.createProduct);
router.post('/payload/:id' , homeController.operations);



console.log('Router is running fine');
module.exports = router;
