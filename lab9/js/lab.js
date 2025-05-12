// // index.js - Data & Variables
// Author: Adam Ross
// Date: May 2025

$("#challenge").append("<button id='button-challenge'>Make Special</button>");

$("#button-challenge").click(function(){
    $("#challenge").toggleClass("special");
});

$("#problems").append("<button id='button-problems'>Make Special</button>");

$("#button-problems").click(function(){
    $("#problems").toggleClass("special");
});

$("#reflection").append("<button id='button-reflection'>Make Special</button>");

$("#button-reflection").click(function(){
    $("#reflection").toggleClass("special");
});

$("#results").append("<button id='button-results'>Make Special</button>");

$("#button-results").click(function(){
    $("#results").toggleClass("special");
});