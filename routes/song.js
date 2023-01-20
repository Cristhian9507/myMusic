const { Router } = require('express');
const { saveSong, listSong, removeSongToUser  } = require('../controllers/song');

const router = Router();

router.post('/', saveSong);
router.get('/:usuario', listSong);
router.delete('/:usuario/cancion/:id', removeSongToUser);



module.exports = router;