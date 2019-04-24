import DS from 'ember-data';
const { Model, attr } = DS;

export default class AuthorModel extends Model {
  @attr() name;
  @attr() avatar;
}
