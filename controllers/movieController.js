//var movieData = require('./movieData');

var dbService = require('../services/dbService');

exports.getAllMovies = function(req,res){
	//return res.json(movieData);

	dbService.database.collection("movies").find({}).toArray(function(err,result){
		if(err)
			console.log("error",err);
		else {
			console.log(result);
			res.json(result);
		}
	})
};

exports.addNewMovies = function(req,res){

	var formData = req.body;
	console.log(formData);
	dbService.database.collection("movies").insert(formData, function(err,response){
		if(err)
		{
			return res.json({ "isSuccess":false});
		}
		else{
					console.log("response" ,response);
					return res.json({"isSuccess":true});
		}
	});
};

exports.getMovie = function(req,res){

   // var url = require('url');
   console.log("req params",req.params.movieName);

var mName = req.params.movieName;

	dbService.database.collection("movies").find({"name":mName}).toArray(function(err,result){
		if(err)
			console.log("Error",err);
		else
		{
			console.log(result);
			return res.json(result);
		}
	})
}