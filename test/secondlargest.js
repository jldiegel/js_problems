var secondLargest = require('../secondlargest');
var chai = require('chai');
var expect = chai.expect;

describe('returns second largest number in array', function() {

    context('given numbers of 1, 2, 3, 4', function() {
      it('returns second largest', function() {
        let nextlargest = secondLargest([1, 2, 3, 4, 5])
        expect(nextlargest).to.equal(4);
      });
    });


});