
const express = require('express')
const {PrismaClient} = require('@prisma/client')
const router = express.Router()


const prism = new PrismaClient()

router.get('/register', async (req, res) => {

    res.render('signUp')
})

router.get('/login', (req, res) => {
    res.render('login')
})

router.post('/register',  async (req, res) => {
    var { email, password } = req.body

    const user = await prism.user.create({
        data:  { email, password }
    })
    res.render('dashboard', {user})
})

router.post('/login', (req, res) => {
    res.redirect('/core/user-admin')
})

module.exports = router