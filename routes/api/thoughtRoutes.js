import express from 'express';
import { getAllThoughts, addThought } from '../../controllers/thoughtController.js';

const router = express.Router();

router.get('/', getAllThoughts);
router.post('/', addThought);

  
export default router;




