import express from 'express';
import { signin, signup, google } from '../controllers/auth.controller.js';
import { signout } from '../controllers/user.controller.js';

const router = express.Router();

router.post("/signup", signup);
router.post("/signin", signin);
router.post("/google", google);
router.get('/signout', signout);

export default router;