const express = require('express');

const router = express.Router();
const c = require('../controllers');

// Route Open

router.get('/', c.general.index);

router.get('/customer', c.customer.index);
router.get('/customer/:id', c.customer.show);
router.post('/customer', c.customer.create);
router.put('/customer/:id', c.customer.update);
router.delete('/customer/:id', c.customer.destroy);

module.exports = router;
