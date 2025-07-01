import { Router } from 'express';
import { register } from '../../ControllersUsers.js'; 

const router = Router();

router.post('/register', register);

export default router; // Export the router instance