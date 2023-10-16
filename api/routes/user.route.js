import express from 'express';
import { deleteUser, test, updateUser } from '../controllers/user.controller.js';
import { verityToken } from '../utils/verifyUser.js';

const router = express.Router();

router.get('/', test);
router.post('/update/:id', verityToken, updateUser);
router.delete('/delete/:id', verityToken, deleteUser);

export default router;
