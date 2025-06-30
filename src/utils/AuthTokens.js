import jwt from 'jsonwebtoken'

import {  SECRET_JWT_KEY } from '../config/index.js'

export class Utils { 
    static createToken(user){

    const token = jwt.sign({ id:user._id, username: user.username }, SECRET_JWT_KEY, {
        expiresIn:'1h'
    })

    return token

    }
}
