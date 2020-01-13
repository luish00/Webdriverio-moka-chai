const { assert } = require('chai');
const Page = require('./page');
const app = require('../app');
const path = require('path');
const filePath = path.join(__dirname, 'C:\Users\Memo\Documents\Arreglo MultiplePolicy app.txt');

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
    $('#LastSeenDate').click()
  }

  submitBtnDisabled() {
  const btn = $('#SubmitClaimButton')
    
  }

  selectDate() {
    $$('a.ui-state-default')[5].click();

  }
  //selectClaimType() {
    //$('/html/body/div[11]/div/div[2]/form/div[2]/div[3]/div[2]/select').click(); Check Later

  //}
  pressSubmitClaimBtn() {
    $('#PreClaimSubmit').waitForClickable({ timeout: 5000 });
    $('#PreClaimSubmit').click();

  }

  fillClaimData() {
    $('#AmountClaimed').waitForClickable({ timeout: 5000 });
    $('#AmountClaimed').addValue(250);
    $('#Description').addValue('Automation Test');
   // $('#PaymentType').click() Esta Vaina no se selecciona !!!
    $('#Styled_AcceptPolicy').click();
    $('#Styled_AcceptFraud').click();

  }

  attachDocumentsPopUp() {
    $('//*[@id="SubmitClaimForm"]/div/div[7]/div[1]').click();

    browser.pause(8000);
  }

  uploadFiles() {

    
    browser.pause(5000);
  }
  // assert
  assertLoadPage() {
    const url = browser.getUrl();

    assert.strictEqual(url, app.env + '/Claims', ' Failed To Load Claim Page');
  }

  assertDisabledSubmitBtn() {
    const btn = $('#SubmitClaimButton')
    btn.waitForExist(5000);
    const isDisabled = btn.getAttribute('class').includes('disabled')

    assert.isTrue(isDisabled, 'Sumbit buton starts Eneable' )
  }

}

module.exports = Claim;