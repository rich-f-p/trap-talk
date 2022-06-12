const router = require('express').Router();
const {
    test,
    singleUser,
    createUser,
    login,
    saveFriend,
    addConvo,
    allUsers,
    getConvo
} = require('../../controllers/user-controller');
const { authMiddleware} = require('../../utils/auth');
//test http://localhost:3001/api/users/
//router.route('/').get(test);

router.route('/').post(createUser);

router.route('/add/:username').put(/*authMiddleware,*/saveFriend);

router.route('/login').post(login);

//both of these get a single user 
router.route('/single/:id').get(singleUser);

router.route('/search/:username').get(singleUser)
//above gets a user by id
router.route('/me').get(authMiddleware, singleUser);
// gets a user through token

router.route('/message/:user/:_id/').put(addConvo).get(getConvo);

router.route('/all').get(allUsers);


module.exports = router;