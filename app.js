const express = require('express')
//import express from 'express';
const app = express()
// import supertest from 'supertest'
// const request = supertest("mongodb+srv://m001-students:m001-mongodb-basics@sandbox.kiupl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
const MongoClient = require("mongodb").MongoClient;
const uri = "mongodb+srv://m001-students:m001-mongodb-basics@sandbox.kiupl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
//Import routes
const postsRoute = require('./routes/posts');
// //Middlewares {use for authentication}
// app.use('/posts',()=>{
//     console.log ('this is a middleware running');
// });

app.use('/posts',postsRoute);




//routes
app.get('/',(req,res)=>{
  
    res.send('We are at home');
});

app.get('/posts',(req,res)=>{
  
    res.send('We are at posts');
});

//connect to mongodb
MongoClient.connect( 
	uri, { useNewUrlParser: true },()=>
	console.log('Connected to MongoDB')
	
);

//how to start listeing to the server
app.listen(3000)
