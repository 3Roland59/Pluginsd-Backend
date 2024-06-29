const express = require('express')

const router = express.Router()

let data = {
    id : 34,
    username: "0256646334",
    bio: "0256646334",
    role: "0256646334",
    verfified: false
  }
  
router.get('/user-admin', (req, res) => {
    res.render('dashboard', data)
  })


module.exports = router