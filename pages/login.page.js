const { assert } = require('chai');
const Page = require('./page');
const app = require('../app');
const { validEmail } = require('../models/utils')

class Login extends Page {
  constructor() {
    super();
  }

  open() {
    super.open(app.env + '/login')
  }

  loginSubmit(userName, password) {
    $('#Username').addValue(userName);
    $('#Password').addValue(password);

    $('input.ui-button-primary.ios-appearance-none').click();
  }

  clearLogin() {
    $('#Username').clearValue();
    $('#Password').clearValue();
  }

  clickForgotYourPassword() {
    $('.lost-password').click();
  }

  // asserts
  assertLoginCredentialsFail() {
    const errorLeggend = $('li*=The credentials provided are incorrect');

    assert.isOk(errorLeggend.isDisplayed(), 'The credentials provided are not displayed')
  }

  assertLoginUserNotFound() {
    const errorLeggend = $('li*=No customer account found');

    assert.isOk(errorLeggend.isDisplayed(), 'No customer account found are not displayed')
  }

  assertLoginSuccess() {
    const titile = browser.getTitle();
    assert.strictEqual(titile, 'MyPetCloud', 'Title no match')
  }

  assertRecoveryLeggendNotFound() {
    const errorLeggend = $('div*=Email not found.');

    assert.isOk(errorLeggend.isDisplayed(), 'Email not found are not displayed');
  }
}

module.exports = Login;