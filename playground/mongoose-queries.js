const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// const id = '61e6b8dc13e8066c1da5348711';

// if (!ObjectID.isValid(id)) {
//     console.log('ID not valid');
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//     if (!todo) {
//         return console.log('Id not found')
//     }
//     console.log('Todo by Id', todo);
// }).catch((e) => console.log(e));


User.findById('61e9acf1a023155437906cdf').then((user) => {
    if (!user) {
        return console.log('User not found');
    }
    console.log('Found user by ID', user);
}).catch((e) => console.log(e));



