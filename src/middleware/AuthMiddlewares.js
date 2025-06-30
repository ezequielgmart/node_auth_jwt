// dependencies
import jwt from 'jsonwebtoken'

// env variables
import { SECRET_JWT_KEY } from '../config/index.js'


export class AuthMiddleware{

    static verifyJWToken (req){
        
        const token = req.cookies.access_token
        req.session = { user: null }
        try {
            let data = jwt.verify(token, SECRET_JWT_KEY)
            req.session.user = data
        } catch {}
    }
}



