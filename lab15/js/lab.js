// // index.js - Loops
// Author: Adam Ross
// Date: Jun 2025

// Using the core $.ajax() method
document.getElementById("button").addEventListener("click", function() {
    $.ajax({
        url: "https://api.chucknorris.io/jokes/random",
        type: "GET",
        dataType: "json",
        success: function(data) {
            console.log(data);

            var jokeElement = document.createElement("p");
            jokeElement.textContent = data.value;

            document.getElementById("output").appendChild(jokeElement);
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log("Error:", textStatus, errorThrown);
        }
    });
});