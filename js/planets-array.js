(function(){
    "use strict";

    // TODO: Create an array holding the names of the eight planets in our solar system in order, starting closest to the sun.
    var planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune', 'Planet Nine'];


    // function for logging the planets array
    function logPlanets() {
        console.log("Here is the list of planets:");
        console.log(planets);
        console.log("Next step: ");
    }

    logPlanets();

    planets.unshift('The Sun');
    console.log('Adding "The Sun" to the beginning of the planets array.');
    // TODO: Read the console.log() statement above. Write code to perform the step it describes.
    logPlanets();

    planets.push('Pluto');
    console.log('Adding "Pluto" to the end of the planets array.');
    // TODO: Read the console.log() statement above. Write code to perform the step it describes.
    logPlanets();

    var remove = planets.shift();
    console.log('Removing "The Sun" from the beginning of the planets array.');
    // TODO: Read the console.log() statement above. Write code to perform the step it describes.
    logPlanets();

    remove = planets.pop();
    console.log('Removing "Pluto" from the end of the planets array.');
    // TODO: Read the console.log() statement above. Write code to perform the step it describes.
    logPlanets();

    var index = planets.indexOf('Earth');

    console.log('Finding and logging the index of "Earth" in the planets array.');

    console.log(index);
    // TODO: Read the console.log() statement above. Write code to perform the step it describes.

    planets.splice(planets.indexOf('Mars'), 1);
    console.log('Using splice to remove the planet after "Earth".');
    // TODO: Read the console.log() statement above. Write code to perform the step it describes.
    logPlanets();

    planets.splice(planets.indexOf('Earth') + 1, 0, 'Mars')
    console.log('Using splice to add back the planet after "Earth".');
    // TODO: Read the console.log() statement above. Write code to perform the step it describes.
    logPlanets();

    planets.reverse();
    console.log("Reversing the order of the planets array.");
    // TODO: Read the console.log() statement above. Write code to perform the step it describes.
    logPlanets();

    planets.sort();
    console.log("Sorting the planets array.");
    // TODO: Read the console.log() statement above. Write code to perform the step it describes.
    logPlanets();
})();

//in class exercise

var arrayOfNumbers = [1, 2, 3, 4, 5];
for(var i = 0; i < arrayOfNumbers.length; i++){
    console.log("The element at index " + i + " is " + arrayOfNumbers[i]);
}

arrayOfNumbers.forEach(function(element, index, array){
    console.log("The element at index " + index + " is " + element);
});

newArray = [];
[1, 2, 3, 4, 5].forEach(function(element, index, array) {
    newArray.push(element + 1);
});

arrayOfEvens = [];
[1, 2, 3, 4, 5].forEach(function(element, index, array) {
    if(isEven(element)) {
        arrayOfEvens.push(element);
    }

});

var sum = 0;
[1, 2, 3, 4, 5].forEach(function(element, index, array) {
    sum += element;
});



// take an array of strings containing all the states
// and return only states that start w/ letter T


// states = ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware",
// "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine",
// "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada",
// "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon",
// "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia",
// "Washington", "West Virginia", "Wisconsin", "Wyoming"

//var i, statesThatStartWithLetterT;
//
//  for (i = 0, i < states.length, i++) {
//        if (){
//        }
//  }