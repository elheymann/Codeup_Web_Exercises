(function(){
    "use strict";




    // TODO: Create person object
    // TODO: Create firstName and lastName properties in your person object; assign your name to them
    var person = {};
    person.firstName = "Eunice";
    person.lastName = "Heymann";

    // TODO: Add a sayHello method to the person object that
    //       alerts a greeting using the firstName and lastName properties
    person.sayHello = function () {
        console.log("Hello " + this.firstName + " " + this.lastName + " !");
    };
   person.sayHello();

    // Say hello from the person object.
})();