const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const friendSchema = require('./Friends');
const conversationSchema = require('./Conversations');

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
        },
        email:{
            type: String,
            required: true,
            unique: true,
            match: [],
        },
        password:{
            type: String,
            required: true,
        },
        friends: [friendSchema],
        conversations: [conversationSchema],
    },
    {
        toJSON: {
            virtuals: true,
        },
    }
);



const User = model('User', userSchema);


module.exports = User;