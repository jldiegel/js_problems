var sum = require('../sum');
var chai = require('chai');
var expect = chai.expect;

describe('return sum of two numbers', function() {

    context('given numbers of 3 and 9', function() {
      it('returns 12', function() {
        let total = sum(3, 9)
        expect(total).to.equal(12);
      });
    });


});