let mongoose = require('mongoose');

mongoose.promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

// let Todo = mongoose.model('Todo', {
//     text: {
//         type: String,
//         required: true,
//         minlength: 1,
//         trim: true
//     },
//     completed: {
//         type: Boolean,
//         default: false
//     },
//     completedAt: {
//         type: Number,
//         default: null
//     }
// });

// let newTodo2 = new Todo({
//     text: 'Run faster',
//     completed: false
// });

// newTodo2.save().then((doc) => {
//     console.log('Saved todo:' , doc);
// }, (e) => {
//     console.log('Unable to save todo');
// });

let User = mongoose.model('User', {
    email: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
});

let user1 = new User({
    email: 'example@test.com'
});
user1.save().then((doc) => {
    console.log('New user email:', doc);
}, (e) => {
    console.log('Unable to save data', e);
});