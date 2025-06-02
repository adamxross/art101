// // index.js - Data & Variables
// Author: Adam Ross
// Date: May 2025

function generateRandomText() {
    const text = "The purple platypus pirouetted perfectly on a patch of popcorn while juggling jellybeans, reciting Shakespeare, and dodging flying tacos launched by a mischievous marmot riding a unicycle through a thunderstorm of glitter and bubblegum confetti.";
    const randLen = Math.floor(Math.random() * 98) + 3;
    const randStart = Math.floor(Math.random() * (text.length - randLen + 1));
    return text.substring(randStart, randStart + randLen);
  }
  
  // Click listener for button
  $(document).ready(function() {
    $('#make-convo').on('click', function() {
      const newText = generateRandomText();
      $('#output').append(`<div class="text"><p>${newText}</p></div>`);
    });
  });




// buttons
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