export class BaseModel {
  getAll() {
    throw new Error("Method not implemented");
  }

  find(id) {
    throw new Error("Method not implemented");
  }

  create(data) {
    throw new Error("Method not implemented");
  }

  update(id, data) {
    throw new Error("Method not implemented");
  }

  delete(id) {
    throw new Error("Method not implemented");
  }
}
export default new BaseModel();