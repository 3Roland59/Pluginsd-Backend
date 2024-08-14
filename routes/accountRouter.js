const express = require('express')
const {
    registrationController,
    loginController,
    userProfileController
} = require('../controllers/accountController')
const { verifyJwt } = require('../middlewares/authMiddlewares')


const router = express.Router()

router.post('/register', registrationController)
router.post('/login', loginController)
router.get('/profile', verifyJwt,  userProfileController)

module.exports = router