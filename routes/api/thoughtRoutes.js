import express from 'express';
import getAllThoughts from '../../controllers/thoughtController.js';

const router = express.Router();

router.get('/', getAllThoughts);

  
export default router;




