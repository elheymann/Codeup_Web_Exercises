/**
 * Created by EuniceHeymann on 10/13/16.
 */
(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    console.log(planetsString);
    var planetsArray = planetsString.split(',');
    // TODO: Convert planetsString to an array, save it to planetsArray.
    console.log(planetsArray);


    var planetsString = planetsArray.join('<br />');
    console.log(planetsString);



    // TODO: Create a string with <br> tags between each planet. console.log() your results.
    //       Why might this be useful?


    // Bonus: Create a second string that would display your planets in an undordered list.
    //        You will need an opening AND closing <ul> tags around the entire string, and <li> tags around each planet.
    //        console.log() your results.
})();