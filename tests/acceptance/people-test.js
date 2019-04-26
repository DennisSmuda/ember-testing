import { module, test } from 'qunit';
import { visit, currentURL, fillIn, click } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';

module('Acceptance | people', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  test('visiting /people', async function(assert) {
    this.server.createList('author', 10);
    await visit('/people');

    assert.equal(this.element.querySelector('h3').textContent.trim(), 'List of People', 'should show a list header');
    assert.equal(this.element.querySelectorAll('ul li').length, 10, 'should show 10 list items');

    assert.equal(currentURL(), '/people', 'current URL should be /people');
  });

  test('should add a new person', async function(assert) {
    await visit('/people');

    await fillIn('input', 'New Person');
    await click('button[title="Add Person"]');
    assert.equal(this.element.querySelector('ul li span').textContent.trim(), 'New Person');
  });
});
