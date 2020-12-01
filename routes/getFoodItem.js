var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const foodItem=require('../models/foodItem');

mongoose.connect("mongodb://localhost/thumb",{useNewUrlParser: true, useUnifiedTopology: true });
		
router.get('/',function(req, res, next) {
	foodItem.find(function(err,foodItems){
	if(err)
		console.log(err);
	else{
		res.send(foodItems);
	}
});
  	
});

module.exports = router;
