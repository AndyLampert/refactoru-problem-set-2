// var firstReverse = function(str) {
// 	return str.split('').reverse().join('');
// }
// console.log(firstReverse('string'));

// var swapCase = function(str) {
// 	var newString = str.split('');
// 	var newArray = [];
// 	for(var i=0;i<newString.length;i++){
// 		// if the array value.toLowerCase  is ALREADY lowercase (ie. if when I change it to lowercase, it's the same as original)
// 		// put that value after transforming it to uppercase 
// 		if(newString[i].toLowerCase() === newString[i]) {
// 			// find the ith character, convert that character to uppercase, then push the value into the array
// 			newArray.push( newString[i].toUpperCase() );
// 		}
// 		else {
// 			newArray.push( newString[i].toLowerCase() );
// 		}
// 	}
// 	return newArray.join('');
// }
// console.log(swapCase("Hello World"));

var swapCase = function(str) {
	// var newString = str.split('');
	var newArray = [];
	for(var i=0;i<str.length;i++){
		// if the array value.toLowerCase  is ALREADY lowercase (ie. if when I change it to lowercase, it's the same as original)
		// put that value after transforming it to uppercase 
		if(str[i].toLowerCase() === str[i]) {
			// find the ith character, convert that character to uppercase, then push the value into the array
			newArray.push( str[i].toUpperCase() );
		}
		else {
			newArray.push( str[i].toLowerCase() );
		}
	}
	return newArray.join('');
}
console.log(swapCase("Hello World"));


var letterCount = function() {
	
}
// #2
// Write a function swapCase that takes a single string parameter and swaps the case of each character. 
// For example: if a string is "Hello World" the output should be "hELLO wORLD". Let numbers and symbols stay the way they are.

// Bonus:
// Write a function letterCount that takes a single string parameter and returns the first word with the greatest number of repeated letters. For example: "Today, is the greatest day ever!" should return greatest because it has 2 e's (and 2 t's) and it comes before ever which also has 2 e's. If there are no words with repeating letters return -1. Words will be separated by single spaces.


var a = [1,2,3];
a.push('4')

// changes a to [1,2,3,'4'] 
