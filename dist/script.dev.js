"use strict";

/*
function randomFact(){
    const xmlhttp = new XMLHttpRequest();
    const url = "https://api.chucknorris.io/jokes/random";
    xmlhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status ===200){
            //http 200 response //we get JSON response
            const json = JSON.parse(this.responseText);
            parseResponse(json);
        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

function dev(){
    const xmlhttp = new XMLHttpRequest();
    const url = "https://api.chucknorris.io/jokes/random?category=dev";
    xmlhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status ==200){
            //http 200 response //we get JSON response
            const json = JSON.parse(this.responseText);
            parseResponse(json);
        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

function animal(){
    const xmlhttp = new XMLHttpRequest();
    const url =  "https://api.chucknorris.io/jokes/random?category=animal";
    xmlhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status ==200){
            //http 200 response //we get JSON response
            const json = JSON.parse(this.responseText);
            parseResponse(json);
        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

function science(){
    const xmlhttp = new XMLHttpRequest();
    const url =  "https://api.chucknorris.io/jokes/random?category=science";
    xmlhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status ==200){
            //http 200 response //we get JSON response
            const json = JSON.parse(this.responseText);
            parseResponse(json);
        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}


  //Added search for joke but its not working yet //
function explicit(){
    const xmlhttp = new XMLHttpRequest();
    const url =  "https://api.chucknorris.io/jokes/random?category=explicit";
    xmlhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status ==200){
            //http 200 response //we get JSON response
            const json = JSON.parse(this.responseText);
            parseResponse(json);
        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}
*/

/*
function displayJoke() {
    // Make a GET request to the Chuck Norris API
    fetch('https://api.chucknorris.io/jokes/random')
    .then(response => response.json())
    .then(data => {
        // Set the text of the element with the id "joke" to the joke
        document.getElementById("joke").innerHTML = data.value;
    });
}
*/
document.getElementById("new").addEventListener("click", function () {
  // Make a GET request to the Chuck Norris API using AJAX
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://api.chucknorris.io/jokes/random");

  xhr.onload = function () {
    if (xhr.status === 200) {
      // Parse the response as JSON
      var response = JSON.parse(xhr.responseText); // Set the text of the element with the id "joke" to the joke

      document.getElementById("joke").innerHTML = response.value;
    }
  };

  xhr.send();
});
document.getElementById("new1").addEventListener("click", function () {
  // Make a GET request to the Chuck Norris API using AJAX
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://api.chucknorris.io/jokes/random?category=dev");

  xhr.onload = function () {
    if (xhr.status === 200) {
      // Parse the response as JSON
      var response = JSON.parse(xhr.responseText); // Set the text of the element with the id "joke" to the joke

      document.getElementById("joke1").innerHTML = response.value;
    }
  };

  xhr.send();
});
document.getElementById("new2").addEventListener("click", function () {
  // Make a GET request to the Chuck Norris API using AJAX
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://api.chucknorris.io/jokes/random?category=animal");

  xhr.onload = function () {
    if (xhr.status === 200) {
      // Parse the response as JSON
      var response = JSON.parse(xhr.responseText); // Set the text of the element with the id "joke" to the joke

      document.getElementById("joke2").innerHTML = response.value;
    }
  };

  xhr.send();
});
document.getElementById("new3").addEventListener("click", function () {
  // Make a GET request to the Chuck Norris API using AJAX
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://api.chucknorris.io/jokes/random?category=science");

  xhr.onload = function () {
    if (xhr.status === 200) {
      // Parse the response as JSON
      var response = JSON.parse(xhr.responseText); // Set the text of the element with the id "joke" to the joke

      document.getElementById("joke3").innerHTML = response.value;
    }
  };

  xhr.send();
});
document.getElementById("new4").addEventListener("click", function () {
  // Make a GET request to the Chuck Norris API using AJAX
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://api.chucknorris.io/jokes/random?category=explicit");

  xhr.onload = function () {
    if (xhr.status === 200) {
      // Parse the response as JSON
      var response = JSON.parse(xhr.responseText); // Set the text of the element with the id "joke" to the joke

      document.getElementById("joke4").innerHTML = response.value;
    }
  };

  xhr.send();
});
/*
function parseResponse(response) {
    const joke = response.value;
    const jokeContainer = document.getElementById('joke-container');
    jokeContainer.innerHTML = joke;
}
*/

/*

function parseResponse(json){
    let jokeDiv;
    jokeDiv = document.getElementById("div");
    jokeDiv.innerHTML =  json["value"];document.getElementById('data').appendChild(jokeDiv);
}
*/

/*
function
parseResponse(json){
    document.getElementById("div").innerHTML = "<br>" + json["value"] + document.getElementById('data1').appendChild(jokeDiv);
}
*/

/*
document.getElementById("button").addEventListener("click", function() {randomFact();
});

document.getElementById("button1").addEventListener("click", function() {dev();
});

document.getElementById("button2").addEventListener("click", function() {animal();
});

document.getElementById("button3").addEventListener("click", function() {science();
});

document.getElementById("button4").addEventListener("click", function() {explicit();
});


/*
// Get the form element and add an event listener to it
const form = document.querySelector('#joke-form');
form.addEventListener('submit', searchJokes);

// Function to search for jokes when the form is submitted
function searchJokes(event) {
// Prevent the default form submission behavior
event.preventDefault();

// Get the search query from the form
const searchQuery = document.querySelector('#search-query').value;

// Make an API request to search for jokes using the search query
fetch(`https://api.example.com/search?q=${searchQuery}`, {
headers: {
    'Authorization': 'API_KEY'  // Replace "API_KEY" with your actual API key
    }
    })
      .then(response => response.json())  // Parse the response as JSON
    .then(data => {
        // Display the jokes to the user
        const resultsDiv = document.querySelector('#results');
        resultsDiv.innerHTML = '';  // Clear the previous search results
        data.jokes.forEach(joke => {
          // Create a new div element for each joke and append it to the results div
        const jokeDiv = document.createElement('div');
        jokeDiv.innerHTML = joke.text;
        resultsDiv.appendChild(jokeDiv);
        });
    })
    .catch(error => {
        // Handle any errors that occur during the request
        console.error(error);
    });
}

*/

/*
fetch('https://api.chucknorris.io/jokes/categories')
.then(response => response.json())
.then(categories => {
    // categories is an array of category names
    for (const category of categories) {
      // You can use the category name to create an HTML element and append it to your page
    const categoryElement = document.createElement('p');
    categoryElement.innerText = category;
    document.body.appendChild(categoryElement);
    }
});

*/