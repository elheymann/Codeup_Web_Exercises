"use strict";

// This is how you get a random number between 50 and 100
var allCones = Math.floor(Math.random() * 50) + 50;
// This is how you get a random number between 1 and 5


do {
    var cones = Math.floor(Math.random() * 5) + 1;
    if (allCones >= cones) {
        console.log("Customer bought " + cones + "/ " + allCones + " cones!");
        allCones = allCones - cones; //can also code allCones -= cones
    } else  {
        console.log("Cannot sell you " + cones + " I only have " + allCones + " ...");
    }
} while (allCones !== 0);
console.log("Yay! I sold them all!");


