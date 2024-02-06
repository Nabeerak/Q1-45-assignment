//More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:

//• Tests for equality and inequality with strings
let bike = 'kawasaki';
console.log("the length of 'kawasaki' characters is equal to 8");
console.log(bike.length == 8);

console.log("is bike equal 'honda'");
console.log(bike != 'honda');


//• Tests using the lower case function
let BIKE = "KAWASAKI";
console.log("the lower case of BIKE = bike?");
console.log(BIKE.toLowerCase() == bike);


//• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
let number1 = 34;
let number2 = 45;
console.log("is number is equal to 34?");
console.log(number1 === 34);

console.log("number1 is not equal to number2");
console.log(number1 != number2);

console.log("number1 is less than number2");
console.log(number1 < number2);

console.log("number1 is less than or equal to number2");
console.log(number1 <= number2);


//• Tests using "and" and "or" operators
console.log("number1 > 22 || number2 >56? i predict it as true...");
console.log(number1 > 22 || number2 >56);

console.log("number1 > 33 && number2 < 50? I predict it as false...");
console.log(number1 > 33 && number2 > 50);


//• Test whether an item is in a array 
let array1: string[]= ["Sir Zia","Sir Kamran","Sir Jahanzaib","Miss Mubarra"];

console.log("does array contain Sir Jahanzaib?");
console.log(array1.includes("Sir Jahanzaib"));


//• Test whether an item is not in a array
console.log("does array contain Sir Qasim?");
console.log(array1.includes("Sir Qasim"));
