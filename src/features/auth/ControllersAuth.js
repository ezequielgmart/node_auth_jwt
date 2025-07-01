import { AuthServices } from "./ServicesAuth.js";
import { Utils } from "../../utils/AuthTokens.js";

export async function login(req, res) {

    try {

        const { username, password } = req.body; // Destructure from req.body

        const user = await AuthServices.login({ username, password });
        const token = Utils.createToken(user)

        res
            .cookie('access_token', token, {
                httpOnly: true, // the cookie is only accessible from the server
                secure: process.env.NODE_ENV === 'production', // accessible only with https
                sameSite: 'strict', // accessible from the same domain only
                maxAge: 1000 * 60 * 60 // 1h valid only
            })
            .send(token)
    

    } catch (error) {
        res.status(400).json({ message: "An error has occured" }); // Send error message from validation
    }

}
    
export function logout (req, res){
    
    const response = AuthServices.logout(res);

    if (response){
        res.send(200)
    }

} 

