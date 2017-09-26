/*Create a variable called word that contains a hangman word, and create a
second variable called letter that indicates the letter that the player guessed.
Print out "Yeah, the letter x exists y times in my word" if the letter exists
(but substitute the actual letter and the number of times).
If the letter doesn't exist, print out "Nope, that letter doesn't exist in my word."
*/

(function() {

// let word = "mississippi"

// let letter = "s"

function hangman(letter, word){




var matches = word.split(letter).length-1;

// console.log(word.split(letter));


//console.log(word.indexOf(letter));

result = (word.indexOf(letter));

//console.log(result);

if(result < 0) {
  return "Nope, that letter " + letter + " doesn't exist in my word.";
}

else{
  return "Yeah, the letter " + letter + " exists " + matches + " times in my word";

}

}

module.exports = hangman



}());
