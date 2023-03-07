const Payload = require('../model/Payload');

module.exports.home = (req, res) => {
    res.send(`<h1>**** Test API ****</h1>`);
}
module.exports.createProduct = async (req, res) => {
    try {
        let product = await Payload.create(req.body);
        return res.status(200).json({
            message: 'Successfully created a product',
            data: {
                product: product
            }
        });
    } catch (err) {
        console.log(`Error: ${err}`);
        return res.status(500).json({
            message: "Internal Server Error"
        });
    }
}

module.exports.operations = async (req, res) => {
    try {
        let product = await Payload.findById(req.params.id);

        if (product) {
            if (req.body.operation == 'add') {
                let updatedProduct = await Payload.findOneAndUpdate(
                    { _id: req.params.id },
                    { $inc: { quantity: req.body.quantity } },
                    { new: true }
                );
                return res.status(200).json({
                    message: 'Successfully change the quantities (Add)',
                    data: {
                        product: updatedProduct
                    }
                });
            } else if ((req.body.operation == 'subtract')) {
                let updatedProduct = await Payload.findOneAndUpdate(
                    { _id: req.params.id },
                    { $inc: { quantity: -req.body.quantity } },
                    { new: true }
                );
                return res.status(200).json({
                    message: 'Successfully change the quantities (Subtract)',
                    data: {
                        product: updatedProduct
                    }
                });
            }
        } else {
            return res.status(422).json({
                message: "Product Does not exists"
            });
        }

    } catch (err) {
        console.log(`Error: ${err}`);
        return res.status(500).json({
            message: "Internal Server Error"
        });
    }
}