/*
Create an array that contains a bunch of numbers representing the heights
of various mountains. Write some code that identifies the height of the
tallest of the available mountains and prints it out.
*/

(function(){

let height=[7, 13, 9, 19, 14, 24, 12];

height.sort(function(a, b){
  return a-b});

console.log(height);

height.reverse();

console.log(height[0]);

}());
