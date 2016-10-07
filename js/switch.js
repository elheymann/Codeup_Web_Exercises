"use strict";

var luckyNumber = Math.floor(Math.random() * 6);
var receipt = 60;
var discountedAmount;

switch (luckyNumber) {
    case 0:
        discountedAmount = receipt;
        break;
    case 1:
        discountedAmount = receipt * .9;
        break;
    case 2:
        discountedAmount = receipt * .75;
        break;
    case 3:
        discountedAmount = receipt * .6;
        break;
    case 4:
        discountedAmount = receipt * .5;
        break;
    case 5:
        discountedAmount = 0;
        break;
}

console.log("Your lucky number is: " + luckyNumber + " Your Price is: $" + receipt + " Your Discounted Amount is: $"
    + discountedAmount);

var monthNumber = Math.floor(Math.random()* 12) +1;
var month;

switch (monthNumber) {
    case 1:
        month = "January";
        break;
    case 2:
        month = "February";
        break;
    case 3:
        month = "March";
        break;
    case 4:
        month = "April";
        break;
    case 5:
        month = "May";
        break;
    case 6:
        month = "June";
        break;
    case 7:
        month = "July";
        break;
    case 8:
        month = "August";
        break;
    case 9:
        month = "September";
        break;
    case 10:
        month = "October";
        break;
    case 11:
        month = "November";
        break;
    case 12:
        month = "December";
        break
}

console.log(month +"'s month number is " + monthNumber);