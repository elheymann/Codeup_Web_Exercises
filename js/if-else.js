
"use strict";

var studentGrades = [70 + 80 + 90];


if ((studentGrades / 3) > 80) {
    console.log("You're awesome");
} else {
    console.log("You need to practice more");
}

var amountBeforeDiscountRyan = 250;
var amountBeforeDiscountCameron = 180;
var amounttBeforeDiscountGeorge = 320;
var discount = .8;

if (amountBeforeDiscountCameron >= 200){
    console.log("Cameron " + "$" + amountBeforeDiscountCameron + " $" + (amountBeforeDiscountCameron * discount));
} else
    console.log("Cameron" + " " + "$" + amountBeforeDiscountCameron + " $" + amountBeforeDiscountCameron);

if (amountBeforeDiscountRyan >= 200){
    console.log("Ryan " + "$" + amountBeforeDiscountRyan + " $" + (amountBeforeDiscountRyan * discount));
} else
    console.log("Ryan " + "$" + amountBeforeDiscountRyan + " $" + amountBeforeDiscountRyan);

if (amounttBeforeDiscountGeorge >= 200){
    console.log("George " + "$" + amounttBeforeDiscountGeorge + " $" + (amounttBeforeDiscountGeorge * discount));
} else
    console.log("George " + "$" + amounttBeforeDiscountGeorge + " $" + amounttBeforeDiscountGeorge);


var flipACoin = Math.floor(Math.random()* 2);

if (flipACoin == 1) {
    console.log("Buy a house");
} else {
    console.log("Buy a car");
}