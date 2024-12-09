const router = require('express').Router();
import { getAllUsers } from '../../controllers/userController';

// GET /api/users
router.get('/', getAllUsers);

export default router;
