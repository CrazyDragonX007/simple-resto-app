const mongoose = require('mongoose');
const foodItem=require('../models/foodItem');

mongoose.connect("mongodb://localhost/thumb",{useNewUrlParser: true, useUnifiedTopology: true });

const fd=[
	{title:'Pizza', price: 1500,Imgurl:'https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'},
	{title:'Noodles',price: 900,Imgurl:'https://images.pexels.com/photos/2456434/pexels-photo-2456434.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'},
	{title:'White Sauce Pasta',price: 1200,Imgurl:'https://images.pexels.com/photos/1487511/pexels-photo-1487511.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'},
	{title:'Red Pasta',price: 1300,Imgurl:'https://images.pexels.com/photos/1460872/pexels-photo-1460872.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'},
	{title:'Burger',price: 650,Imgurl:'https://images.pexels.com/photos/1600727/pexels-photo-1600727.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'},
	{title:'Salad',price: 500,Imgurl:'https://images.pexels.com/photos/1213710/pexels-photo-1213710.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}
];
foodItem.insertMany(fd,function(err,fds){
	if(err){
		console.log(err);
	}
})
