const { PrismaClient } = require("@prisma/client");

class CompanyRepository{
    constructor(){
        this.prisma = new PrismaClient
        this.company = this.prisma.company
    }

    async createCompany(companyName, userId){
        const company = await this.company.create({
            data: {
                companyName:companyName,
                managerId: userId
            }
        })
        return company
    }

    async getAllcompanies(){
        return await this.company.findMany()
    }

    async getCompany(companyId){
        try {
            return await this.company.findUnique({
                where:{
                    companyId:companyId
                }
            })   
        } catch (error) {
            return 
        }
    }

    async filter(companyName, userId){
        try {
            const company = await this.company.findUnique({
                where:{
                    companyName: companyName,
                    managerId: userId
                }
            })
            return company? true : false
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports.CompanyRepository = CompanyRepository;