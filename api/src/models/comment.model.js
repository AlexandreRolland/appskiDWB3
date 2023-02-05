const mongoose = require('mongoose');
const { Schema } = mongoose;

const commentSchema = new Schema({
    username: { type: String, required: true },
    description: { type: String, required: true},
    stars: { type: Number, required: true, default: 0},
    createdAt: { type: Date, default: Date.now },
    post: { type: mongoose.SchemaTypes.ObjectId, ref: 'Post'},
})

module.exports = mongoose.model('Comment', commentSchema);