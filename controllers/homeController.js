const Payload = require('../model/Payload');
module.exports.home = (req , res) =>{
    res.send(`<h1> Test API </h1>`);
}
module.exports.createProduct = async (req , res) =>{
    try {
        let productId = await Payload.findOne({productId: req.body.productId});
        console.log(req.body);
        if(!productId){
            Payload.create(req.body);
        }
    } catch (error) {
        
    }
}

module.exports.operations = async (req , res) =>{
    try {
        let product = await Payload.findById(req.body.productId);

        if(product){
            if(req.body.operation == 'add'){
                product.quantity = product.quantity + req.body.quantity;
            }else{
                product.quantity = product.quantity - req.body.quantity;
            }
        }else{
            console.log('Product does not exist');
        }
        
    } catch (error) {
        console.log(`Error: ${err}`);
    }
}