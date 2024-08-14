const { loginSchema, signUpSchema } = require('../validations/accountValidators');
const { PrismaClient } = require('@prisma/client')
const { generateJwt, validatePassword, hashPassword } = require('../utils/authentication')
const { UserRepository } = require('../repository/UserRepository');
const { getUsername, sendEmail } = require('../utils/utils');
const userRepo = new UserRepository();


const registrationController = async (req, res) => {
    try {

        const {error} = loginSchema.validate(req.body)

        if (error) {
             return res.status(400).json({ message: error })
        }

        var { email, password } = req.body

        // if (!email || !password) {
        //     return res.status(400).json({ message: "Please inputs are required" })
        // }
        const hashedPassword = await hashPassword(password)

        // check if user exists
        const checkUser = await userRepo.getUser(email)

        if (checkUser) return res.status(409).json(
            { message: "User with such email already exists" }
        )
        let username = getUsername(email);
        const user = await userRepo.createUser(email, username, hashedPassword)

        sendEmail()
        return res.status(201).json({ message: "User created sucessfully", user })
    } catch (error) {
        console.error(error)
        return res.status(500).json({ message: "Server if down at the moment" })
    }
}
module.exports.registrationController = registrationController



const loginController = async (req, res) => {
    try {
        var { email, password } = req.body

        if (!email || !password) {
            return res.status(400).json({ message: "Please inputs are required" })
        }
        const user = await userRepo.getUser(email)

        if (!user) {
            return res.status(401).json({ message: "Credentials invalid" })
        }
        const authPassword = await validatePassword(password, user.password)

        if (!authPassword) {
            return res.status(401).json({ message: "Password invalid" })
        }

        const token = generateJwt(user);
        const userData = {
            _id: user._id,
            username: user.username,
            email: user.email
        }
        return res.status(200).json({ message: "Details exists", data: userData, token });

    } catch (error) {
        console.error(error)
        return res.status(500).json({ message: "Server if down at the moment" })
    }
}
module.exports.loginController = loginController;


const userProfileController = async (req, res) => {
    const user = req.user
    return res.status(200).json(user)
}

module.exports.userProfileController = userProfileController