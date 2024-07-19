const express = require('express');
const auth = require('auth');
const router = express.Router();

const stuffCtrl = require('../controllers/stuff');

router.get('/', auth, stuffCtrl.getAllStuff);
router.post('/', stuffCtrl.createThing);
router.put('/:id', stuffCtrl.modifyThing);
router.delete('/:id', stuffCtrl.deleteThing);
router.get('/:id', stuffCtrl.getOneThing);
router.get('/', stuffCtrl.getAllStuff);

module.exports = router;
