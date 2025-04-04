const router = require('express').Router();
const AuthController = require('../controllers/AuthController');

router.get('/', AuthController.read);
router.post('/login', AuthController.login);
router.post('/wallet-login', AuthController.walletLogin);
router.get('/logout', AuthController.logout);

module.exports = router;
