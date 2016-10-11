"use strict";
(function () {
    var myNameIs = 'Eunice'; // TODO: Fill in your name here.

    function sayHello(name) {
        console.log("Hello " + name);
    }

    sayHello(myNameIs);

    // TODO:
    // Create a function called 'sayHello' that takes a parameter 'name'.
    // When called, the function should log a message that says hello from the passed in name.

    // TODO: Call the function 'sayHello' passing the variable 'myNameIs' as a parameter.

    // Don't modify the following line
    // It generates a random number between 1 and 100 and stores it in random
    var random = Math.floor((Math.random() * 100) + 1);

    console.log("Random number is: " + random.toString());

    function isOdd(number) {
        (number % 2 === 1) ? console.log("Number is odd") : console.log("Number is even");
        // usually don't console.log inside function
    }

    // TODO:
    // Create a function called 'isOdd' that takes a number as a parameter.
    // The function should use the ternary operator to log a message.
    // The log should tell the number passed in and whether it is odd or not.
    isOdd(random);
    //TODO: Call the function 'isOdd' passing the variable 'random' as a parameter.

})();

function multiply(a, b) {
    return a * b;
}
console.log(multiply(10, 5));

function add(a, b) {
    return a + b;
}
console.log(add(5, 5));

function subtract(a, b) {
    return a - b;
}

console.log(subtract(10, 5));

function divide(a, b) {
    return a / b;
}

console.log(divide(10, 5));


function square(number) {
    return multiply(number, number);
}
console.log(square(5));


function sumOfSquares(a, b) {
    return add(square(a), square(b));
}
console.log("Sum of Squares" + sumOfSquares(2, 4));

//  function isNumeric(input) {
//   return !isNaN(input);
// }

//insert in functions if/else statements
//  if(isNumeric(a) && isNumeric(b))


