var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

var Todo = mongoose.model('Todo', {
    text: {
        type: String
    },
    completed: {
        type: Boolean
    },
    completedAt: {
        type: Number
    }
});

var newTodo = new Todo({
    text: 'Cook Dinner',
    completed: 'false',
    completedAt: 5
});

newTodo.save().then((doc) => {
    console.log('Saved Todo', doc);
},(e) => {
    console.log('Unable to save Todo');
});

var secondTodo = new Todo({
    text: 'Cook Lunch',
    completed: true,
    completedAt: 2
});

secondTodo.save().then((doc) => {
    console.log(JSON.stringify(doc, undefined, 2));
},(e) => {
    console.log('Unable to Save Data');
});