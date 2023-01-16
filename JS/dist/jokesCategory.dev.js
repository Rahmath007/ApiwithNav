"use strict";

function getJokes(cat, target) {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://api.chucknorris.io/jokes/random?category=" + cat);

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

document.getElementById("dev").addEventListener("click", function (e) {
  getJokes(e.target.id, e.target.dataset.target);
});
document.getElementById("animal").addEventListener("click", function (e) {
  getJokes(e.target.id, e.target.dataset.target);
});
document.getElementById("science").addEventListener("click", function (e) {
  getJokes(e.target.id, e.target.dataset.target);
});
document.getElementById("explicit").addEventListener("click", function (e) {
  getJokes(e.target.id, e.target.dataset.target);
});