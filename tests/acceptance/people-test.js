import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';

module('Acceptance | people', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  test('visiting /people', async function(assert) {
    this.server.createList('author', 10);
    await visit('/people');

    assert.equal(currentURL(), '/people');
  });
});
