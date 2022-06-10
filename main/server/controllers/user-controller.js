const { User } = require('../models');
const {myToken} = require('../utils/auth')

module.exports = {
    async test(req,res){
        res.status(200).json('test good')
    },
    async singleUser({user, params}, res){
        const foundUser = await User.findOne({
            $or: [{ _id: user ? user._id : params.id }, { username: params.username }],
          });
          if (!foundUser) {
            return res.status(400).json({ message: 'invalid id!' });
          }
          res.status(200).json(foundUser);
    },
    async createUser({ body }, res) {
        const user = await User.create(body);
        if (!user) {
          return res.status(400).json({ message: 'user not created' });
        }
        const token = myToken(user);
        res.status(200).json({ token, user });
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
    async saveFriend({user,body, params}, res){
        try{
            const addfriend = await User.findOneAndUpdate(
                {$or: [{ _id: user ? user._id : params.id }, { username: params.username }]},
                {$addToSet: {friends:body}},
                {new: true}
            );
            return res.status(200).json(addfriend.friends);
        }catch(err){
            console.log(err);
            return res.status(400).json(err);
        }
    },
    async addConvo({user, body, params}, res){
        try{
            const updateCon = await User.findOneAndUpdate(
                {$or: [{ _id: user ? user._id : params.id }, {username:params.user, "friends._id":params._id }]},
                {$addToSet: {"friends.$.convo": body}},
                {new: true}
            );
            return res.json(updateCon);
        }catch(err){
            console.log(err);
            return res.status(400).json(err);
        }
    },
    async allUsers(req,res){
        const user = await User.find();
        if (!user){
            return res.status(400).json({message:'no users'});
        }
        res.status(200).json(user);
    }
}