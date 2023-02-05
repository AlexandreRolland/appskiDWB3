const express = require('express');
const router = express.Router()
const PostController = require('../controllers/post.controller')

router.get("/posts", PostController.getAll)
router.get("/posts/:id", PostController.getOne)
router.post('/posts', PostController.create)
router.delete('/posts/:id', PostController.delete)
router.put('/posts/:id', PostController.update)

module.exports = router