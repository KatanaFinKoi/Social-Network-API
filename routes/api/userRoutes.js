import express from 'express';
import getAllUsers from '../../controllers/userController.js';

const router = express.Router();

const userRoutes = (router) => {
  router.get('/', getAllUsers);
};

export default userRoutes;
