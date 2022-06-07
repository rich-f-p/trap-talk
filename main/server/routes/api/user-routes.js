const router = require('express').Router();
const {test} = require('../../controllers/user-controller');

//test http://localhost:3001/api/users/
router.route('/').get(test);

module.exports = router;