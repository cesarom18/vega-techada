const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PaymentMethodsSchema = new Schema({
    name: {
        type: String,
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('payment_methods', PaymentMethodsSchema);