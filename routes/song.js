const { Router } = require('express');
const { saveSong, listSong } = require('../controllers/song');

const router = Router();

router.post('/', saveSong);
router.get('/:usuario', listSong);



module.exports = router;