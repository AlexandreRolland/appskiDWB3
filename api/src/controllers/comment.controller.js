const Comment = require('../models/comment.model');

const CommentController= {
    getAll: async (req, res) =>{
        const comment = await Comment.find().populate('post');
        res.send(comment);
    },

    getOne: async (req, res) => {
        const { id } = req.params;
        try {
            const comment = await Comment.findById(id);
            res.send(comment);
        } catch (error) {
            res.status(404).send({ message: 'Comment not found' });
        }
    },

    create: async (req, res) => {
        try {
            const comment = await new Comment(req.body).save();
            // await Category.findByIdAndUpdate(post.category, { $push: { recipes: recipe._id } });
            // const category = await Category.findById(recipe.category);
            // category.recipes.push(recipe._id);
            // await category.save();
            
            res.send(comment);
        } catch (error) {
            console.log(error);
            res.status(400).send({ message: 'Invalid comment data (create)' });
        }
    },

    update: async (req, res) => {
        const { id } = req.params;
        try {
            const comment = await Comment.findByIdAndUpdate(id, req.body)
            res.send(comment);
        } catch (error) {
            res.status(400).send({ message: 'Invalid post data (update)' });
        }
    },

    delete: async (req, res) => {
        const { id } = req.params;
        try {
            const comment = await Comment.findByIdAndDelete(id);
            res.send("Comment deleted");
        } catch (error) {
            res.status(404).send({ message: 'Delete Comment not found' });
        }
    }
}

module.exports = CommentController