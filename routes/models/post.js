const MongoClient = require("mongodb").MongoClient;

const PosrSchema = mongodb.Schema({
      title:{
        type:String,
        required:true
        },
        description:{
            type:String,
            required:true
        },
      date:{
          type:Date,
          default:Date.now
      }
}); 

module.exports = mongodb.model('Posts',PostSchema);