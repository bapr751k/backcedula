const express = require('express')
const router = express.Router()
const { crearEmpleado, datosEmpleado, updateEmpleado, deleteEmpleado } = require('../controllers/empleadosControllers')
//const { protect } = require('../middleware/authMiddleware')

//router.route('/').get(protect, getTareas).post(protect, createTareas)
router.get('/', datosEmpleado)
router.post('/', crearEmpleado)

//router.route('/:id').delete(deleteTareas).put(updateTareas)
router.put('/:id', updateEmpleado)
router.delete('/:id', deleteEmpleado)

module.exports = router