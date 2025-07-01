import { UserServices } from "./ServicesUsers.js";

export async function register(req, res) {

    const { username, password } = req.body

    try {
        const id = await UserServices.register({ username, password })
        res.send({ id })
    }catch (error){
        res.status(400).send(error.message)
    }

}
    
