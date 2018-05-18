//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');     //Object Destructuring


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db) => {
    if(err) {
       return console.log('Unable to connect to MongoDB Server!');
    }
    console.log('Connected to MongoDB Server.');

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, result) => {
    //     if(err) {
    //         return console.log('Unable to insert todo', err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    db.collection('Users').insertOne({
        name: 'Mayank',
        age: 22,
        location: 'New Delhi'
    }, (err, result) => {
        if(err) {
            console.log('Unable to insert Users',err);
        }
        console.log(JSON.stringify(result.ops, undefined, 2));
        // console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
    });

    db.close();
});