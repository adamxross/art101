// // index.js - Data & Variables
// Author: Adam Ross
// Date: May 2025

// lab content

function sortUsername() {
    var userName = window.prompt('What is your name?');
    console.log("username = ", userName);
    // split the string via array
    var nameArray = userName.split('');
    console.log("nameArray = ", nameArray);
    // sort the array
    var nameArraySort = nameArray.sort();
    console.log("nameArraySort = ", nameArraySort);
    // add the array back into string
    var nameSorted = nameArraySort.join('');
    console.log("nameSorted = ", nameSorted);
    // result
    return nameSorted;
} 

// output

document.getElementById('output').textContent = "HAHA made your name weird: " + sortUsername();