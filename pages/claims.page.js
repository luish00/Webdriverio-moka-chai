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

    selectPetClaim() {
        $('/html/body/div[6]/div[1]/div[3]/div[2]/div[1]/div[1]/div[3]').click();
        //const petDropdown = 
        $('//*[@id="PetId"]');

        
        //$$('#PetId')[2].click
        browser.pause(5000)
    }
    // assert
    assertLoadPage() {
        const url = browser.getUrl();

        assert.strictEqual (url, app.env + '/Claims', ' Failed To Load Claim Page');
    }
   
}

module.exports = Claim;