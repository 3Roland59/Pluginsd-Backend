const express = require('express')
const { PrismaClient } = require('@prisma/client')
// import { PrismaClient } from '@prisma/client'

const prism = new PrismaClient()
const router = express.Router()

let data = {
    id : 34,
    username: "0256646334",
    bio: "0256646334",
    role: "0256646334",
    verfified: false,
  }
  
router.get('/user-admin/:id', async (req, res) => {
    var id = parseInt(req.params.id)
    const getUser = await prism.user.findUnique(
      {where: {id},
      select:{
        email: true
      }
    }
    )
    data.user = getUser
    // const registeredNumbers = await prism.registeredNumbers.findMany()
    console.log(` user: ${getUser}`)
    res.render('dashboard', data)
  })


module.exports = router