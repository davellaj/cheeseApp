const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CheeseSchema = new Schema({
	cheese: Array
});

module.exports = mongoose.model('Cheese', CheeseSchema)