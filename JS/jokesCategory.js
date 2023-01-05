document.getElementById("new").addEventListener("click", function() {
    // Make a GET request to the Chuck Norris API using AJAX
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api.chucknorris.io/jokes/random");
    xhr.onload = function() {
    if (xhr.status === 200) {
        // Parse the response as JSON
        var response = JSON.parse(xhr.responseText);
        // Set the text of the element with the id "joke" to the joke
        document.getElementById("joke").innerHTML = response.value;
    }
    };
    xhr.send();
});

document.getElementById("new1").addEventListener("click", function() {
    // Make a GET request to the Chuck Norris API using AJAX
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api.chucknorris.io/jokes/random?category=dev");
    xhr.onload = function() {
    if (xhr.status === 200) {
        // Parse the response as JSON
        var response = JSON.parse(xhr.responseText);
        // Set the text of the element with the id "joke" to the joke
        document.getElementById("joke1").innerHTML = response.value;
    }
    };
    xhr.send();
});

document.getElementById("new2").addEventListener("click", function() {
    // Make a GET request to the Chuck Norris API using AJAX
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api.chucknorris.io/jokes/random?category=animal");
    xhr.onload = function() {
    if (xhr.status === 200) {
        // Parse the response as JSON
        var response = JSON.parse(xhr.responseText);
        // Set the text of the element with the id "joke" to the joke
        document.getElementById("joke2").innerHTML = response.value;
    }
    };
    xhr.send();
});

document.getElementById("new3").addEventListener("click", function() {
    // Make a GET request to the Chuck Norris API using AJAX
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api.chucknorris.io/jokes/random?category=science");
    xhr.onload = function() {
    if (xhr.status === 200) {
        // Parse the response as JSON
        var response = JSON.parse(xhr.responseText);
        // Set the text of the element with the id "joke" to the joke
        document.getElementById("joke3").innerHTML = response.value;
    }
    };
    xhr.send();
});

document.getElementById("new4").addEventListener("click", function() {
    // Make a GET request to the Chuck Norris API using AJAX
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api.chucknorris.io/jokes/random?category=explicit");
    xhr.onload = function() {
    if (xhr.status === 200) {
        // Parse the response as JSON
        var response = JSON.parse(xhr.responseText);
        // Set the text of the element with the id "joke" to the joke
        document.getElementById("joke4").innerHTML = response.value;
    }
    };
    xhr.send();
});
