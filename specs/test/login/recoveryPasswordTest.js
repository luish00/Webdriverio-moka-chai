const RecoveryPassword = require('../../../pages/recoveryPassword.page');
const { assert } = require('chai');

const recoveryPassword = new RecoveryPassword();

describe('Recovery password', () => {
  it('Load recovery password page', () => {
    recoveryPassword.open();

    assert.strictEqual(
      browser.getTitle(),
      'MyPetCloud. Password Recovery',
      'Recovery password page failed to load',
    );
  })

  it('Password Recovery malformed email fail validation', () => {
    const malformedEmail = 'malformed_email@gmail.';

    recoveryPassword.assertMalformedRecoverEmail(malformedEmail);
  })

  it('Password Recovery malformed email validations', () => {
    const validEmail = 'valid_email@gmail.com.xx';

    recoveryPassword.assertMalformedRecoverEmail(validEmail);
  })

  it('Password Recovery send instructions', () => {
    const email = 'test@test.com.xx';

    recoveryPassword.assertMalformedRecoverEmail(email);

    recoveryPassword.submitPassRecovery('test@test.com.xx')
    recoveryPassword.assertSendRecoveryPasswordEmail();
  })
});