const express = require('express')
const router = express.Router()
const { crearCedula, datosCedula, updateCedula, deleteCedula, } = require('../controllers/cedulasControllers')
//const { protect } = require('../middleware/authMiddleware')

//router.route('/').get(protect, getTareas).post(protect, createTareas)
router.get('/', datosCedula)
router.post('/', crearCedula)

//router.route('/:id').delete(deleteTareas).put(updateTareas)
router.put('/:id', updateCedula)
router.delete('/:id', deleteCedula)

module.exports = router