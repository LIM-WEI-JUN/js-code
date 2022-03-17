const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://m001-students:m001-mongodb-basics@sandbox.kiupl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
    if (err) {
      console.log(err.message)
      return
    }
    console.log('Connected to MongoDB');

      //   client.db().admin().listDatabases().then(result => {
      //     console.log(result); //show all databases 
      //  })

      //   client.db().admin().listDatabases().then(result => {
      //      console.log(result['databases']); 
      //  })

    //   client.db().admin().listDatabases().then(result => {
    //    console.log(result['databases'][7]); //show the databases of the given number
    //  })

      // client.db().admin().listDatabases().then(result => {
      //      console.log(result['databases'][7]['name']); //show the name of the databases which at 7th position
      // })

    
    //client.db('sample_training').listCollections().toArray().then(result =>
    //console.log(result)); //show collection of the sample_training
      //})//


     //  client.db('sample_training').listCollections().toArray().then(result =>
     //console.log(result[4])); //show the no. 4 collection of the sample_training
      //})//

    // client.db('sample_training').collection('zips').find({'state':'NY'}).toArray().then(result => {
    //  console.log (result)//show the result of state=NY in collections zips
    //  })
});