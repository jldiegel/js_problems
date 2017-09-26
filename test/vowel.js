var containsVowel = require('../vowel');
var chai = require('chai');
var expect = chai.expect;

describe('returns true if word contains vowel', function() {

    context('given word alpha', function() {
      it('returns true', function() {
        let result = containsVowel("alpha")
        expect(result).to.equal(true);
      });
    });


});


