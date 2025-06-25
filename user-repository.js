
import crypto from "node:crypto";

import dbLocal from "db-local";
import bcrypt from "bcrypt";

import { SALT_ROUNDS } from "./config.js";

const { Schema } = new dbLocal({ path: './db'})

const User = Schema('User', {
    _id: { type: String, required: true},
    username: { type: String, required: true},
    password: { type: String, required: true}
})

export class UserRepository{
    static async create ({ username, password }){
        // validations
        Validation.username(username)
        Validation.password(password)
            
        // 2. asegurar username doesn't exist already
        const user = User.findOne({ username })
        if (user) throw new Error("Username already exists")

        const id = crypto.randomUUID()
        
        //  3. encrypt the password  
        const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS)

        User.create({
            _id:id,
            username,
            password:hashedPassword
        }).save()

        return id

    }

    static async login ({ username, password }){
        
        // validations
        Validation.username(username)
        Validation.password(password)

        const user = User.findOne({ username })

        if (!user) throw new Error('username does not exist')

        const isValid = await bcrypt.compare(password, user.password)     

        
        if (!isValid) throw new Error('Incorrect password')

            // a fancy way to avoid present certaints fields on the front end
        const { password: _, ...publicUser } = user

        return user      

    }
}

class Validation { 
    static username (username){ 
        // 1. validar username (opcional: usar zod)
        if (typeof username !== 'string') throw new Error('Username must be a string')
        
        if(username.length < 3) throw new Error('Username must be at least 3 characters long')
    }

    static password (password){
        
        if (typeof password !== 'string') throw new Error('password must be a string') 
            
        if(password.length < 6) throw new Error('password must be at least 6 characters long')
           
    }
}