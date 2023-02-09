const express = require('express');
const router = express.Router()
const ShopController = require('../controllers/post.controller')

router.get("/shops", ShopController.getAll)
router.get("/shops/:id", ShopController.getOne)
router.post('/shops', ShopController.create)
router.delete('/shops/:id', ShopController.delete)
router.put('/shops/:id', ShopController.update)

module.exports = router