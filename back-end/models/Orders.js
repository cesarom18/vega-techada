const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrdersSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'Users',
        required: [true, 'El usuario asociado al pedido es requerido']
    },
    shop: {
        type: Schema.Types.ObjectId,
        ref: 'Shops',
        required: [true, 'La tienda asociada al pedido es requerida']
    },
    products: [
        {
            product: {
                type: Schema.Types.ObjectId,
                ref: 'Products',
                required: [true, 'El producto asociado al pedido es requerido']
            },
            quantity: {
                type: Number,
                min: [1, 'La cantidad mínima de un producto es 1'],
                required: [true, 'La cantidad del producto es requerida']
            }
        }
    ],
    states: [
        {
            state: {
                type: Schema.Types.ObjectId,
                ref: 'OrderStates',
                required: [true, 'El estado del pedido es requerido']
            },
            updateDate: {
                type: Date,
                default: Date.now,
                required: [true, 'La fecha de actualización del estado del pedido es requerida']
            }
        }
    ],
    paymentMethod: {
        type: Schema.Types.ObjectId,
        ref: 'PaymentMethods',
        required: [true, 'El método de pago del pedido es requerido']
    },
    finishDate: {
        type: Date,
        required: [true, 'La fecha de finalización del pedido es requerida']
    },
    total: {
        type: Number,
        required: [true, 'El total del pedido es requerido']
    }
}, { timestamps: true });

module.exports = mongoose.model('orders', OrdersSchema);