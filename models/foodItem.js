const mongoose=require('mongoose');

const foodItemSchema=new mongoose.Schema({
	title:String, price:Number, Imgurl:String
});

module.exports = mongoose.model('foodItem',foodItemSchema);