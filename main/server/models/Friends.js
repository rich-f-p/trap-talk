const { Schema } = require('mongoose');
const userSchema = require('./User');
const conversationSchema = require('./Conversations')

const friendSchema = new Schema({
    username:{ 
        type: String,
        required: true,
        unique: true,
    },
    convo:[conversationSchema],
    request:{
        type: String,
    },
});

module.exports = friendSchema;