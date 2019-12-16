const Login = require('../../../pages/login.page');
const { assert } = require('chai');

const login = new Login();

describe('Login', () => {
  it('Load login page', () => {
    login.open();

    assert.strictEqual(
      browser.getTitle(),
      'MyPetCloud. Login',
      'Login page failed to load',
    );
  })

  it('Login credentials fail', () => {
    login.loginSubmit('navave4@gmail.com.xx', 'test1234');
    login.assertLoginCredentialsFail();
  })

  it('Login customer not found', () => {
    login.clearLogin();
    login.loginSubmit('no_existo@gmail.com.xx', 'test1234');
    login.assertLoginUserNotFound();
  })

  it('Forgot your password', () => {
    login.clickForgotYourPassword();

    assert.strictEqual(
      browser.getTitle(),
      'MyPetCloud. Password Recovery',
      'Recovery password page failed to load',
    );

    browser.back();
  })

  it('Login success', () => {
    login.clearLogin();
    login.loginSubmit('navave4@gmail.com.xx', 'test123');
    login.assertLoginSuccess();
  })
});