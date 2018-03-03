import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | initial-load/ember-cli-concat', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:initial-load/ember-cli-concat');
    assert.ok(route);
  });
});
