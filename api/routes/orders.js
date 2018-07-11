const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Get request to /orders'
    });
});

router.post('/', (req, res, next) => {
    res.status(200).json({
        message: 'Order was created'
    });
});

router.get('/:orderId', (req, res, nerxt) => {
    res.status(200).json({
        message: 'Order detail',
        orderId: req.params.orderId
    })
})
module.exports = router;