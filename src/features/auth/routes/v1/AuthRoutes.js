import { Router } from 'express';
import { login,logout } from '../../ControllersAuth.js'; 

const router = Router();

router.post('/', login);
router.post('/logout', logout);

export default router; // Export the router instance