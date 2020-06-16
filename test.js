var regexUtils = require("./");
var test = require("tape");

test('main cases', function (assert) {
  assert.plan(5);
  assert.strictEqual(JSON.stringify(regexUtils.emails('aaa a@b.com bbbb')), JSON.stringify(['a@b.com']));
  assert.strictEqual(regexUtils.emailValid('aaa a@b.com bbbb'), false);
  assert.strictEqual(regexUtils.emailValid('a@b.com'), true);
  assert.strictEqual(regexUtils.nameValid('John Smith'), true);
  assert.strictEqual(regexUtils.nameValid('2345678'), false);
});
