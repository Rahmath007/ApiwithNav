"use strict";

/**
 * Fetches a random joke from the chucknorris.io API and displays it on the webpage
 * @param {string} cat - The category of the joke
 * @param {string} target - The ID of the element on the webpage where the joke will be displayed
 */
function getJokes(cat, target) {
  // Create a new instance of the XMLHttpRequest object
  var xhr = new XMLHttpRequest(); // Open a GET request to the API endpoint for jokes with the specified category

  xhr.open("GET", "https://api.chucknorris.io/jokes/random?category=" + cat); // Event handler for when the request finishes

  xhr.onload = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        // Parse the response as JSON
        var response = JSON.parse(xhr.responseText); // Set the text of the element with the id "joke" to the joke

        document.getElementById(target).innerHTML = response.value;
      } else {
        // Handle the error
        document.getElementById(target).innerHTML = "Error: " + xhr.status + " " + xhr.statusText;
      }
    }
  };

  xhr.onerror = function () {
    // Handle the error
    document.getElementById(target).innerHTML = "Error: Unable to fetch joke";
  };

  xhr.send();
}
/*

document.getElementById("dev").addEventListener("click", function (e) {
    getJokes(e.target.id, e.target.dataset.target)
})

document.getElementById("animal").addEventListener("click", function (e) {
    getJokes(e.target.id, e.target.dataset.target)
})

document.getElementById("science").addEventListener("click", function (e) {
    getJokes(e.target.id, e.target.dataset.target)
})

document.getElementById("explicit").addEventListener("click", function (e) {
    getJokes(e.target.id, e.target.dataset.target)
})

*/

/**
 * Adds click event listeners to the buttons that fetch jokes from the API and display them on the webpage
 */


document.getElementById("dev").addEventListener("click", function (e) {
  // Pass the button's id and data-target attribute as arguments to the getJokes function
  getJokes(e.target.id, e.target.dataset.target);
});
document.getElementById("animal").addEventListener("click", function (e) {
  // Pass the button's id and data-target attribute as arguments to the getJokes function
  getJokes(e.target.id, e.target.dataset.target);
});
document.getElementById("science").addEventListener("click", function (e) {
  // Pass the button's id and data-target attribute as arguments to the getJokes function
  getJokes(e.target.id, e.target.dataset.target);
});
document.getElementById("explicit").addEventListener("click", function (e) {
  // Pass the button's id and data-target attribute as arguments to the getJokes function
  getJokes(e.target.id, e.target.dataset.target);
});