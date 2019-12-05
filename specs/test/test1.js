const assert = require('assert');
const GetQuote = require('../../pages/getQuote.page');
const GetQuoteModel = require('../../models/getQuoteModel');
const app = require('../../app');

const getQuoteModel = new GetQuoteModel();

// http://v4.webdriver.io/api/utility/$.html
describe('Get-quote page', () => {
  const quoteTest = {
    customizePlan: getQuoteModel.CUSTOMIZE_PLAN.ultimate,
    deductible: getQuoteModel.DEDUCTIBLE.middlemax,
    isCat: true,
    isFemale: true,
    name: 'perrito 2',
    paymentInfo: {
      firstName: 'Luis',
      lastName: 'Arredondo',
      addressLine1: 'Address Line 1',
      addressLine2: 'Address Line 2',
      mobilePhone: '6673112233',
      firstName: 'Luis',
      accountNumber: '4242424242424242',
      dateOfBirth: '04122019',
      routingNumber: '021000021',
      searchVeterinarian: 'anim',
    },
    petAge: 8,
    petCloudLogin: {
      email: 'soy.un.email@gmail.com',
      password: 'test123'
    },
    powerUps: {
      veterinaryExam: true,
      rehabilitation: false,
    },
    reimbursement: getQuoteModel.REIMBURSEMENT[90],
    zipCode: '90001'
  };
  const getQuote = new GetQuote(quoteTest);

  it('Add a Pet', () => {
    getQuote.open();
    const title = browser.getTitle()
    assert.strictEqual(title, 'Figo Quoting')

    getQuote.initQuote();
    getQuote.assertQuote();
  })

  it('Submit quote', () => {
    getQuote.submitFromQuote();

    const title = browser.getTitle()
    assert.strictEqual(title, 'Your Plans')
  })

  it('Initial single pet plan', () => {
    getQuote.assertInitialPlanQuote();
  })

  it('Customize pet plan', () => {
    getQuote.customizePlan();
    getQuote.assertPlanQuote();
  })

  it('Customize reimbursement', () => {
    getQuote.assertPlanQuote();
  })

  it('Customize deductible', () => {
    getQuote.assertPlanQuote();
  })

  it('Added powerup\'s', () => {
    getQuote.addedPowerUpds();
    getQuote.assertPowerUpsSelected();
    getQuote.assertPlanQuote();
  })

  it('Submit Plan', () => {
    getQuote.submitPlan();

    const title = browser.getTitle()
    assert.strictEqual(title, 'Payment Info')
  })

  it('Your info', () => {
    getQuote.setYourInfo();
  })

  it('Search veterinarian', () => {
    getQuote.searchVeterinarian();
  })

  it('Payment info', () => {
    getQuote.setPaymentInfo();
  })

  it('Pet cloud login', () => {
    getQuote.setPetlogin();
  })

  it('Purchase quote', () => {
    // getQuote.purchasePolicy()
    // browser.debug();
    browser.pause(5000)
  })
})