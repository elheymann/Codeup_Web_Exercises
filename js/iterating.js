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



function anyFunction () {}

anyFunction(3);
