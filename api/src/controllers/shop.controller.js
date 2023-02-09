const Shop = require('../models/shop.model');

const ShopController= {
    getAll: async (req, res) =>{
        const shop = await Shop.find().populate('post');
        res.send(shop);
    },

    getOne: async (req, res) => {
        const { id } = req.params;
        try {
            const shop = await Shop.findById(id);
            res.send(shop);
        } catch (error) {
            res.status(404).send({ message: 'Shop not found' });
        }
    },

    create: async (req, res) => {
        console.log(req.body);
        try {
            const shop = await new Shop(req.body).save();
            // await Category.findByIdAndUpdate(post.category, { $push: { recipes: recipe._id } });
            // const category = await Category.findById(recipe.category);
            // category.recipes.push(recipe._id);
            // await category.save();
            
            res.send(shop);
        } catch (error) {
            console.log(error);
            res.status(400).send({ message: 'Invalid shop data (create)' });
        }
    },
    update: async (req, res) => {
        const { id } = req.params;
        try {
            const shop = await Shop.findByIdAndUpdate(id, req.body)
            res.send(shop);
        } catch (error) {
            res.status(400).send({ message: 'Invalid shop data (update)' });
        }
    },
    delete: async (req, res) => {
        const { id } = req.params;
        try {
            const shop = await Shop.findByIdAndDelete(id);
            res.send(shop);
        } catch (error) {
            res.status(404).send({ message: 'Delete shop not found' });
        }
    }
}

module.exports = ShopController