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

userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
      const saltRounds = 10;
      this.password = await bcrypt.hash(this.password, saltRounds);
    }
    next();
  });

userSchema.virtual('convoCount').get(function(){
    if(this.conversations.length !== null){
    return this.conversations.length;
    }else{
        return 'no count'
    }
});


const User = model('User', userSchema);


module.exports = User;