const asyncHandler  = require('express-async-handler');
const Empleado = require('../models/empleadosModels')
const crearEmpleado = asyncHandler(async (req, res) => {
    const {name_full, email, num_empleado, rfc8, puesto, asign, inmueble} = req.body
    
    if (!name_full || !email || !num_empleado || !rfc8 || !puesto || !asign || !inmueble) {
        res.status(400)
        throw new Error('Faltan datos')
    }
    const empleadoExiste = await Empleado.findOne({ email })
    if (empleadoExiste) {
        res.status(400)
        throw new Error('El empleado ya existe en la base de datos')
    }
    
    const  empleado = await Empleado.create ({
        name_full,
        email,
        num_empleado,
        rfc8,
        puesto,
        asign,
        inmueble
        })
    
    if (empleado) {
        res.status(201).json({
            _id: empleado.id,
            name_full: empleado.name_full,
            email: empleado.email,
            num_empleado: empleado.num_empleado,
            rfc8: empleado.rdc8,
            puesto: empleado.puesto,
            asign: empleado.asign,
            inmueble: empleado.inmueble,
            isActive: empleado.isActive,
            message:'Se ha creado el registro correctamente'
        })
        } else {
            res.status(400)
            throw new Error('Error al crear el Empleado, no se pudo gardar los datos')
        }

})

const datosEmpleado = asyncHandler(async (req,res) =>{

    const empleado = await Empleado.find()
    res.status(200).json(empleado)
})

const updateEmpleado = asyncHandler(async (req, res) => {

    const empleado = await Empleado.findById(req.params.id)

    if (!empleado) {
        res.status(400)
        throw new Error('Esa Empleado no existe')
    } else {
        const empleadoUpdated = await Empleado.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.status(200).json(empleadoUpdated)
    }
})

const deleteEmpleado = asyncHandler(async (req, res) => {

    const empleado = await Empleado.findById(req.params.id)

    if (!empleado || !empleado.isActive) {
        res.status(400)
        throw new Error('Ese Empleado no existe')
    } else {
        empleado.isActive=false;
        //await Empleado.deleteOne(empleado)
        //const tareaDeleted = await Tarea.findByIdAndDelete(req.params.id)
        res.status(200).json({ id: req.params.id })
        console.log("Se elimino el Empleado")
    }
})

module.exports = {
    crearEmpleado,
    datosEmpleado,
    updateEmpleado,
    deleteEmpleado,
}
