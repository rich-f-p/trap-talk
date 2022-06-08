const { Schema } = require('mongoose');
const userSchema = require('./User');

const friendSchema = new Schema({
    username: [userSchema],
    request:{
        type: String,
    },
});

module.exports = friendSchema;