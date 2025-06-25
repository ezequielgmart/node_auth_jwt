import express from 'express'
import jwt from 'jsonwebtoken'
import cookieParser from 'cookie-parser'
import { PORT, SECRET_JWT_KEY } from './config.js'
import { UserRepository } from './user-repository.js'

const app = express()

// template system
app.set("view engine", "ejs")

// middelwares
app.use(express.json())
app.use(cookieParser()) // to save the jwt on the cookies.

app.use((req, res, next) =>{
    const token = req.cookies.access_token
    req.session = { user: null }

    try {
        let data = jwt.verify(token, SECRET_JWT_KEY)
        req.session.user = data
    } catch {}

    next() // go to the next path / middleware 
})

app.get('/', (req, res) => {
    const { user } = req.session
    res.render('index', user)

  
});
// endpoints
app.post('/login', async (req, res) => {

    const { username, password } = req.body

    try {
        const user = await UserRepository.login({ username, password })

        const token = jwt.sign({ id:user._id, username: user.username }, SECRET_JWT_KEY, {
            expiresIn:'1h'
        })

        res
            .cookie('access_token', token, {
                httpOnly: true, // the cookie is only accessible from the server
                secure: process.env.NODE_ENV === 'production', // accessible only with https
                sameSite: 'strict', // accessible from the same domain only
                maxAge: 1000 * 60 * 60 // 1h valid only
            })
            .send(token)
    }catch (error){
        res.status(400).send(error.message)
    }

})

app.post('/register', async (req, res) => {
    const { username, password } = req.body

    console.log({ username, password })

    try {
        const id = await UserRepository.create({ username, password })
        res.send({ id })
    }catch (error){
        res.status(400).send(error.message)
    }
})

app.post('/logout', (req, res) => {
    res.clearCookie('access_token') // Clear the cookie
    res.send("Logged out successfully") // Send a response
})


app.post('/protected', (req, res) => {

    // get the user info from the middleware
    const { user } = req.session

    // verify if its valid
    // YES: go to protected
    // NO: access denied. 
    if (!user) return res.status(403).send("Access Denied")

    res.render('protected', user)    
      
})


app.get('/protected', (req, res) => {
    const { user } = req.session
    res.render('protected', user)

  
});

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`)
  console.log(`http://localhost:${PORT}`)
})
