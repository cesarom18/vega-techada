import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const ProductCategoriesSchema = new Schema({
    name: {
        type: String,
        required: [true, 'El nombre de la categoria de producto es requerido'],
    }
});

export default mongoose.model('product_categories', ProductCategoriesSchema);