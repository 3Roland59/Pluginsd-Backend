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
  
// router.get('/user-admin/:id')


module.exports = router