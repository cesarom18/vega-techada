import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const ProductCategoriesSchema = new Schema({
    name: {
        type: String,
        required: true
    }
});

export default mongoose.model('ProductCategories', ProductCategoriesSchema);