export class BaseModel {
  getAll() {
    throw new Error('getAll() must be implemented');
  }
  find(){
    throw new Error('find() must be implemented');
  }

  create(name) {
    throw new Error('create() must be implemented');
  }

  update(id, name) {
    throw new Error('update() must be implemented');
  }

  delete(id) {
    throw new Error('delete() must be implemented');
  }
}

export default BaseModel;
