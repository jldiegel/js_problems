var avg = require('../avg');
var chai = require('chai');
var expect = chai.expect;

describe('return average of 3 numbers', function() {

    context('given numbers of 3, 9, and 24', function() {
      it('returns 12', function() {
        let average = avg(3, 9, 24)
        expect(average).to.equal(12);
      });
    });


});