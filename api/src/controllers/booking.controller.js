const Booking = require('../models/booking.model');

const BookingController= {
    getAll: async (req, res) =>{
        const booking = await Booking.find().populate('post');
        res.send(booking);
    },

    getOne: async (req, res) => {
        const { id } = req.params;
        try {
            const booking = await Booking.findById(id);
            res.send(booking);
        } catch (error) {
            res.status(404).send({ message: 'Comment not found' });
        }
    },

    create: async (req, res) => {
        console.log(req.body);
        try {
            const booking = await new Booking(req.body).save();
            // await Category.findByIdAndUpdate(post.category, { $push: { recipes: recipe._id } });
            // const category = await Category.findById(recipe.category);
            // category.recipes.push(recipe._id);
            // await category.save();
            
            res.send(booking);
        } catch (error) {
            console.log(error);
            res.status(400).send({ message: 'Invalid booking data (create)' });
        }
    },
    update: async (req, res) => {
        const { id } = req.params;
        try {
            const booking = await Booking.findByIdAndUpdate(id, req.body)
            res.send(booking);
        } catch (error) {
            res.status(400).send({ message: 'Invalid booking data (update)' });
        }
    },
    delete: async (req, res) => {
        const { id } = req.params;
        try {
            const booking = await Booking.findByIdAndDelete(id);
            res.send(booking);
        } catch (error) {
            res.status(404).send({ message: 'Delete booking not found' });
        }
    }
}

module.exports = BookingController