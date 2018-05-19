//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');     //Object Destructuring

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db) => {
    if(err) {
       return console.log('Unable to connect to MongoDB Server!');
    }
    console.log('Connected to MongoDB Server.');

    

    //db.close();
});