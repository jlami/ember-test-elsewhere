import Route from '@ember/routing/route';

export default class EditRoute extends Route {
  model(params) {
    return { params, model: this.modelFor('application')};
  }
}
