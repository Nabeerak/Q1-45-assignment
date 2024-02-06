/*Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
• Look closely at your results, and make sure you understand why each line evaluates to True or False.
• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.*/
//test 1: (True)
let city = "lahore";
console.log("Is city == lahore ? I predict true");
console.log(city == "lahore");
//test 2: (true)
let numbers = 3 + 5;
console.log("is number == 8? I predict true");
console.log(numbers == 8);
//test 3: (true)
let car = 'subaru';
console.log("is car != 'subaru' I predict true");
console.log(car != 'subaru');
//test 4: (true)
function predict(pt) {
    return pt % 2 == 0;
}
;
console.log("is answer equals to 0, I predict it false");
console.log(predict(2));
//test 5: (true)
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru');
//test 6: (false)
console.log("is car != 'subaru'? I predict false.");
console.log(car != "subaru");
//test 7: (false)
function zero(pt) {
    return pt % 2 == 0;
}
;
console.log("is answer equals to 0? I predict it false");
console.log(zero(5));
//test 8: (false)
console.log("is index 3 of 'subaru' equals to 'c'? I predict false");
console.log(car.charAt(3) === 'c');
//test 9: (false)
console.log("is index 3 unequal to 'b'? I predict false");
console.log(car.charAt(2) != 'b');
//test 10: (false)
console.log("is length of 'subaru' greater than 6 ? I predict false");
console.log(car.length > 6);
export {};
