const express = require('express');
const router  = express.Router();

const {ui,getAll,singleStock} = require('../controller/stock')

router.post('/new',ui);
router.get('/all',getAll);
router.get('/sin/:id',singleStock);

module.exports = router;