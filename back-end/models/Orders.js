const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrdersSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'Users',
        required: true
    },
    shop: {
        type: Schema.Types.ObjectId,
        ref: 'Shops',
        required: true
    },
    products: [
        {
            product: {
                type: Schema.Types.ObjectId,
                ref: 'Products',
                required: true
            },
            quantity: {
                type: Number,
                min: 1,
                required: true
            }
        }
    ],
    states: [
        {
            state: {
                type: Schema.Types.ObjectId,
                ref: 'OrderStates',
                required: true
            },
            updateDate: {
                type: Date,
                default: Date.now,
                required: true
            }
        }
    ],
    paymentMethod: {
        type: String,
        enum: ['Retiro Local', 'Transferencia Bancaria'],
        default: 'Retiro Local',
    },
    finishDate: {
        type: Date,
        required: true
    },
    total: {
        type: Number,
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('Orders', OrdersSchema);