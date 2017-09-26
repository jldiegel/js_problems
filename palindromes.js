/*
Create a variable called word that stores a word we want to
test as a palindrome. Write some code that prints out "true"
if word is a palindrome, or "false" if its not.
*/


(function() {

/*
  let word = "hannah"

  let wordArray = word.split("")

  let reverseArray = wordArray.reverse()

  let reverseWord = wordArray.join("")

  // let reverseWord = word.split("").reverse().join("");


  if(reverseWord === word) {
    console.log("TRUE. The word " + word + " is a palindrome");
  }

  else{
    console.log("FALSO. The word " + word + " is not a palindrome");

  }
*/

  function isPalindrome(word){
    return word == word.split("").reverse().join("");

  }

  module.exports = isPalindrome

  // console.log(isPalindrome("bob"));
  // console.log(isPalindrome("Jeramiah"));



})();
