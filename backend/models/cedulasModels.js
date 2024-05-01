const mongoose = require('mongoose')

const cedulaSchema = mongoose.Schema({
    folio_cedula: {
        type: Number,
        required: [true, "Ingresa Folio formato[año 4 digitos + consecutivo 3 digitos 001]:"]
    },
    fecha_entrevista: {
        type: Date,
        required: [true, "Ingresa Fecha de entrevista:"]
    },
    vpn_localidad: {
        type: Number,
        required: [true, "ID VPN de la Loalidad:"]
    },
    num_empleado: {
        type: Number,
        required: [true, "Numero de empleado del titular del inmueble:"]
    },
    anexo_administrativo: {
        type: Number,
        required: [true, "Ponderación del anexo administrativo:"]
    },
    anexo_operativo: {
        type: Number,
        required: [true, "Ponderación del anexo Operativo:"]
    },
    anexo_normativo: {
        type: Number,
        required: [true, "Ponderación del anexo Normativo:"]
    },
    anexo_infraestructura: {
        type: Number,
        required: [true, "Ponderación del anexo Infrastructura:"]
    },
    calif_titulares: {
        type: Number,
        required: [true, "Ponderación de la entrevista a Titulares:"]
    },
    calif_usuarios: {
        type: Number,
        required: [true, "Ponderación de la encuesta a Usuarios:"]
    },
    calif_enlaces: {
        type: Number,
        required: [true, "Ponderación de la encuesta a Enlaces:"]
    },
    calif_sadctis: {
        type: Number,
        required: [true, "Ponderación de la entrevista a SADCTIS:"]
    },
    ponderacion_final: {
        type: Number,
        required: [true, "Promedio final  de las ponderaciones:"]
    },
    comentarios:{
        type: String,
        required: [true,"Comentario sobre el proceso:"],
        maxlength:[750, 'El texto es demasiado largo']
    },
    isActive: {
        type: Boolean,
        default: true
    }

}, {
    timestamps: true //Crea campos createdAt y updatedAt
})

module.exports = mongoose.model('Cedula', cedulaSchema);