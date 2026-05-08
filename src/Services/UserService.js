import UserRepository from "../Repository/UserRepository.js";

class UserService {
    constructor() {
        this.userRepository = new UserRepository();
    }

    async getUsers() {
        return this.userRepository.getAll();
    }

    async getUser(id) {
        return this.userRepository.find(id);
    }

    async createUser(name) {
        return this.userRepository.create(name);
    }

    async updateUser(id, name) {
        return this.userRepository.update(id, name);
    }

    async deleteUser(id) {
        return this.userRepository.delete(id);
    }
}

export default UserService;
