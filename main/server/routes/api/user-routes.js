const router = require('express').Router();
const {
    test,
    singleUser,
    createUser,
    login,
    saveFriend,
    addConvo,
    allUsers
} = require('../../controllers/user-controller');
const { authMiddleware} = require('../../utils/auth');
//test http://localhost:3001/api/users/
//router.route('/').get(test);

router.route('/').post(createUser);

router.route('/add/:username').put(/*authMiddleware,*/saveFriend);

router.route('/login').post(login);

router.route('/single/:id').get(singleUser);

router.route('/message/:user').put(addConvo);

router.route('/all').get(allUsers);


module.exports = router;