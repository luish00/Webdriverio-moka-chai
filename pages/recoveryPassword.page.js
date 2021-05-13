const { assert } = require('chai');
const Page = require('./page');
const app = require('../app');
const { validEmail } = require('../models/utils')

class RecoveryPassword extends Page {
  constructor() {
    super();
  }

  open() {
    super.open(app.env + '/passwordrecovery')
  }

  get emailInput() {
    return $('#Email');
  }

  passwordRecovery(email) {
    $('#Email').clearValue();
    $('#Email').addValue(email);
    $('.contactLabelDiv label').click(); // remove focus from input
  }

  submitPassRecovery(email) {
    this.passwordRecovery(email)
    $('input.button.active-button.password-recovery-button').click();
  }

  // asserts
  assertRecoveryLeggendNotFound() {
    const errorLeggend = $('div*=Email not found.');

    assert.isOk(errorLeggend.isDisplayed(), 'Email not found are not displayed');
  }

  assertMalformedRecoverEmail(email) {
    this.passwordRecovery(email);

    const classArr = this.emailInput.getAttribute('class').split(' ');
    const isEmailValid = validEmail(email);
    console.log('assert mailll', { classArr, email, isEmailValid })

    assert.equal(
      !!classArr.find((clazz) => clazz === 'valid'),
      isEmailValid,
      'Malformed email valid fail',
    )
  }

  assertSendRecoveryPasswordEmail() {
    const errorLeggend = $('div*=Email with instructions has been sent to you.');

    assert.isOk(errorLeggend.isDisplayed(), 'Email not found are not displayed');
  }
}

module.exports = RecoveryPassword;