const mongoose = require('mongoose');
const { Schema } = mongoose;

const postSchema = new Schema({
    title: String,
    imageUrl: String,
    weight: Number,
    size: Number,
    style: String,
    price: Number,
    description: String,
    CreatedAt: { type: Date, default: Date.now },
    bookings: { type: mongoose.SchemaTypes.ObjectId, ref: 'Booking'},
    comments: { type: mongoose.SchemaTypes.ObjectId, ref: 'Comment'},
    shop: { type: mongoose.SchemaTypes.ObjectId, ref: 'Shop'},
    isAvailable: { type: Boolean, default: true},
})

module.exports = mongoose.model('Post', postSchema);