const router = require('express').Router();
const {
    test,
    singleUser,
    createUser,
    login,
    saveFriend,
    addConvo,
} = require('../../controllers/user-controller');
const { authMiddleware} = require('../../utils/auth');
//test http://localhost:3001/api/users/
//router.route('/').get(test);

router.route('/').post(createUser).put(authMiddleware,saveFriend);

router.route('/login').post(login);

router.route('/single').get(singleUser);

router.route('/message').put(addConvo);


module.exports = router;