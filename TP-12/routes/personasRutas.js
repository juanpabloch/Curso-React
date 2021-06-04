const router = require("express").Router();

const personaController = require('../controllers/personaController');


router.post("/", personaController.guardarUnaPersona);

router.get("/", personaController.listarPersonas);

router.get('/:id', personaController.traerUnaPersona);

router.delete('/:id', personaController.eliminarPersona);

router.put('/:id', personaController.modificarPersona);

module.exports = router