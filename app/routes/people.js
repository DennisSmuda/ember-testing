import Route from '@ember/routing/route';

export default class PeopleRoute extends Route {
  async model() {
    const authors = await this.store.findAll('author');
    return authors;
  }
}
