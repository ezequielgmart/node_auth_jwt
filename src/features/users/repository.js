
// node:modules / dependencies
import crypto from "node:crypto";
import bcrypt from "bcrypt";

// configs
import { SALT_ROUNDS } from "./src/config/index.js";

// utils 
import { UserValidation } from "../../utils/userValidations.js";

// entity Models
import { UserEntityModel } from "../../models/userEntity.js";

export class UserRepository{

    // register a new user
    static async create ({ username, password }){
        // validations
        UserValidation.username(username)
        UserValidation.password(password)
            
        // 2. asegurar username doesn't exist already
        const user = UserEntityModel.findOne({ username })
        if (user) throw new Error("Username already exists")

        const id = crypto.randomUUID()
        
        //  3. encrypt the password  
        const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS)

        UserEntityModel.create({
            _id:id,
            username,
            password:hashedPassword
        }).save()

        // return created user.id
        return id

    }
    
}