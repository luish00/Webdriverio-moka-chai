const { assert } = require('chai');
const Login = require('../../../pages/login.page');
const Claims = require('../../../pages/claims.page');

const login = new Login();
const claims = new Claims();

describe('claims', () => {
  it('Open Home Page', () => {
    login.open();
    login.loginSubmit('scxq28@gmail.com.xx', 'test123');

    assert.strictEqual(
      browser.getTitle(),
      'MyPetCloud',
      'Log in Failed',
    );
  })

  it('Open Claims Page', () => {
    claims.openClaimPage();
    claims.assertLoadPage();
  })

  it('Open modal Submit Claim', () => {
    claims.openNewClaimModal(); 
    // asert de que el modal salio
  })

  it('Init claim', () => {
    claims.initClaim();
    //  assert
  })

  it('Submit new Claim', () => {
    browser.debug(); // hasta aquí se detiene 

    claims.starClaim();
  })

  it('Select Invalid Date', () => {

  })
});
