const memberController = require('../controllers/member.controller');
const router = require('express').Router();

router.post('/', memberController.create);
router.get('/', memberController.findAll);
router.put('/:id', memberController.update);
router.delete('/:id', memberController.delete);
router.get('/:id', memberController.findOne);

module.exports = router;
