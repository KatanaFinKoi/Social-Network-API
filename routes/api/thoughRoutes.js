const router = require('express').Router();
import { getAllThoughts } from '../../controllers/thoughtController.js';


router.get('/', getAllThoughts);

export default router;
