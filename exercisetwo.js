console.log("Embeces se puede y embeces no");

/* 
Write a function that:
Takes in an array of numbers.
Doubles the value of each number in the array.
Prints out the new updated array.
Example: Given an array [1, 2, 4, 5]. The output should be [2, 4, 8, 10] 
*/

const arrayMap = [1, 2, 4, 5];

const mapOne = arrayMap.map((x) => x*2);
console.log("El resultado es " + mapOne);