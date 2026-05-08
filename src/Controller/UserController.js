import { BaseController } from "./BaseController.js";
import UserService from "../Services/UserService.js";

export class UserController extends BaseController {
  constructor() {
    super();
    this.userService = new UserService();
  }

  getAll = async (req, res) => {
    try {
      const users = await this.userService.getUsers();
      this.success(res, "Users retrieved successfully", users);
    } catch (error) {
      this.error(res, error.message);
    }
  };

  find = async (req, res) => {
    try {
      const { id } = req.params;
      const user = await this.userService.getUser(id);

      if (!user) {
        return this.error(res, "User not found", 404);
      }

      this.success(res, "User retrieved successfully", user);
    } catch (error) {
      this.error(res, error.message);
    }
  };

  createUser = async (req, res) => {
    try {
      const { name } = req.body;
      const user = await this.userService.createUser(name);

      this.success(res, "User created successfully", user, 201);
    } catch (error) {
      this.error(res, error.message, 400);
    }
  };

  updateUser = async (req, res) => {
    try {
      const { id } = req.params;
      const { name } = req.body;

      const user = await this.userService.updateUser(id, name);

      if (!user) {
        return this.error(res, "User not found", 404);
      }

      this.success(res, "User updated successfully", user);
    } catch (error) {
      this.error(res, error.message);
    }
  };

  delete = async (req, res) => {
    try {
      const { id } = req.params;
      const deleted = await this.userService.deleteUser(id);

      if (!deleted) {
        return this.error(res, "User not found", 404);
      }

      this.success(res, "User deleted successfully");
    } catch (error) {
      this.error(res, error.message);
    }
  };
}

export default new UserController();
