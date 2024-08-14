const { User } = require('../models/userModel')

class UserRepository {
    constructor() {
        this.user = User
    }

    async createUser(email, username, password) {
        const newUser = await new this.user(
            {
                email: email,
                username: username,
                password: password
            }
        )
        await newUser.save();

        return newUser;
    }

    async getUser(email) {
        return await this.user.findOne({
            email: email
        }, 'username email password')
    }

};

module.exports.UserRepository = UserRepository;