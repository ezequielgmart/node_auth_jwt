
export class UserValidation { 
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