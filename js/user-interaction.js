"use strict";


var response = "";

if (response === null) {
    response = prompt('What is your name?');
} else{
    alert("Welcome " + response + "!");
}

//var userName;
//do {
 //   userName = prompt("What's your name?")
//} while (username == null || userName.trim() == "");

//var pizza = confirm("Do you like pizza?");
//if (pizza) {
//alert("Totally Awesome " + response + " !");
//}else {
//alert("Bummer, " + response + " !");
//};

var pizza = prompt("Do you like pizza?");
if (pizza === "yes") {
    alert("Totally Awesome " + response + " !");
} else {
    alert("Bummer, " + response + " !");
}



"use strict";

// TODO: Ask the user for their name.
//       Keep asking if an empty input is provided.

// TODO: Show an alert message that welcomes the user based on their input.

// TODO: Ask the user if they like pizza.
//       Based on their answer show a creative alert message.
