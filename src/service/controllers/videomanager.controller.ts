/* eslint-disable require-jsdoc */
import VideoManagerModel from '../backingservices/databases/mongodb/models/videomanagers.model';

const getUniqueValues = (array) => [...new Set(array)];


class PROFILEMONGOMETHODS {
  async getAllManagers() {
    const queryAllSearch = {};
    const allManagers = await VideoManagerModel.find(queryAllSearch)||[];
    return allManagers;
  }

  async getManagerByIdSpecifico(id) {
    const manager = await VideoManagerModel.findOne({_id: id}) || {};
    return manager;
  }

  async getManagerById(id) {
    const manager = await VideoManagerModel.findById(id) || {};
    return manager;
  }

  async getManagersByIds(ids) {
    const managers = await VideoManagerModel.find({
      _id: {$in: getUniqueValues(ids)},
    }) || [];

    return managers;
  }

  async getManagerByField(field, keySearch) {
    const manager = await VideoManagerModel.findOne({
      [field]: keySearch,
    })|| {};

    return manager;
  }

  async getManagersByFields(fields, keySearch) {
    const objectWithFields = {};

    for (const field of fields) {
      objectWithFields[field] = keySearch;
    }

    const managers = await VideoManagerModel.find(objectWithFields)||[];
    return managers;
  }

  async getManagerByRoleLean(roleName) {
    const manager = await VideoManagerModel.findOne({
      role: roleName,
    }).lean();
    manager.firstName = 'Le cambio de nombre';
    // lo que se retorna es un objeto plano {JSON}
    return manager;
  }

  async getManagerByRoleExec(roleName) {
    const manager = await VideoManagerModel.findOne({
      role: roleName,
    }).exec();

    manager.firstName = 'Le cambio de nombre';
    await manager.save();

    return manager;
  }

  // update fns
  async updateManagerById() {}
  async updateManagerByField() {}
  async updateManagerByAnyField() {}
  async updateMultipleManagersByField() {}
  async updateMultipleManagersByMultipleFields() {}

  // create fns

  async createElementWithSave() {}
  async createElementWithCreate() {}
  async createElementWithInsertMany() {}
}

// TO DO
// operaciones de actualizacion
// operaciones de eliminado
// operaciones bulk

const profileMethodsController = new PROFILEMONGOMETHODS();


export {
  profileMethodsController,
};
