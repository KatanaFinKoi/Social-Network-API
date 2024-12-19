import express from 'express';
import { getAllThoughts, addThought, updateThought, deleteThought, addReaction, updateReaction, deleteReaction } from '../../controllers/thoughtController.js';

const router = express.Router();

router.get('/', getAllThoughts);
router.post('/', addThought);
router.put('/:id', updateThought);
router.delete('/:id', deleteThought);
router.post('/:thoughtId/reactions', addReaction);
router.put('/:thoughtId/reactions/:reactionId', updateReaction);
router.delete('/:thoughtId/reactions/:reactionId', deleteReaction);

  
export default router;




