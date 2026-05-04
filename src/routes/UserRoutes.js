import express from 'express';
import { UserController } from '../Controller/UserController.js';

const router = express.Router();
const controller = new UserController();

router.get('/users', (req, res) => controller.getAll(req, res));
router.post('/users', (req, res) => controller.createUser(req, res));
router.put('/users/:id', (req, res) => controller.updateUser(req, res));
router.delete('/users/:id', (req, res) => controller.delete(req, res));

export default router;
