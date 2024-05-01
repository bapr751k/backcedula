const asyncHandler  = require('express-async-handler');
const Inmueble = require('../models/inmueblesModels')
const crearInmueble = asyncHandler(async (req, res) => {
    const {idvpn, nom_localidad, nom_inmueble, tipo_localidad, tipo_inmueble, num_emptitular} = req.body
    
    if (!idvpn || !nom_localidad || !nom_inmueble || !tipo_localidad || !tipo_inmueble || !num_emptitular) {
        res.status(400)
        throw new Error('Faltan datos')
    }
    const inmuebleExiste = await Inmueble.findOne({ nom_inmueble })
    if (inmuebleExiste) {
        res.status(400)
        throw new Error('El inmueble ya existe en la base de datos')
    }
    
    const  inmueble = await Inmueble.create ({
        idvpn,
        nom_localidad,
        nom_inmueble,
        tipo_localidad,
        tipo_inmueble,
        num_emptitular
        })
    
    if (inmueble) {
        res.status(201).json({
            _id: inmueble.id,
            idvpn: inmueble.idvpn,
            nom_localidad: inmueble.nom_localidad,
            nom_inmueble: inmueble.nom_inmueble,
            tipo_localidad: inmueble.tipo_localidad,
            tipo_inmueble: inmueble.tipo_inmueble,
            num_emptitular: inmueble.num_emptitular,
            isActive: inmueble.isActive,
            message:'Se ha creado el registro correctamente'
        })
        } else {
            res.status(400)
            throw new Error('Error al crear el Inmueble, no se pudo gardar los datos')
        }

})

const datosInmueble = asyncHandler(async (req,res) =>{

    const inmueble = await Inmueble.find()
    res.status(200).json(inmueble)
})

const updateInmueble = asyncHandler(async (req, res) => {

    const inmueble = await Inmueble.findById(req.params.id)

    if (!inmueble) {
        res.status(400)
        throw new Error('Esa Inmueble no existe')
    } else {
        const inmuebleUpdated = await Inmueble.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.status(200).json(inmuebleUpdated)
    }
})

const deleteInmueble = asyncHandler(async (req, res) => {

    const inmueble = await Inmueble.findById(req.params.id)

    if (!inmueble || !inmueble.isActive) {
        res.status(400)
        throw new Error('Ese Inmueble no existe')
    } else {
        inmueble.isActive=false;
        //await Inmueble.deleteOne(inmueble)
        //const tareaDeleted = await Tarea.findByIdAndDelete(req.params.id)
        res.status(200).json({ id: req.params.id })
        console.log("Se elimino el Inmueble")
    }
})

module.exports = {
    crearInmueble,
    datosInmueble,
    updateInmueble,
    deleteInmueble,
}
