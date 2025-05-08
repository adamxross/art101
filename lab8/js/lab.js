// // index.js - Data & Variables
// Author: Adam Ross
// Date: May 2025

var arrayMe = [1,2,3,4]

function arrayCalc(x){
    let results = x * 5;
    return results;
}

arrayMe.map(arrayCalc);

arrayMe.map(function(x){
    let results = x * 5;
    return results;
})

var mapResults = arrayMe.map(arrayCalc);

console.log("Results: ", mapResults);

$("#output").html(mapResults);