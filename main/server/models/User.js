const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');
const friendSchema = require('./Friends');

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

  userSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
  };

userSchema.virtual('friendCount').get(function(){
    if(this.friends.length !== undefined){
    return this.friends.length;
    }else{
        return 'no count'
    }
});


const User = model('User', userSchema);


module.exports = User;