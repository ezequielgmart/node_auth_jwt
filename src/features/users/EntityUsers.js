
import { Schema } from "../../config/db.js";

// user entity model
/* 
    this is the representaiton of the fields for the user entity. 
    On this way, whenever we need to consult or create new data regarding this 
    model, with are going to use this entityModel
    
*/
export const UserEntityModel = Schema('User', {
    _id: { type: String, required: true},
    username: { type: String, required: true},
    password: { type: String, required: true}
})
