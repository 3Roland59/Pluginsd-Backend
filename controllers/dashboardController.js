const { PrismaClient } = require('@prisma/client')
const { CompanyRepository } = require('../repository/CompanayRepository')
const prism = new PrismaClient()
const companyRepo = new CompanyRepository()


module.exports.registeredCompanies = async (req, res) => {
    const companies = await prism.company.findMany()
    return res.status(200).json(companies)
}

module.exports.registerCompany = async (req, res) => {
    let { companyName } = req.body
    const companyCheck = await companyRepo.filter(companyName, req.user.userId)

    if (companyCheck) return res.status(409).json(
        {message:"Company with such name already exist"}
    )

    const company = await companyRepo.createCompany(companyName, req.user.userId)

    return res.status(201).json({message:"Company Created", company})
}