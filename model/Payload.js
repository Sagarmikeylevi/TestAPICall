const mongoose = require('mongoose')
const { Schema } = mongoose;

const payloadSchema = new Schema({
    productID: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
},{
    timestamps: true
});

const Payload = mongoose.model('Payload' , payloadSchema);
module.exports = Payload;