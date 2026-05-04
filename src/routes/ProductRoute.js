import express from 'express';
import { ProductController } from '../Controller/ProductController.js';

const router = express.Router();
const controller = new ProductController();

router.get('/products', (req, res) => controller.getAll(req, res));
router.post('/products', (req, res) => controller.createProduct(req, res));
router.put('/products/:id', (req, res) => controller.updateProduct(req, res));
router.delete('/products/:id', (req, res) => controller.delete(req, res));

export default router;