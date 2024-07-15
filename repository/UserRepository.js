const { PrismaClient } = require('@prisma/client')

class UserRepository{
    constructor(){
        this.prisma = new PrismaClient()
        this.user = this.prisma.user
    }

    async createUser(email, password){
        return await this.user.create({
            data: {
                email: email,
                password: password
            }
        })
    }

    async getUser(email){
        return await this.user.findUnique({
            where: {
                email: email
            }
        })
    }

};

module.exports.UserRepository = UserRepository;