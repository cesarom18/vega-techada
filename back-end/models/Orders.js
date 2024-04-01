import mongoose from 'mongoose';
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
        type: Schema.Types.ObjectId,
        ref: 'PaymentMethods',
        required: true
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

export default mongoose.model('orders', OrdersSchema);