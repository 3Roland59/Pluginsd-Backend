
const express = require('express')

const router = express.Router()


router.get('/register', (req, res) => {
    res.render('signUp')
})

router.get('/login', (req, res) => {
    res.render('login')
})

router.post('/login', (req, res) => {
    console.log(req.body)
    res.redirect('/core/user-admin')
})

module.exports = router