const { assert } = require('chai');
const Page = require('./page');
const app = require('../app');

class Claim extends Page {
  constructor() {
    super();
  }

  openClaimPage() {
    $('.icon-claims').click();
    browser.pause(5000)
  }

  openNewClaimModal() {
    $('div=New Claim').click();
  }

  initClaim() {
    $$('div.claim-field select')[0].click(); // Select What pet is this claim for?
    $$('div.claim-field select option')[1].click();
    // $('input#LastSeenDate').addValue('12/12/2019');
    $('#LastSeenDate').click();

    $$('a.ui-state-default')[5].click();
  }

  starClaim() {
    $('div=Start Claim').waitForClickable({ timeout: 3000 })
    $('div=Start Claim').click();
  }

  // assert
  assertLoadPage() {
    const url = browser.getUrl();

    assert.strictEqual(url, app.env + '/Claims', ' Failed To Load Claim Page');
  }

}

module.exports = Claim;