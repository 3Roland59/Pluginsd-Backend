const nodemailer = require('nodemailer')
const MONGO_DB_CONNECTION_STRING = process.env.MONGO_DB_CONNECTION_STRING
const EMAIL = process.env.EMAIL

const getUsername = (email) => {
    let username = email.split('@')[0]
    return username
}


let tranporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "ethenatx@gmail.com",
        password: "cswm yoat smdd uviz"
    }
})

const sendEmail = (to, subject, message) => {
    let mailOptions = {
        from: "ethenatx@gmail.com",
        to: "korleyethan@gmail.com",
        html: '<h1>Welcome</h1><p>That was easy!</p>'
    }

    tranporter.sendMail(mailOptions, (error, info) => {
        if (error){
            console.log(error)
        }
        else {
            console.log(info)
        }
    })
}

module.exports = {
    getUsername,
    sendEmail,
    MONGO_DB_CONNECTION_STRING,
};