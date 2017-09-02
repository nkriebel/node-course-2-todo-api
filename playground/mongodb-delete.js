// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb'); //destructuring es6 formatting

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // db.collection('Todos').deleteMany({todo:'Eat lunch'}).then((res) => {
    //     console.log(res);
    // }, (err) => {
    //     console.log(err);
    // });

    // db.collection('Todos').deleteOne({todo: 'Eat lunch'}).then((res) => {
    //     console.log(res);
    // });

    // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    //     console.log(result);
    // });

    db.collection('Users').deleteMany({name: 'Jackson', age: 14}).then((res) => {
        console.log(res);
    });
    db.collection('Users').findOneAndDelete({_id: new ObjectID('59a9877c2066b9cab09e24ad')}).then((res) => {
        console.log(res);
    });

    
    // db.close();
});