const { ObjectID } = require('bson');
const { MongoClient, ServerApiVersion, ObjectId,ISODate } = require('mongodb');
const uri = "mongodb+srv://m001-students:m001-mongodb-basics@sandbox.kiupl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(async err => {
    if (err) {
      console.log(err.message)
      return
    }
    console.log('Connected to MongoDB');
 
    let result = await client.db('sample_training').collection('trips').find(   //find all documents that have end station name : West Themes sT
    {  "start time":{$gt:ISODate('2016-01-01')}}
    ).toArray()

    console.log(result)

    
    // let result = await client.db('sample_training').collection('trips').find(   //find all documents that have end station name : West Themes sT
    // {  "end station name":"West Thames St"}
    // ).toArray()

    // console.log(result)

    // let result = await client.db('sample_training').collection('trips').find(   //find all documents that DONT HAVE end station name : West Themes sT
    // {  "end station name":{$ne:"West Thames St"}}
    // ).toArray()

    // console.log(result)

    // let result = await client.db('sample_training').collection('trips').find(   //find all documents that have tripduration GREATER THAN 1000
    // {  "tripduration":{$gt:1000}}
    // ).toArray()

    // console.log(result)

    // let result = await client.db('sample_training').collection('trips').find(   //find the document that match the objectId. NEED TO PUT objectid infront of the number as it is in the bson.
    // {_id: ObjectId("572bb8222b288919b68ac0cd")}
    // ).toArray()

    // console.log(result)

    // let result = await client.db('sample_training').collection('trips').find(   //find all documents that have end station name : West Themes sT
    // {  "end station name":"West Thames St"}
    // ).toArray() //22min

    // console.log(result)
    
    // let result = await client.db('sample_training').collection('trips').find(   //find all documents that match the two conditions
    // {  "tripduration":{$gt:600},
    //    "start station name": 'Suffolk St & Stanton St' 
    // }
    // ).toArray()

    // console.log(result)

    // let result = await client.db('sample_training').collection('trips').find(   //find all documents that have tripduration=600 or tripduration=1000
    // {  "tripduration":{$in: [600, 1000]},
    // }
    // ).toArray()

    // console.log(result)


    // let result = await client.db('sample_training').collection('trips').find(        //and operator need to infront of the field and it ill find the document which is statisfied for both condition
    //     { $and: [                                                                     //and,or operator NEED TO PUT IN FRONT
    //       { "tripduration": { $gt: 600 }},
    //       { "tripduration": { $lt: 1000 } }
    //     ]
    //   }).toArray()
    //   console.log(result)

    // let result = await client.db('sample_training').collection('trips').find(   //the not operator need to put in the nested field and it il find the document which is less than 600
    // {  "tripduration":{$not:{$gt:1000}},
    // }
    // ).toArray()

    // console.log(result)

    // let result = await client.db('sample_training').collection('trips').find(   //got  little bit problem   
    // {  tags:{$elemMatch:{$eq:'lion'}}
    // }
    // ).toArray()

    // console.log(result)


    // let result = await client.db('week4').collection('posts').insertOne(  insert a new database named week4 and has a collection named posts   
    // { title:'hello',
    //    likes: 0
    // }
    // )
    // console.log(result)

      // let result = await client.db('week4').collection('posts').insertOne(  insert a new database named week4 and has a collection named posts   
    // { title:'hello',
    //    likes: 0
    // }
    // )
    // console.log(result)

    // let result = await client.db('week4').collection('posts').find(   //find the document that match the objectId. NEED TO PUT objectid infront of the number as it is in the bson.
    // {_id: ObjectId("6246baddbcb5ab65f9816d5f")}
    // ).toArray()
    // console.log(result)

    // await client.db('week4').collection('posts').updateOne(   // the document will be increased with the value given
    // {
    //     _id: ObjectId("6246baddbcb5ab65f9816d5f")
    // },
    // {
    //    $inc:{likes : 1}//can also used with negative number 
    // }
    // )

    // await client.db('week4').collection('posts').updateOne(   
    // {
    //     _id: ObjectId("6246baddbcb5ab65f9816d5f")
    // },
    // {
    //    $max:{likes : 1000}//the likes value will inreased to ma value if it is lower than 1000
    // }
    // )

    // await client.db('week4').collection('posts').updateOne(   
    //     {
    //         _id: ObjectId("6246baddbcb5ab65f9816d5f")
    //     },
    //     {
    //        $unset:{likes : 0}//the likes will be unset
    //     }
    //     )
    
    // await client.db('week4').collection('posts').updateOne(   
    //   {
    //      _id: ObjectId("6246baddbcb5ab65f9816d5f")
    //   },
    //   {
    //      $set:{likes : 0}//the likes will be set
    //   }
    // )

    // await client.db('week4').collection('posts').updateOne(   
    //     {
    //        _id: ObjectId("6246baddbcb5ab65f9816d5f")
    //     },
    //     {
    //        $push:{comments : "hi"}//the likes will be unset
    //     }
    //   )

    // await client.db('week4').collection('posts').updateOne(   
    //     {
    //        _id: ObjectId("6246baddbcb5ab65f9816d5f")
    //     },
    //     {
    //        $addToSet:{comments : "Wilson"}//the likes will be unset
    //     }
    //   )

    // await client.db('week4').collection('posts').updateOne(   
    //     {
    //        _id: ObjectId("6246baddbcb5ab65f9816d5f")
    //     },
    //     {
    //        $pop:{comments : -1}// delete the first element in the  array while 1 is used to delete the last element in the array
    //     }
    //   )


    //  let result = await client.db('week4').collection('posts').find(   //find the document that match the objectId. NEED TO PUT objectid infront of the number as it is in the bson.
    // {_id: ObjectId("6246baddbcb5ab65f9816d5f")}
    // )
    // console.log(result)
    // client.db('sample_training').collection('companies').find({
    //     $and: [
    //         {
    //             $or: [{founded_year: 2004}, {founded_month: 10}]
    //         },
    //         {
    //             $or: [{category_code: "web"}, {category_code: "social"}]
    //         }
    //     ]
    // });
    // })



});        