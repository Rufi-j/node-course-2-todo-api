// const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
       return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
    //     console.log(result);
    // })

        // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
        //     console.log(result);
        // });

        // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
        //     console.log(result);
        // })

            // db.collection('Users').deleteMany({name: 'Rufai'}).then((result) => {
            //     console.log(result);
            // })

            db.collection('Users').findOneAndDelete({_id: new ObjectID('61c7bc7f470719379cc31648')}).then((result) => {
                console.log(result);
            })

   // db.close();
});