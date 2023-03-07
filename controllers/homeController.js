const Payload = require('../model/Payload');

module.exports.home = (req , res) =>{
    res.send(`<h1>**** Test API ****</h1>`);
}
module.exports.createProduct = async (req , res) =>{
    try {
        let productId = await Payload.findOne({productId: req.body.productId});
        console.log(req.body);
        if(!productId){
            let product = Payload.create(req.body);
            return res.status(200).json({
                message: 'Successfully created a product',
                data: {
                    product: product
                }
            });
        }else{
            return res.status(422).json({
                message: "Product Already exists" 
            });
        }
    } catch (error) {
        console.log(`Error: ${err}`);
        return res.status(500).json({
            message: "Internal Server Error" 
        });
    }
}

module.exports.operations = async (req , res) =>{
    try {
        let product = await Payload.findById(req.body.productId);

        if(product){
            if(req.body.operation == 'add'){
                product.quantity = product.quantity + req.body.quantity;
                return res.status(200).json({
                    message: 'Successfully change the quantities (Add)',
                    data: {
                        product: product
                    }
                });
            }else if((req.body.operation == 'subtract')){
                product.quantity = product.quantity - req.body.quantity;
                return res.status(200).json({
                    message: 'Successfully change the quantities (Subtract)',
                    data: {
                        product: product
                    }
                });
            }
        }else{
            console.log(`Error: ${err}`);
        return res.status(422).json({
            message: "Product Does not exists" 
        });
        }
        
    } catch (error) {
        console.log(`Error: ${err}`);
        return res.status(500).json({
            message: "Internal Server Error" 
        });
    }
}