// // index.js - Data & Variables
// Author: Adam Ross
// Date: May 2025

// Sorts the characters of a string in alphabetical order.
function sortString(inputString) {
    return inputString.split('').sort().join('');
  }
  
  $(document).ready(function () {
    $("#submit").click(function () {
      const userName = $("#user-name").val(); // Get value from input field
      const userNameSorted = sortString(userName); // Pass it to the function
      $("#output").html('<p>' + userNameSorted + '</p>');
    });
  });
  
  