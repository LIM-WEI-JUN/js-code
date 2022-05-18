const MongoClient = require("mongodb").MongoClient;
const User = require("./user");
const uri = "mongodb+srv://m001-students:m001-mongodb-basics@sandbox.kiupl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
MongoClient.connect( 
	uri, { useNewUrlParser: true }
).catch(err => {
	console.error(err.stack)
	process.exit(1)
}).then(async client => {
	console.log('Connected to MongoDB');
	User.injectDB(client);
});

 

//const { ObjectID } = require('bson');
//const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
//const uri = "mongodb+srv://m001-students:m001-mongodb-basics@sandbox.kiupl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
//const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
//client.connect(err => {
   // if (err) {
     // console.log(err.message)
     // return
   // }
  //  console.log('Connected to MongoDB');

