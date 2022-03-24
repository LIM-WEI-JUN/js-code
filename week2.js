const { ObjectID } = require('bson');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = "mongodb+srv://m001-students:m001-mongodb-basics@sandbox.kiupl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
    if (err) {
      console.log(err.message)
      return
    }
    console.log('Connected to MongoDB');
    



    // client.db('myFirstDatabase').collection('customers').insertOne({
    //   name:'John',
    //   age: 30,
    //   location:'New York'
     
    // }).then(result =>{
    //   console.log(result);
    // })

  //  let result = await client.db('myFirstDatabase').collection('customers').insertOne({
  //       name:'Ali',
  //       age: 30,
  //       location:'New York'
  //   })

    // let result1 = await client.db('myFirstDatabase').collection('customers').insertOne({
    //     name:'Ali',
    //     age: 30,
    //     location:'New York'
    // })
    //   let resul2 = await client.db('myFirstDatabase').collection('customers').insertOne({
    //     name:'Ali friend',
    //     friend: result.insertedId
    //     age: 30,
    //     location:'New York'
    // })

    // console.time('insert');   //time for inserting data 
    //   let result =  client.db('myFirstDatabase').collection('customers').insertOne({
    //     name:'Abu',
    //     age: 50,
    //     location:'New York',
    //     isActive: true,
    //     tags: ['tag1','tage2'],
    // })
    // console.timeEnd('insert')

  // let result =  client.db('myFirstDatabase').collection('customers').insertMany(            //await, insert many data by using array
  // [{    
  //       name:'Ali',
  //       age: 30,
  //       location:'New York',
  //       isActive: true,
  //       tags: ['tag1','tage2']
  // },
  // {name:'Alu',
  //  age: 35,
  //  location:'Melaka',
  //  isActive: true,
  //  tags: ['tag1','tage2']
  // }
  // ])

  // client.db('myFirstDatabase').collection('customers').updateOne({     //Update one data to another 
  //  name:'John'
  //  }, {

  //   $set:{
  //     name:"JOHN DOE",
  //     age:35
  //   }
    
  //  }).then(res =>{
  //    console.log(res)
  //  })       

  // client.db('myFirstDatabase').collection('customers').updateOne({     //create a new data if cant find matched data
  //   name:'John'
  //   }, {
 
  //    $set:{
  //      name:"JOHNNY",
  //      age:35
  //    }
     
  //   }, {upsert:true}).then(res =>{
  //     console.log(res)
  //   })   
       
  // client.db('myFirstDatabase').collection('customers').deleteOne({   //delete the data which is matched ,if not the output will be 0
  //   name:'Ali'
  // }).then (result => {
  //   console.log(result.deleteCount);
  // })

// client.db('myFirstDatabase').collection('customers').deleteMany({   //delete the data which is matched 
//     name: 'Abu',
//     age: 50
//   }).then (result => {
//     console.log(result.deleteCount);
//   })




  //   console.log('insert 1 document',result);

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