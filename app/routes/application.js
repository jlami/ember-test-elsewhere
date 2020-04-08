import Route from '@ember/routing/route';

export default class SubjectsRoute extends Route {
  model(params) {
    return [
      {id: "1", name: 'test1'},
      {id: "2", name: 'test2'},
      {id: "3", name: 'test3'},
      {id: "4", name: 'test4'},
      {id: "5", name: 'test5'},
      ];
  }
}
