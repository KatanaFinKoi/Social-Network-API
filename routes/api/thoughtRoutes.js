const router = express.Router();
import getAllThoughts from '../../controllers/thoughtController.js';
import express from 'express';

const thoughtRoutes = (router) => {
    router.get('/', getAllThoughts);
  };
  
export default thoughtRoutes;




