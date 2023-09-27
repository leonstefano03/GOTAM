const jwt = require("jsonwebtoken");
const dotenv = require('dotenv')
dotenv.config()

const SECRET = process.env.SECRET

const generateToken = (payload) => {
	const token = jwt.sign({ user: payload }, SECRET, {
		expiresIn: '2d',
	})
	return token
}

const validateToken = (token)=> {
	try {
		return jwt.verify(token, SECRET) 
	} catch (error) {
		console.error('Error validating token:', error)
		return null
	}
}

module.exports = { generateToken, validateToken }
