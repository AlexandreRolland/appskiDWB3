const mongoose = require('mongoose');
require('dotenv').config()

module.exports = async () => {
    try {
        const host = process.env.MONGO_HOST;
        const db_port = process.env.MONGO_PORT;
        const password = process.env.MONGO_INITDB_ROOT_PASSWORD;
        const username = process.env.MONGO_INITDB_ROOT_USERNAME;
        mongoose.set('strictQuery', true);
        await mongoose.connect(`mongodb://${username}:${password}@${host}:${db_port}`);
        console.log('Sucess connected to mango')
    } catch (error) {
        console.log(error);
    }
};