const { faker } = require('@faker-js/faker');
const randomName = faker.name.findName(); // Rowan Nikolaus
const randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
const randomPhoneNumber = faker.phone.phoneNumber(); // (279) 329-8663 x30233
const randomimage = faker.image.avatar()
const bcrypt = require("bcryptjs")
var a;

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
    console.log ("name:",randomName,"\nEmail:",randomEmail, "\nPhone Number:",randomPhoneNumber,"\nImage:",randomimage,"\nPassword:", a);
    client.db('FakeAccount').collection('RandomData').insertOne({
      Name:randomName,
       Email: randomEmail,
       PhoneNumber: randomPhoneNumber,
       EncryptedPassword: a
    }).then(result =>{
       console.log(result);
     }) 
  }); 
  const password = "mypass123"
  const saltRounds = 10 
  bcrypt.genSalt(saltRounds, function (saltError, salt) {
    if (saltError) {
      throw saltError
    } else {
      bcrypt.hash(password, salt, function(hashError, hash) {
        if (hashError) {
          throw hashError
        } else {
          a=hash
          //$2a$10$FEBywZh8u9M0Cec/0mWep.1kXrwKeiWDba6tdKvDfEBjyePJnDT7K
        }
      })
    }
  }) 
  