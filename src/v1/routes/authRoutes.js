import { Router } from 'express';
import { login,logout } from '../features/auth/controllers.js'; // Assuming these exist

const router = Router();

router.get('/', login);
router.get('/logout', login);

export default router; // Export the router instance