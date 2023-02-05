const mongoose = require('mongoose');
const { Schema } = mongoose;

const bookingSchema = new Schema({
    title: {required: true, type: String},
    phone: {required: true, type: String},
    CreatedAt: { type: Date, default: Date.now },
    post: { type: mongoose.SchemaTypes.ObjectId, ref: 'Post'},
})

module.exports = mongoose.model('Booking', bookingSchema);