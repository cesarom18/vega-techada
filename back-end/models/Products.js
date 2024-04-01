import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    name: {
        type: String,
        required: true,
        maxlength: 60
    },
    description: {
        type: String,
        minlength: 10,
        maxlength: 255,
        required: true,
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'ProductCategories',
        required: true
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    stock: {
        type: Number,
        required: true,
        min: 0
    },
    available: {
        type: Boolean,
        required: true,
        default: false
    },
    offerType: {
        type: String,
        enum: ['G', 'KG', 'L', 'ML', 'UN'],
        required: true
    },
    image: {
        type: String,
        required: true
    }
});

export default mongoose.model('products', ProductSchema);