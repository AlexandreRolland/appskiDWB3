const express = require('express');
const router = express.Router()
const BookingController = require('../controllers/booking.controller')

router.get("/bookings", BookingController.getAll)
router.get("/bookings/:id", BookingController.getOne)
router.post('/bookings', BookingController.create)
router.delete('/bookings/:id', BookingController.delete)
router.put('/bookings/:id', BookingController.update)

module.exports = router