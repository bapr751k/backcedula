const mongoose = require('mongoose')

const empleadoSchema = mongoose.Schema({
    name_full: {
        type: String,
        required: [true, "Por favor teclea tu nombre completo con apellidos:"]
    },
    email: {
        type: String,
        required: [true, "Por favor teclea su email:"],
        unique: true
    },
    num_empleado: {
        type: Number,
        required: [true, "Por favor teclea su numero de empleado:"],
        unique: true
    },
    rfc8: {
        type: String,
        required: [true, "Por favor teclea su RFC8:"],
        unique: true,
        maxLength: 8
    },
    puesto: {
        type: String,
        required: [true, "Por favor teclea su puesto:"]
    },
    asign: {
        type: String,
        required: [true, "Por favor teclea Titular, Colaborador, Encargado:"]
    },
    inmueble: {
        type: String,
        required: [true, "Por favor teclea Nombre Inmueble:"]
    },
    isActive: {
        type: Boolean,
        default: true
    }

}, {
    timestamps: true //Crea campos createdAt y updatedAt
})

module.exports = mongoose.model('Empleado', empleadoSchema);