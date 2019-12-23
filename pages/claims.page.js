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
    $('#LastSeenDate').click()
  }

  selectDate() {
    $$('a.ui-state-default')[5].click();

  }
  //selectClaimType() {
    //$('/html/body/div[11]/div/div[2]/form/div[2]/div[3]/div[2]/select').click(); Check Later

  //}
  pressSubmitClaimBtn() {
    $('#PreClaimSubmit').waitForClickable({ timeout: 5000 });
    $('#PreClaimSubmit').click({ timeout: 5000 });

  }

  fillClaimData() {
    browser.pause(3000)
    $('#AmountClaimed').addValue(250);
    $('#Description').addValue('Automation Test');
    $('#PaymentType').selectByIndex(1)
    $('#Styled_AcceptPolicy').click()
    $('#Styled_AcceptFraud').click()
    browser.debug(8000)



    browser.pause(5000)

  }
  // assert
  assertLoadPage() {
    const url = browser.getUrl();

    assert.strictEqual(url, app.env + '/Claims', ' Failed To Load Claim Page');
  }

}

module.exports = Claim;