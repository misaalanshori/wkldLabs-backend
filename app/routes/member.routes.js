const memberController = require('../controllers/member.controller');
const router = require('express').Router();

router.post('/', memberController.create);
router.get('/', memberController.findAll);

module.exports = router;
