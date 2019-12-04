const { assert } = require('chai');

class GetQuote {
  constructor(quote) {
    this.quote = quote;
  }

  setPetName() {
    $('#PetName').addValue(this.quote.name);
  }

  initQuote() {
    // https://webdriver.io/docs/selectors.html
    $('#PetName').addValue(this.quote.name);

    if (this.quote.isCat) {
      $('label=Cat').click();
    }

    if (this.quote.isFemale) {
      $('label=Female').click();
    }

    $('#PetAgeId').addValue(this.quote.petAge)
    $('#PetAgeId').click();
    $('#select2-PetBreedId-container').click();
    $('.select2-search__field').setValue('Mixed')
    // https://w3c.github.io/webdriver/webdriver-spec.html#keyboard-actions
    browser.keys(['Meta', '\uE006']) // enter

    $('#ZipCode').addValue(this.quote.zipCode)
    $('#ZipCode').click();
  }

  submitFromQuote() {
    $('.mint-btn-md').click();
  }

  customizePlan() {
    $$('.quote-plan-summary')[this.quote.customizePlan.id].click();
  }

  changeReimbursement() {
    $$('p.slider-legend-item')[this.quote.reimbursement].click();
    $$('p.slider-legend-item')[this.quote.deductible].click();
  }

  addedPowerUpds() {
    const { rehabilitation, veterinaryExam } = this.quote.powerUps;

    if (veterinaryExam) {
      $$('div.quote-pet-card-coverage')[0]
        .$('.powerup-coverage-fee-add').click();
    }

    if (rehabilitation) {
      $$('div.quote-pet-card-coverage')[2]
        .$('.powerup-coverage-fee-add').click();
    }
  }

  submitPlan() {
    $$('.add-pet-button-wrapper input')[1].click();
  }

  searchVeterinarian() {
    $('#selecteVet').setValue(this.quote.paymentInfo.searchVeterinarian)
    browser.pause(2000)
    $$('.typeahead.dropdown-menu li')[0].click()
  }

  setYourInfo() {
    const { paymentInfo } = this.quote;

    $('#PrimaryFirstName').setValue(paymentInfo.firstName);
    $('#PrimaryLastName').setValue(paymentInfo.lastName);
    $('#PetAddressLine1').setValue(paymentInfo.addressLine1);
    $('#PetAddressLine2').setValue(paymentInfo.addressLine2);
    $('#PrimaryMobilePhone').setValue(paymentInfo.mobilePhone);

    $('#HowDidYouHear').click();
    $('option=Facebook').click();

  }

  setPaymentInfo() {
    const { paymentInfo } = this.quote;

    $('#ACHRountingNumber').setValue(paymentInfo.routingNumber);
    $('#ACHRountingNumberConfirm').setValue(paymentInfo.routingNumber);
    $('#ACHAccountNumber').setValue(paymentInfo.accountNumber);
    $('#ACHAccountNumberConfirm').setValue(paymentInfo.accountNumber);
    $('#DateOfBirthGuess0').setValue(paymentInfo.dateOfBirth);
  }

  setPetlogin() {
    const { petCloudLogin } = this.quote;

    $('#PrimaryEMail').setValue(petCloudLogin.email);
    $('#PrimaryEMailConfirm').setValue(petCloudLogin.email);
    $('#PrimaryPassword').setValue(petCloudLogin.password);
    $('#PrimaryPasswordConfirm').setValue(petCloudLogin.password);
  }

  purchasePolicy() {
    $('div.content-buttons-todays-total div input.first-action-button').click();
  }

  // assert's method's
  assertQuote() {
    assert.strictEqual($('#PetName').getValue(), this.quote.name, 'Pet name no match');
    assert.strictEqual($('#ZipCode').getValue(), this.quote.zipCode, 'Zip code no mach');
    assert.isOk($('#PetBreedId').getValue(), 'PetBreedId not found');
    assert.isOk($('.select2-selection__rendered').getText(), 'PetBreed text not found');
    assert.isOk($('#PetAgeId').getValue(), 'PetAgeId not found');
  }

  assertInitialPlanQuote() {
    this._assertPlanQuote(this.quote)
  }

  assertPlanQuote() {
    this._assertPlanQuote();
    this.assertPlanName();
  }

  assertPlanName() {
    const selectedPlanName = $('.quote-pet-header-selectedplan').getText();

    assert.strictEqual(this.quote.customizePlan.name,
      selectedPlanName, 'Plan selected no mach');

  }

  assertPowerUpsSelected() {
    const { rehabilitation, veterinaryExam } = this.quote.powerUps;

    if (veterinaryExam) {
      const veterinaryExamIsSelected =
        $$('div.quote-pet-card-coverage')[0].getAttribute('is-selected');

      assert(veterinaryExamIsSelected === 'true', 'Veterinaty Exam powerup no selected')
    }

    if (rehabilitation) {
      const rehabilitationSelected =
        $$('div.quote-pet-card-coverage')[2].getAttribute('is-selected');

      console.log('rehabilitationSelected', rehabilitationSelected)
      assert(rehabilitationSelected === 'true', 'Rehabilitation powerup no selected')
    }
  }

  // private method
  _assertPlanQuote() {
    const planName = $('.quote-petname-name').getText().toLowerCase();

    assert(planName.includes(this.quote.name), 'Pet plan name no mach');

    const totalQuote = $('.total-quote').getText() + '/mo';
    const selectedQuote = '$' + $('.quote-pet-header-monthlyprice-dollars').getText()
      + $('.quote-pet-header-monthlyprice-cents').getText();

    assert.strictEqual(totalQuote, selectedQuote, 'Plan monthly quote no match');
  }
}

module.exports = GetQuote;
