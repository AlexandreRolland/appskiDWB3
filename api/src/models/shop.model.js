const mongoose = require('mongoose');
const { Schema } = mongoose;

const commentSchema = new Schema({
    name: { type: String, required: true },
    post: { type: mongoose.SchemaTypes.ObjectId, ref: 'Post'},
    adresse: { type: String, required: true },
})

module.exports = mongoose.model('Shop', shopSchema);