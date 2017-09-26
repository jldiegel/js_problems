var change = require('../change');
var chai = require('chai');
var expect = chai.expect;

describe('Return Bills for Change', function() {

    context('given starting amount of $67', function() {
      it('returns [3, 0, 1, 2]', function() {
        let bills = change(67)
        console.log(bills)
        expect(bills).to.eql([3, 0, 1, 2]);
      });
    });


});



