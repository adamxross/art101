// // index.js - Conditionals
// Author: Adam Ross
// Date: May 2025

//function

function sortingHat(str) {
  let length = str.length;
  let mod = length % 3;
  if (mod === 0) {
    return "Warlock";
  } else if (mod === 1) {
    return "Titan";
  } else if (mod === 2) {
    return "Hunter";
  }
}

//button
document.getElementById("button").addEventListener("click", function () {
  let name = document.getElementById("input").value;
  let classes = sortingHat(name);
  let flavor = "";
  if (classes === "Warlock") {
    flavor = "You are the intellectuals among the rest of the guardians. You know deep space magic and rely on it to defeat your enemies.";
  } else if (classes === "Hunter") {
    flavor = "You are smart, tactical, invisible. You have your knife to your enemies throat before the enemies can pull their guns.";
  } else if (classes === "Titan") {
    flavor = "You are UNSTOPPABLE. You are the shield that heals your allies and keeps out the darkness. RUN THROUGH THEM TITAN.";
  }

  let result = document.createElement("p");
  result.innerHTML = `<strong>The Traveler has chosen you to be a ${classes}!</strong><br>${flavor}`;


  document.getElementById("output").appendChild(result);
  });


