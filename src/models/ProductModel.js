import db from '../config/db.js';
import {BaseModel} from './BaseModel.js';
class ProductModel{
    static async getAll() {
    const [rows] = await db.query('SELECT * FROM products')
    return rows
  }
  static async find(id) {
    const [rows] = await db.query('SELECT * FROM products WHERE id = ?', [id])
    return rows
  }
  static async create(name, price, stock) {
    const [result] = await db.query('INSERT INTO products (name, price, stock) VALUES (?, ?, ?)', [name, price, stock])

    return { id: result.insertId, name, price, stock }
  }
  static async update(id, name, price, stock) {
    const [result] = await db.query('UPDATE products SET name = ?, price = ?, stock = ? WHERE id = ?', [name, price, stock, id])    

    if (result.affectedRows === 0) {
      return null
    }

    return { id: Number(id), name, price, stock }
  }
  static async delete(id) {
    const [result] = await db.query('DELETE FROM products WHERE id = ?', [id])

    return result.affectedRows > 0
  }


}
export default ProductModel;