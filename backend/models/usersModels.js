const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Por favor teclea tu nombre:"]
    },
    email: {
        type: String,
        required: [true, "Por favor teclea tu email:"],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'La contraseña es obligatoria'],
        minlength: 8
    },
    phone: {
        type: String,
        maxLength: 10
    },
    esAdmin:{
        type: Boolean,
        default: false
    },
    isActive: {
        type: Boolean,
        default: true
    }
}, {
    timestamps: true //Crea campos createdAt y updatedAt
})

module.exports = mongoose.model('User', userSchema);
