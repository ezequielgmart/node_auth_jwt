// dependencies
import express from 'express';
import cookieParser from 'cookie-parser';

// routes
import v1AuthRouter from './features/auth/routes/v1/AuthRoutes.js'; 
import v1UsersRouter from './features/users/routes/v1/UserRoutes.js'; 

// middleware functions
import { AuthMiddleware } from './middleware/AuthMiddlewares.js';

const app = express();

// Middlewares
app.use(express.json());
app.use(cookieParser());

app.use((req, res, next) =>{

    // verify the token on each HTTP Request
    AuthMiddleware.verifyJWToken(req)
    next() // go to the next path / middleware 

})

// template system
app.set("view engine", "ejs")
app.set('views', './src/views'); 

// --- API Route Versioning ---
app.use('/api/v1/auth', v1AuthRouter); 
app.use('/api/v1/users', v1UsersRouter); 

// --- Routes for the frontend template EJS ---
app.get('/', (req, res) => {
    const { user } = req.session
    res.render('index', user);

});

app.get('/protected', (req, res) => {

    const { user } = req.session
    res.render('protected', user)
  
});


export default app; 