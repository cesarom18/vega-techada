const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    fullName: {
        type: String,
        required: [true, 'El nombre completo del usuario es requerido'],
    },
    email: {
        type: String,
        required: [true, 'El correo electrónico del usuario es requerido'],
        unique: [true, 'El correo electrónico ya existe'],
    },
    password: {
        type: String,
        length: [8, 'La contraseña debe tener al menos 8 caracteres'],
        required: [true, 'La contraseña del usuario es requerida'],
    },
    rut: {
        type: String,
        maxlength: [12, 'El RUT no puede exceder los 12 caracteres'],
        required: [true, 'El RUT del usuario es requerido'],
        unique: [true, 'El RUT ya existe']
    },
    birthDate: {
        type: Date,
        required: [true, 'La fecha de nacimiento del usuario es requerida'],
    },
    rol: {
        type: String,
        enum: {
            values: ['Cliente', 'Locatario', 'Admin'],
            message: 'El rol del usuario no es válido'
        },
        default: 'Cliente',
    }
}, { timestamps: true });

module.exports = mongoose.model('users', UserSchema);