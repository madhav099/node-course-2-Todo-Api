//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');     //Object Destructuring

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db) => {
    if(err) {
       return console.log('Unable to connect to MongoDB Server!');
    }
    console.log('Connected to MongoDB Server.');

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID("5afcc8258dbf42a55ebe4c2a")
    // }, {
    //     $set: {
    //         text: 'You are what You are!'
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result, undefined, 2);
    // });

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID("5afc04d5ec51a725145f34bf")
    }, {
        $set: {
            name: 'Madhav'
        },
        $inc: {
            age: 2
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    })

    //db.close();
});