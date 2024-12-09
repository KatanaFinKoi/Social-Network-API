const router = require('express').Router();
import { getAllThoughts } from '../../controllers/thoughtController';

// GET /api/thoughts
router.get('/', getAllThoughts);

export default router;
