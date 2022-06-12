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
        const user = await User.findOne({ username: body.username });
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
    async addConvo({user, body, params,}, res){
        try{
            const updateCon = await User.findOneAndUpdate(
                {username:params.user,friends:{"$elemMatch":{"_id":params._id }}},
                {$push: {"friends.$.convo":body}},
                {new:true,select:{friends:{$elemMatch:{'_id': params._id}}}}
            );
            return res.json(updateCon);
        }catch(err){
            console.log(err);
            return res.status(400).json(err);
        }
    },

    async addConvoByUser({user,body,params},res){
        try{
            const updateCon = await User.findOneAndUpdate(
                {username:params.user,friends:{"$elemMatch":{"username":params.friend }}},
                {$push: {"friends.$.convo":body}},
                {new:true,select:{friends:{$elemMatch:{'username': params.friend}}}}
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
    },
    async getConvo({body,params}, res){
        try{
            const grab = await User.find(
                {username: params.user,friends:{"$elemMatch":{"_id":params._id }}},
                {'friends.convo.$': 1, 'friends.username': 1},
            );
            return res.json(grab);
        }catch(err){
            console.log(err);
            return res.status(400).json(err);
        }
    }
}