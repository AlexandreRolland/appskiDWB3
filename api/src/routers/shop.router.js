const express = require('express');
const router = express.Router()
const ShopController = require('../controllers/post.controller')

router.get("/posts", ShopController.getAll)
router.get("/posts/:id", ShopController.getOne)
router.post('/posts', ShopController.create)
router.delete('/posts/:id', ShopController.delete)
router.put('/posts/:id', ShopController.update)

module.exports = router