//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');     //Object Destructuring

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db) => {
    if(err) {
       return console.log('Unable to connect to MongoDB Server!');
    }
    console.log('Connected to MongoDB Server.');

    //deleteMany
    // db.collection('Todos').deleteMany({text: 'Eat Lunch'}).then((result)=>{
    //     console.log(result);
    // });

    //deleteOne
    // db.collection('Todos').deleteOne({text: 'Eat Lunch'}).then((result) => {
    //     console.log(result);
    // });

    //findOneAndDelete
    // db.collection('Todos').findOneAndDelete({text: 'Eat Lunch'}).then((result) => {
    //     console.log(result);
    // });

    // db.collection('Users').deleteMany({name: 'Mayank'}).then((result) => {
    //     console.log(result);
    // });

    db.collection('Users').findOneAndDelete({_id: new ObjectID("5afc0536d878e80530a0c59b")}).then((result) => {
        console.log(JSON.stringify(result, undefined, 2));
    });

    //db.close();
});