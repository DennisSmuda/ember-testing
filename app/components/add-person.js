import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class AddPersonComponent extends Component {
  @service store;

  newName = '';

  @action
  addPerson() {
    this.store.createRecord('author', {
      name: this.newName,
      avatar: ''
    })
  }
}
