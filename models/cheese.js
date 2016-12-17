const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CheeseSchema = new Schema({
	cheese: [type:String]
});

module.exports = mongoose.model('Cheese', CheeseSchema)