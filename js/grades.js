"use strict";


//Implement the student's grades exercise, but now getting the input from a user.
//  Using a for loop to prompt the user for three grades.
// After reading those 3 grades, calculate the student's grade average
//Using an alert show the message You're awesome if the average is greater than or equals to 80. Show You need to practice more otherwise
//All this code should be inside of a function named average3Grades.
// used http://stackoverflow.com/questions/15047140/javascript-prompt-number-and-continue-prompting-if-answer-is-wrong/15047174#15047174

function getNumericGrade() {
    var grades = parseInt(prompt("Please enter your student grade from 0 to 100: "));

    while (isNaN(grades) || grades > 100 || grades < 0) {
        grades = parseInt(prompt("Please enter your student grade from 0 to 100: "));
        //console.log(grades);
        //console.log(typeof grades);
    }
    return grades;
}

//function average3Grades() {
//    var total = 0;      //set it to 0 so that it is a number
//    for (var i = 0; i < 3; i++) {
//        // do {
//        //     grades = parseInt(prompt("Please enter your student grade from 0 to 100", ""), + 10);
//        // } while (isNaN(grades) || grades > 100 || grades < 0);
//        total = total + getNumericGrade();
//        //can use console.log to figure out total
//
//    }
//
//    return total / 3; //create a variable for the amount of grades inputted
//}
// can make do while a function


//if (average3Grades() >= 80) {                //use () after name to properly call the function
//    alert("You are awesome!");
//} else {
//    alert("You need to practice!");
//}

//   In the same JS file create another function named genericGradesAverage
//    Instead of a for use a do while.
//    Use a confirm prompt to ask the student for more grades Add another grade? (Ok, Cancel). If the user clicks on Cancel stop asking for grades and calculate the average.
//   The rest of the logic remains the same.
//   Call the new function instead of average3Grades.
//my attempt below...
//var moreGrades = confirm ("Do you want to input more grades?");
//if (moreGrades === "Yes" || "null" || ""){
//    average3Grades();
//} else {
//    alert("The average remains: " + average3Grades());
//}


function genericGradesAverage() {
    var total = 0;
    var counter = 0;
    var userWantsToAddAnotherGrade;
    var average;
    do {
        total += getNumericGrade();
        userWantsToAddAnotherGrade = confirm("Do you want to add another grade?");
        counter++;
    } while (userWantsToAddAnotherGrade);
    average = total / counter;
    return average;
}
var finalGrade = genericGradesAverage();
if (finalGrade >= 80) {
    alert("You are awesome!");
} else {
    alert("You need to practice!");
}
//functions:  input --> sequence of steps --> output
//calling the sequence of steps to produce the output prescribed by its process