
//  dependencies
import bcrypt from "bcrypt";

// configs
/* configs files should  be here */

// utils 
import { UserValidation } from "../../utils/UserValidations.js";

// entity Models
import { AuthEntityModel } from "./EntityAuth.js";


export class AuthRepository{

    static async login ({ username, password }){
        
        // validations
        UserValidation.username(username)
        UserValidation.password(password)

        const user = AuthEntityModel.findOne({ username })

        if (!user) throw new Error('400')

        const isValid = await bcrypt.compare(password, user.password)     
        
        if (!isValid) throw new Error('400')

        // a fancy way to avoid present certaints fields on the front end
        const { password: _, ...publicUser } = user

        return user      

    }
}
