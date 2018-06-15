var mongoose = require('mongoose');

var User = mongoose.model('user',{
    name: {
        type: String,
        minlength: 1,
        required: true,
        trim: true
    },
    age: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        default: null,
        required: true
    }
});

module.exports = {User};