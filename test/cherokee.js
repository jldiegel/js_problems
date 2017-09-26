var harePop = require('../cherokee');
var chai = require('chai');
var expect = chai.expect;

describe('Total Hare Population', function() {

    context('given figures (startingPopulation, birthRate, numberOfWeeks)', function() {
      it('returns 300', function() {
        hares = harePop(200, 0.1, 5)
        expect(hares).to.equal(300);
      });
    });


});


