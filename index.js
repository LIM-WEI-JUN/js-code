// import express from 'express';
// //const express = require ('express'); //first line and second lne are equivalent\
// import bodyParser from 'body-parser';

// const app = express();
// const PORT = 5000;

// app.use(bodyParser.json()); 

// app.get('/',(req,res)=>{
//     console.log('[test]');
//     res.send('Hello from homepage.');
// })
// app.listen(PORT,() => console.log (`Server runing on port: http://localhost:${PORT}`));

const express = require('express') ;
const router = express.Router();
router.get('/',(req,res)=>{
    res.send('we are on posts');
});

router.get('/specific',(req,res)=>{
    res.send('Specific posts');
});

module.exports = router;