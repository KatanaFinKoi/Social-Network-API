const router = require('express').Router();
// import { user } from 'pg/lib/defaults';
import getAllUsers from '../../controllers/UserController.js';

userRoutes = () => {
  router.get('/', getAllUsers);
}

export default userRoutes;
