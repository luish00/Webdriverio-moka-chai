class GetQuoteModule {
  constructor() {
    this.CUSTOMIZE_PLAN = {
      essential: {
        id: 0,
        name: 'ESSENTIAL',
      },
      preferred: {
        id: 1,
        name: 'PREFERRED',
      },
      ultimate: {
        id: 2,
        name: 'ULTIMATE',
      }
    };

    // how to use: REIMBURSEMENT[80]
    this.REIMBURSEMENT = {
      '70': 0,
      '80': 1,
      '90': 2,
      '100': 3,
    };

    this.DEDUCTIBLE = {
      max: 4,
      middlemax: 5,
      middleMin: 6,
      min: 7,
    }
  }
}

module.exports = GetQuoteModule;