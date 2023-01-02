function randomFact(){
    var xmlhttp = new XMLHttpRequest();
    var url = "https://api.chucknorris.io/jokes/random";
    xmlhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status ===200){
            //http 200 response //we get JSON response
            var json = JSON.parse(this.responseText);
            parseResponse(json);
        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

function randomFact1(){
    var xmlhttp = new XMLHttpRequest();
    var url = "https://api.chucknorris.io/jokes/random?category=dev";
    xmlhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status ==200){
            //http 200 response //we get JSON response
            var json = JSON.parse(this.responseText);
            parseResponse(json);
        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

function randomFact2(){
    var xmlhttp = new XMLHttpRequest();
    var url =  "https://api.chucknorris.io/jokes/random?category=animal";
    xmlhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status ==200){
            //http 200 response //we get JSON response
            var json = JSON.parse(this.responseText);
            parseResponse(json);
        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

function randomFact3(){
    var xmlhttp = new XMLHttpRequest();
    var url =  "https://api.chucknorris.io/jokes/random?category=science";
    xmlhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status ==200){
            //http 200 response //we get JSON response
            var json = JSON.parse(this.responseText);
            parseResponse(json);
        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}


  //Added search for joke but its not working yet //
function randomFact4(){
    var xmlhttp = new XMLHttpRequest();
    var url =  "https://api.chucknorris.io/jokes/random?category=explicit";
    xmlhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status ==200){
            //http 200 response //we get JSON response
            var json = JSON.parse(this.responseText);
            parseResponse(json);
        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

function parseResponse(json){
    document.getElementById("data").innerHTML = "<br>" + json["value"] + "</br>";
}

document.getElementById("button").addEventListener("click", function() {randomFact();
});

document.getElementById("button1").addEventListener("click", function() {randomFact1();
});

document.getElementById("button2").addEventListener("click", function() {randomFact2();
});

document.getElementById("button3").addEventListener("click", function() {randomFact3();
});

document.getElementById("button4").addEventListener("click", function() {randomFact4();
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