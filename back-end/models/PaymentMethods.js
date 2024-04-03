const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PaymentMethodsSchema = new Schema({
    name: {
        type: String,
        required: [true, 'El nombre del método de pago es requerido']
    }
}, { timestamps: true });

module.exports = mongoose.model('payment_methods', PaymentMethodsSchema);