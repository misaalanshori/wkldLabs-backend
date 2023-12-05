const memberController = require('../controllers/member.controller');
const router = require('express').Router();
const authMiddleware = require('../Middleware/auth.middleware')

router.use('/auth', authMiddleware.authenticateToken)

router.post('/', memberController.create);
router.get('/', authMiddleware.authenticateToken, memberController.findAll);
router.put('/:id', memberController.update);
router.delete('/:id', memberController.delete);
router.get('/:id', memberController.findOne);

module.exports = router;
