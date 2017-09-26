var greaterThan = require('../greater');
var chai = require('chai');
var expect = chai.expect;

describe('', function() {

    context('given numbers of 9 and 12', function() {
      it('returns true', function() {
        let result = greaterThan(9, 12)
        expect(result).to.equal(true);
      });
    });


});