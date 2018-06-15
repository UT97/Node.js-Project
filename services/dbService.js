var MongoClient = require('mongodb').MongoClient;

var dataBaseURL = "mongodb://dbadmin:admin123@ds259070.mlab.com:59070/projectordb";

module.exports = {
	createConnection: function(){
		console.log("inside createConnection");
		MongoClient.connect(dataBaseURL,(err,dBase) =>{
			if(err){
				console.log("error",err);
			}
			else
			{
				module.exports.database = dBase.db("projectordb");
			}
		});
	}
}