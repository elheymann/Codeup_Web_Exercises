(function () {
    "use strict";

    var names = ['Eddie', 'Emily', 'Elyse', 'Ethan'];

    for (var i = 0; i < names.length; i++) {                //
        console.log("The name at index " + i + " is " + names[i]);
    }

    names.forEach(function (element, index, array) {
        console.log("The name at index " + index + " is: " + element);
    })
})();


var grades = [100, 80, 90, 80, 50];
function average(grades) {
    var sumOfGrades = 0;
    for (var i = 0; i < grades.length; i++) {
        sumOfGrades += grades[i];
    }
    return sumOfGrades / grades.length;
}

var grade = average(grades);
console.log("You made a grade of " + grade);


function anyFunction() {
}

anyFunction(3);


//in class exercise below

//used this site for assistance http://www.w3resource.com/javascript-exercises/javascript-function-exercise-5.php
//write a function that returns a new array of strings with the first letter uppercase, take an array
//of strings containing names in lowercase and uppercase only the first character
//instructor answer:
//to break it down, start with not looking at a string, start with one variable
//var name = "bobby";
//var firstLetterCapitalized = name[0].toUpperCase;   --- this gets first letter out and Capitalized
//var restOfString = name.substring(1, name.substring(1, name.length));
//now make the solution after doing it to one name
//   var name = ["john", "paul", "ringo", "george", "yoko"];
//
//    to make it a function to call all the time create generic function name
//   function capitalizeFirstLetterOfEachString (arrayOfStrings){
//      arrayOfStrings.forEach(function(string, index){
//          var firstLetterCapitalized = string[0].toUpperCase;
//          var restOfString = string.substring(1, name.substring(1, string.length));
//          var fullString = firstLetterCapitalized + restOfString;
//          arrayOfStrings[index] = fullString;
//   });
//      return arrayOfStrings;
// }
//   names = capitalizeFirstLetterOfEachString(names);
//   console.log(names);
function uppercase() {
    var name = ["john", "paul", "ringo", "george", "yoko"];
    var upperCase = [];

    for (var i = 0; i < name.length; i++) {
        upperCase.push(name[i].charAt(0).toUpperCase() + name[i].slice(1));
    }
    return upperCase.join(" ");

}

console.log(uppercase());
//used this site for the following problem http://stackoverflow.com/questions/34131456/multiply-each-values-in-array-with-javascript

function product() {
    var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    var product = 1;
    for (var i = 0; i < numbers.length; i++) {
        product *= numbers[i];
    }
    return product;
}
console.log(product());
//string containing the HTML necessary for an unordered list with an <li> for each person on your names array

// instructor's answer:
//  function listify(arrayOfStrings) {
//      var htmlContent = "";
//      htmlContent += "<ul>";
//      arrayOfStrings.forEach(function(string){
//          htmlContent += "<li>" + string + "</li>";
//      });
//
//      htmlContent += "</ul>";
//      return htmlContent;
//
//  }
//
//
//
//



//homework
//
// take an array of strings containing all the states
// and return only states that start w/ letter T

//make another function that returns a new array of all the states >= two "s" characters


// make a function that squares each number on an array
//  take an array of numbers and make a forEach that multiplies each number by itself
// function should return the arrayOfSquares


// write a function that takes an array of lowercase names
// Uppercase the first letter of each name
// and returns only the names that start with "Y"

//  write a function that takes an array of numbers 1-10
// return the sum of only the numbers divisible by 3



'use strict';

var shapes, names, i, htmlTable;

shapes = ['square', 'rectangle', 'circle', 'triangle'];

names = ['Barry', 'Jessica', 'Clark'];



function createHtmlTable(items) {

    var htmlTable = '<table>';

    for (i = 0; i < items.length; i++) {

        htmlTable += '<tr><td>' + (i + 1) + '</td><td>' + items[i] + '</td></tr>';

    }

    htmlTable += '</table>';

    return htmlTable;

}
spl
function itemsMatching(items, text) {

    var itemsMatched = [];

    for (i = 0; i < items.length; i++) {

        if (items[i].toString().toLowerCase().indexOf(text) !== -1) {

            itemsMatched.push(items[i]);

        }

    }

    return itemsMatched;

}

var shapesWithC = itemsMatching(shapes, "c");

htmlTable = createHtmlTable(shapesWithC);

console.log(htmlTable);



var namesWithC = itemsMatching(names, "c");

htmlTable = createHtmlTable(namesWithC);

console.log(htmlTable);