const majorController = require('../controllers/major.controller');
const router = require('express').Router();

router.post('/', majorController.create);

module.exports = router;