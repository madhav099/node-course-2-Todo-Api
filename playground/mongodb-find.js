//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');     //Object Destructuring

const port = process.env.PORT || 3000;

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db) => {
    if(err) {
       return console.log('Unable to connect to MongoDB Server!');
    }
    console.log('Connected to MongoDB Server.');

    // db.collection('Todos').find({
    //     _id: new ObjectID('5afcc8258dbf42a55ebe4c2a')
    // }).toArray().then((docs) => {
    //     console.log('Todos');
    //     var data = JSON.stringify(docs, undefined, 2);
    //     console.log(data);
    // }, (err) => {
    //     console.log('Unable to fetch todos',err);
    // });

    // db.collection('Todos').find().count().then((count) => {
    //     console.log(`Todos count: ${count}`);
    // }, (err) => {
    //     console.log('Unable to fetch todos',err);
    // });

    // Task->
    db.collection('Users').find({name: 'Jenn'}).toArray().then((docs) => {
        console.log('Users');
        var data = JSON.stringify(docs, undefined, 2);
        console.log(data);
    }, (err) => {
        console.log('Unable to fetch todos',err);
    });

    //db.close();
});