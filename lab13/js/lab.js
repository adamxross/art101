// // index.js - Loops
// Author: Adam Ross
// Date: May 2025

//function

let thadogs = document.getElementById("button");
thadogs.addEventListener("click", function () {
    for (i = 1; i <= 200; i++) {
        if (i % 15 == 0) {
            console.log("FizzBuzz");
            $("#output").append("<p>" + "FizzBuzz" + "</p>");
        } else if (i % 21 == 0) {
            console.log("FizzBoom")
            $("#output").append("<p>" + "FizzBoom" + "</p>");
        } else if (i % 35 == 0) {
            console.log("BuzzBoom")
            $("#output").append("<p>" + "FizzBuzz" + "</p>");
        } else if (i % 105 == 0) {
            console.log("FizzBuzzBOOM")
            $("#output").append("<p>" + "FizzBuzzBOOM" + "</p>");
        } else if (i % 3 == 0) {
            console.log("Fizz");
            $("#output").append("<p>" + "Fizz" + "</p>");
        } else if (i % 5 == 0) {
            console.log("Buzz");
            $("#output").append("<p>" + "Buzz" + "</p>");
        } else if (i % 7 == 0) {
            console.log("Boom");
            $("#output").append("<p>" + "Boom" + "</p>");
        } else {
            console.log(i);
            $("#output").append("<p>" + i + "</p>");
        }
   }

})

