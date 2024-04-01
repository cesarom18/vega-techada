import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const PaymentMethodsSchema = new Schema({
    name: {
        type: String,
        required: true
    }
}, { timestamps: true });

export default mongoose.model('payment_methods', PaymentMethodsSchema);