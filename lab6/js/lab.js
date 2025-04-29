// index.js - Arrays and Objects Lab
// Author: Adam Ross
// Date: Apr 2025

// Array & Object
let myTransport = ["E-Bike", "Bus", "Car"];

let myMainRide = {
  make : "Trek",
  model : "FX+2",
  color : "blue",
  year : "2022",
  age : 3
  };
  
  

// Output
document.writeln("My regular transport: " + myTransport + "<br>");

document.writeln("My daily ride: <pre>", 
  JSON.stringify(myMainRide, null, '\t'), "</pre>");


// Constants

// Functions

// this is an example function and this comment tells what it doees and what parameters are passed to it.
function myFunction(param1, param2) {
  // some code here
  // return results;
}

function main() {
  console.log("Main function started.");
  // the code that makes everything happen
}

// let's get this party started
main();
