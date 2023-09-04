import jwt from 'jsonwebtoken'
const verifyUser = async (req, res, next) => {

    try {
        const token = req.cookies.token
        if (!token) { return res.json({ success: false, message: 'Please Loggin!' }) }

        const verified = jwt.verify(token, "IAMABIZER")
        if (!verified) { return res.json({ success: false, message: 'Invalid Credentials!' }) }

        req.user = verified
        return next()

    }
    catch (error) {
        console.log(error.message)
        return res.json({ success: false, message: 'Server Error. Try Again!' })
    }
}

export default verifyUser