const express = require('express')
const router = express.Router()
const { crearInmueble, datosInmueble, updateInmueble, deleteInmueble, } = require('../controllers/inmueblesControllers')
//const { protect } = require('../middleware/authMiddleware')

//router.route('/').get(protect, getTareas).post(protect, createTareas)
router.get('/', datosInmueble)
router.post('/', crearInmueble)

//router.route('/:id').delete(deleteTareas).put(updateTareas)
router.put('/:id', updateInmueble)
router.delete('/:id', deleteInmueble)

module.exports = router
