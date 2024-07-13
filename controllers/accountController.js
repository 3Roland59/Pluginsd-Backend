const {PrismaClient} = require('@prisma/client')
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")


const prism = new PrismaClient()

module.exports.registrationController = async (req, res) => {
    try {       
        var { email, password } = req.body

        if (!email || !password){
           return res.status(400).json({message:"Please inputs are required"})
        }
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds)
        // check if user exists

        const user = await prism.user.create({
            data: { 
                "email": email, 
                "password": hashedPassword,
            }
        })
        return res.status(201).json({message:"User created sucessfully", user})
    } catch (error) {
        console.error(error)
        return res.status(500).json({message:"Server if down at the moment"})
    }
}


module.exports.loginController = async (req, res) => {
    try {
        var {email, password} = req.body

        if (!email || !password){
            return res.status(400).json({message:"Please inputs are required"})
         }
        const user = await prism.user.findUnique({where:{email: email}})
        
        if (!user) { 

            return res.status(401).json({message:"Credentials invalid"})
        }
        const checkPassword = await bcrypt.compare(password, user.password)
        if (!checkPassword){
            return res.status(401).json({message:"Password invalid"})
        }
        const token = jwt.sign(
            {userId: user.id, email:user.email},
            process.env.JWT_SECRET_KEY,
            {expiresIn: "1h"}
        )
        return res.status(200).json({message:"Details exists", data:user, token})

    } catch (error) {
        console.error(error)
        return res.status(500).json({message:"Server if down at the moment"})
    }
}