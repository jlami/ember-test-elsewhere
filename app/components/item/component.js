import Component from '@ember/component';

export default class ItemComponent extends Component {
  willRender() {
    console.log('willRender', this.model.id);
  }
}
