"use strict";

// Define the `randomFact` function
function randomFact() {
  // Create a new XMLHttpRequest object
  var xmlhttp = new XMLHttpRequest(); // Set the URL for the request

  var url = "https://api.chucknorris.io/jokes/random"; // Set up an event listener that will be called when the request state changes

  xmlhttp.onreadystatechange = function () {
    // Check if the request is complete and the status is 200 (OK)
    if (this.readyState == 4 && this.status === 200) {
      // Parse the response text as JSON
      var json = JSON.parse(this.responseText); // Call the `parseResponse` function and pass it the JSON object

      parseResponse(json);
    }
  }; // Open the request


  xmlhttp.open("GET", url, true); // Send the request

  xmlhttp.send();
} // Define the `parseResponse` function


function parseResponse(json) {
  // Get the element with the id "data"
  var dataElement = document.getElementById("data"); // Update the inner HTML of the element to include the random fact

  dataElement.innerHTML = "<br>" + json["value"] + "</br>";
} // Get the element with the id "logo"


var logoElement = document.getElementById("logo"); // Set up an event listener that will be called when the element is clicked

logoElement.addEventListener("click", function () {
  // Call the `randomFact` function when the element is clicked
  randomFact();
});