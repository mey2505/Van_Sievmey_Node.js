import express from 'express';
import { UserController } from '../Controller/UserController.js';

const router = express.Router();
const controller = new UserController();

router.get('/', (req, res) => controller.getAll(req, res));
router.post('/', (req, res) => controller.createUser(req, res));
router.put('/:id', (req, res) => controller.updateUser(req, res));
router.delete('/:id', (req, res) => controller.delete(req, res));

export default router;
