const asyncHandler  = require('express-async-handler');
const Cedula = require('../models/cedulasModels')
const crearCedula = asyncHandler(async (req, res) => {
    const {folio_cedula, fecha_entrevista, vpn_localidad, num_empleado, anexo_administrativo, anexo_operativo, anexo_normativo, anexo_infraestructura,
        calif_titulares, calif_usuarios, calif_enlaces, calif_sadctis, ponderacion_final, comentarios} = req.body
    
    if (!folio_cedula || !fecha_entrevista || !vpn_localidad || !num_empleado || !anexo_administrativo || !anexo_operativo || !anexo_normativo || !anexo_infraestructura ||
        !calif_titulares || !calif_usuarios || !calif_enlaces || !calif_sadctis || !ponderacion_final || !comentarios) {
        res.status(400)
        throw new Error('Faltan datos')
    }
    const cedulaExiste = await Cedula.findOne({ folio_cedula })
    if (cedulaExiste) {
        res.status(400)
        throw new Error('La cedula ya existe en la base de datos')
    }
    
    const  cedula = await Cedula.create ({
        folio_cedula,
        fecha_entrevista,
        vpn_localidad,
        num_empleado,
        anexo_administrativo,
        anexo_operativo,
        anexo_normativo,
        anexo_infraestructura,
        calif_titulares,
        calif_usuarios,
        calif_enlaces,
        calif_sadctis,
        ponderacion_final,
        comentarios
        })
    
    if (cedula) {
        res.status(201).json({
            _id: cedula.id,
            folio_cedula: cedula.folio_cedula,
            fecha_entrevista:  cedula.fecha_entrevista,
            vpn_localidad: cedula.vpn_localidad,
            num_empleado:  cedula._doc.num_empleado,
            anexo_administrativo:  cedula.anexo_administrativo,
            anexo_operativo: cedula.anexo_operativo,
            anexo_normativo: cedula.anexo_normativo,
            anexo_infraestructura: cedula.anexo_infraestructura,
            calif_titulares: cedula.calif_titulares,
            calif_usuarios: cedula.calif_usuarios,
            calif_enlaces: cedula.calif_enlaces,
            calif_sadctis: cedula.calif_sadctis,
            ponderacion_final: cedula.ponderacion_final,
            comentarios: cedula.comentarios,
            isActive: cedula.isActive,
            message:'Se ha creado el registro correctamente'
        })
        } else {
            res.status(400)
            throw new Error('Error al crear la Cedula, no se pudo gardar los datos')
        }

})

const datosCedula = asyncHandler(async (req,res) =>{

    const cedula = await Cedula.find()
    res.status(200).json(cedula)
})

const updateCedula = asyncHandler(async (req, res) => {

    const cedula = await Cedula.findById(req.params.id)

    if (!cedula) {
        res.status(400)
        throw new Error('Esa Cedula no existe')
    } else {
        const cedulaUpdated = await Cedula.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.status(200).json(cedulaUpdated)
    }
})

const deleteCedula = asyncHandler(async (req, res) => {

    const cedula = await Cedula.findById(req.params.id)

    if (!cedula || !cedula.isActive) {
        res.status(400)
        throw new Error('Esa Cedula no existe')
    } else {
        cedula.isActive=false;
        //await Cedula.deleteOne(cedula)
        //const tareaDeleted = await Tarea.findByIdAndDelete(req.params.id)
        res.status(200).json({ id: req.params.id })
        console.log("Se elimino la Cedula")
    }
})

module.exports = {
    crearCedula,
    datosCedula,
    updateCedula,
    deleteCedula,
}
