// Define the `randomFact` function
function randomFact(){
    // Create a new XMLHttpRequest object
    const xmlhttp = new XMLHttpRequest();
    // Set the URL for the request
    const url = "https://api.chucknorris.io/jokes/random";
    
    // Set up an event listener that will be called when the request state changes
    xmlhttp.onreadystatechange = function(){
      // Check if the request is complete and the status is 200 (OK)
    if(this.readyState == 4 && this.status ===200){
        // Parse the response text as JSON
        const json = JSON.parse(this.responseText);
        // Call the `parseResponse` function and pass it the JSON object
        parseResponse(json);
    }
    };
    
    // Open the request
    xmlhttp.open("GET", url, true);
    // Send the request
    xmlhttp.send();
}

  // Define the `parseResponse` function
function parseResponse(json){
    // Get the element with the id "data"
    const dataElement = document.getElementById("data");
    // Update the inner HTML of the element to include the random fact
    dataElement.innerHTML = "<br>" + json["value"] + "</br>";
}

  // Get the element with the id "logo"
const logoElement = document.getElementById("logo");
  // Set up an event listener that will be called when the element is clicked
logoElement.addEventListener("click", function() {
    // Call the `randomFact` function when the element is clicked
    randomFact();
});