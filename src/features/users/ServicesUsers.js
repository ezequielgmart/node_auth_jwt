import { UserRepository } from "./RepositoryUsers.js";

export class UserServices{

    static async register({username, password}) {
    
        const userId = await UserRepository.create({ username, password });

        // return created user.id
        return userId

    }

}
