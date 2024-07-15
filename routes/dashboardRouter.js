const express = require('express')
const {registeredCompanies, registerCompany} = require('../controllers/dashboardController')
const { verifyJwt } = require('../middlewares/authMiddlewares')


const router = express.Router()

router.get('/registered-companies/', verifyJwt, registeredCompanies)
router.get('/registered-companies/:companyId/', (req, res) => {res.status(200).json({message:`company ob ${req.params.companyId}`})})

router.post('/register-company', registerCompany)


module.exports = router