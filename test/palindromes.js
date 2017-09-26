var isPalindrome = require('../palindromes');
var chai = require('chai');
var expect = chai.expect;

describe('Is it a Palindrome', function() {

    context('given word radar', function() {
      it('returns true', function() {
        var word = isPalindrome('radar')
        expect(word).to.equal(true);
      });
    });


});