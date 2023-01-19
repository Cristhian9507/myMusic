const { Router } = require('express');
const { buscarCancionesArtista } = require('../controllers/buscar');

const router = Router();

router.get('/', buscarCancionesArtista);

module.exports = router;