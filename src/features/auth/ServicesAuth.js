/*

Here should be the logic since on Controller is there
just for be a conection between the api request and 
the server responses, services are agnostic for the type of request 

*/

import { AuthRepository } from "./RepositoryAuth.js";

export class AuthServices{

    static async login({username, password}) {
    
        const user = await AuthRepository.login({ username, password });
        return user

    }

    static logout(res){
        
        res.clearCookie('access_token') // Clear the cookie
        return true

    }

}
