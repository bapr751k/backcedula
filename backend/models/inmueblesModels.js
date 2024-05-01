const mongoose = require('mongoose')

const inmuebleSchema = mongoose.Schema({
    idvpn: {
        type: Number,
        required: [true, "Por favor teclea ID VPN del inmueble:"]
    },
    nom_localidad: {
        type: String,
        required: [true, "Por favor teclea nombre de la Localidad:"]
    },
    nom_inmueble: {
        type: String,
        required: [true, "Ingresa nombre del inmueble:"]
    },
    tipo_localidad: {
        type: String,
        required: [true, "Ingresa tipo de localidad [Desconcentrada / Aduana]:"]
    },
    tipo_inmueble: {
        type: String,
        required: [true, "Tipo inmueble [Sede / Subsede]:"]
    },
    num_emptitular: {
        type: Number,
        required: [true, "Numero de empleado del Titular:"]
    },
    isActive: {
        type: Boolean,
        default: true
    }

}, {
    timestamps: true //Crea campos createdAt y updatedAt
})

module.exports = mongoose.model('Inmueble', inmuebleSchema);