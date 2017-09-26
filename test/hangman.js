var hangman = require('../hangman');
var chai = require('chai');
var expect = chai.expect;

describe('Is letter in Word', function() {

    context('Is letter in word', function() {
      it('returns yeah the letter a does not exist in my word', function() {
        let matches = hangman("a", "cat")
        expect(matches).to.equal("Yeah, the letter a exists 1 times in my word");
      });
    });

    context('Is letter in word', function() {
        it('returns yeah the letter a does not exist in my word', function() {
          let matches2 = hangman("b", "cat")
          expect(matches2).to.equal("Nope, that letter b doesn't exist in my word.");
        });
      });


});


// return "Nope, that letter " + letter + " doesn't exist in my word.";
// }

// else{
//   return "Yeah, the letter " + letter + " exists " + matches + " times in my word";