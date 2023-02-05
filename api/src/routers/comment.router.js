const express = require('express');
const router = express.Router()
const CommentController = require('../controllers/comment.controller')

router.get("/comments", CommentController.getAll)
router.get("/comments/:id", CommentController.getAll)
router.post('/comments', CommentController.create)
router.delete('/comments/:id', CommentController.delete)
router.put('/comments/:id', CommentController.update)

module.exports = router