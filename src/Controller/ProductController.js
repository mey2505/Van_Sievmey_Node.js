import ProductModel from "../models/ProductModel.js";
import { Backcontroller } from "../Controller/BaseController.js";

export class ProductController extends Backcontroller {

    // Get all products
    getAll = async (req, res) => {
        try {
            const products = await ProductModel.getAll();
            this.success(res, "Products retrieved successfully", products);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    };

    // Find product by ID
    find = async (req, res) => {
        try {
            const { id } = req.params;
            const product = await ProductModel.find(id);

            this.success(res, "Product retrieved successfully", product);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    };

    // Create product
    createProduct = async (req, res) => {
        const { name, price, stock } = req.body;

        if (!name || !price || !stock) {
            return res.status(400).json({
                error: "Name, price and stock are required"
            });
        }

        try {
            const product = await ProductModel.create(name, price, stock);
            this.success(res, "Product created successfully", product);
        } catch (error) {
            res.status(500).json({
                error: error.message
            });
        }
    };

    // Update product
    updateProduct = async (req, res) => {
        const { id } = req.params;
        const { name, price, stock } = req.body;

        try {
            const updatedProduct = await ProductModel.update(
                id,
                name,
                price,
                stock
            );

            if (!updatedProduct) {
                return res.status(404).json({
                    error: "Product not found"
                });
            }

            this.success(
                res,
                "Product updated successfully",
                updatedProduct
            );

        } catch (error) {
            res.status(500).json({
                error: error.message
            });
        }
    };

    // Delete product
    delete = async (req, res) => {
        try {
            const { id } = req.params;
            const deletedProduct = await ProductModel.delete(id);

            if (!deletedProduct) {
                return res.status(404).json({
                    error: "Product not found"
                });
            }

            this.success(
                res,
                "Product deleted successfully",
                deletedProduct
            );

        } catch (error) {
            res.status(500).json({
                error: error.message
            });
        }
    };
}

export default new ProductController();