/*
Imagine we have a very versatile change machine. Create a variable called
amount stores a quantity of dollars, and write some code that produces an
array that indicates the number of 1, 5, 10, and 20 bills that the change
machine should return. You want the change machine to return the smallest
number of bills possible.

After your code runs you should have a new array of the format
[twenties, tens, fives, ones].
For example, if amount = 47, you should print an array after your
code runs that looks like [2, 0, 1, 2] (two twenties, 0 tens, 1 five, 2 ones).
*/

(function() {

let amount = 66

let twenties = ~~(amount/20);
let amount2 = amount - (twenties * 20);

let tens = ~~(amount2/10);
let amount3 = amount2 - (tens * 10);

let fives = ~~(amount3/5)
let amount4 = amount3 - (fives * 5);

let ones = ~~(amount4/1)
let amount5 = amount4 - (ones * 1)

let bills = [twenties, tens, fives, ones]

console.log(bills);


//console.log(amount);
//console.log(amount2);
//console.log(tens);
//console.log(amount3);
//console.log(fives);
//console.log(amount4);
//console.log(ones);
//console.log(amount5);






})();
