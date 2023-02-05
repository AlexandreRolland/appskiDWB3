const Post = require('../models/post.model');

const PostController= {
    getAll: async (req, res) =>{
        const post = await Post.find().populate(['bookings','comments'] );
        res.send(post);
    }
,
getOne: async (req, res) => {
    const { id } = req.params;
    try {
        const post = await Post.findById(id);
        res.send(post);
    } catch (error) {
        res.status(404).send({ message: 'Post not found' });
    }
},
create: async (req, res) => {
    console.log(req.body);
    try {
        const post = await new Post(req.body).save();
        
        res.send(post);
    } catch (error) {
        console.log(error);
        res.status(400).send({ message: 'Invalid post data (create)' });
    }
},
update: async (req, res) => {
    const { id } = req.params;
    try {
        const post = await Post.findByIdAndUpdate(id, req.body)
        res.send(post);
    } catch (error) {
        res.status(400).send({ message: 'Invalid post data (update)' });
    }
},
delete: async (req, res) => {
    const { id } = req.params;
    try {
        const post = await Post.findByIdAndDelete(id);
        res.send("Post deleted");
    } catch (error) {
        res.status(404).send({ message: 'Delete Post not found' });
    }
}
}







module.exports = PostController