const { User } = require('../models');
const {myToken} = require('../utils/auth')

module.exports = {
    async test(req,res){
        res.json('test good')
    },
    async singleUser({user, params}, res){
        const foundUser = await User.findOne({
            $or: [{ _id: user ? user._id : params.id }, { username: params.username }],
          });
          if (!foundUser) {
            return res.status(400).json({ message: 'invalid id!' });
          }
          res.json(foundUser);
    },
    async createUser({ body }, res) {
        const user = await User.create(body);
        if (!user) {
          return res.status(400).json({ message: 'user not created' });
        }
        const token = myToken(user);
        res.json({ token, user });
    },
    async login({ body }, res){
        const user = await User.findOne({$or: [{ username: body.username },{ email: body.email }]});
        if(!user){
            return res.status(400).json({ message: 'invalid login'});
        }
        const correctPass = await user.isCorrectPassword(body.password);
        if(!correctPass){
            return res.status(400).json({message: 'wrong password'});
        }
        const token = myToken(user);
        res.json({token, user});
    },
    async saveFriend({user, body}, res){
        try{
            const addfriend = await User.findOneAndUpdate(
                {_id: user._id},
                {$addToSet: {friends: body}},
                {new: true}
            );
            return res.json(addfriend);
        }catch(err){
            console.log(err);
            return res.status(400).json(err);
        }
    },
    async addConvo({user, body}, res){
        try{
            const updateCon = await User.findOneAndUpdate(
                {_id: user._id},
                {$addToSet: {conversations: body}},
                {new: true}
            );
            return res.json(updateCon);
        }catch(err){
            console.log(err);
            return res.status(400).json(err);
        }
    }
    
}