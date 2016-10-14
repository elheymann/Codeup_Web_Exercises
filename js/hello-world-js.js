'use strict';

/*
 * How many times a lucky number is repeated for every 100 customers?
 */
var luckyNumber;
var i = 1;

while (i < 100) {
    luckyNumber = Math.floor(Math.random()* 6);
}

// The output should be something like

// 0 appeared 10 times
// 1 appeared 20 times
// 2 appeared 15 times
// 3 appeared 35 times
// 4 appeared 4 times
// 5 appeared 16 times

// The total should be 100

/*one solution that can help is:
*

* How many times a lucky number is repeated for every 100 customers?



var luckyNumber;

var numbersArray = [];

var sortedNumbersArray = numbersArray.sort();

var zero = [];

var one = [];

var two = [];

var three = [];

var four = [];

var five = [];

for ( var i=0; i <=100; i++) {

    luckyNumber = Math.floor(Math.random()* 6);

    numbersArray.push(luckyNumber);

}

console.log(numbersArray);

sortedNumbersArray.forEach(function(number,index,array) {

    if (number == 0) {

        zero.push(number)

    } else if (number == 1) {

        one.push(number)

    } else if (number == 2) {

        two.push(number)

    } else if (number == 3) {

        three.push(number)

    } else if (number == 4) {

        four.push(number)

    } else if (number == 5) {

        five.push(number)

    }

});

console.log("0 appeared " + zero.length + " times.");

console.log("1 appeared " + one.length + " times.");

console.log("2 appeared " + two.length + " times.");

console.log("3 appeared " + three.length + " times.");

console.log("4 appeared " + four.length + " times.");

console.log("5 appeared " + five.length + " times."); */




/* can also do a switch statement

var count0 = 0, count 1 = 0, etc, etc
var i = 1;

 while (i < 100) {
 luckyNumber = Math.floor(Math.random()* 6);
 switch(luckNumber){
 case 0:
 count0++;
 break;
 case 1:
 count1++;
 break;
 etc
 etc
 }
 */

/* var count0 like above with
    var counters = [0, 0, 0, 0, 0, 0];
    while...{
    luckyNumber...
    counters[luckyNumber]++;
    i++;
    }
    console log each one with count1 or counters[0]
 */