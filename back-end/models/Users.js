const mongoose= require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        length: 9,
        required: true
    },
    rut: {
        type: String,
        maxlength: 12,
        required: true,
        unique: true
    },
    birthDate: {
        type: Date,
        required: true
    },
    rol: {
        type: String,
        enum: ['Cliente', 'Locatario', 'Admin'],
        default: 'Cliente',
    }
}, { timestamps: true });

module.exports = mongoose.model('Users', UserSchema);