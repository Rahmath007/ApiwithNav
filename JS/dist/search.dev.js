"use strict";

// Get the search form and input elements
var searchForm = document.getElementById("search-form");
var searchInput = document.getElementById("search-input"); // Get the search results container element

var searchResults = document.getElementById("search-results"); // Get the jokes list element

var jokesList = document.getElementById("jokes"); // Handle the search form submission

searchForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the form from reloading the page
  // Send the search request

  fetch("https://api.chucknorris.io/jokes/search?query=".concat(encodeURIComponent(searchInput.value))).then(function (response) {
    return response.json();
  }) // Parse the response as JSON
  .then(function (data) {
    // The response data contains the search results
    console.log(data); // Clear the jokes list

    jokesList.innerHTML = ""; // Add the jokes to the list

    var max_jokes = data.result.slice(0, 5);
    max_jokes.forEach(function (joke) {
      jokesList.innerHTML += "<li>".concat(joke.value, "</li>");
    });
    searchResults.style.display = "block";
  })["catch"](function (error) {
    return console.error(error);
  }); // Log any errors to the console
}); // Hide the search results container when the search input is empty

searchInput.addEventListener("input", function () {
  if (!searchInput.value) {
    searchResults.style.display = "none";
  }
});