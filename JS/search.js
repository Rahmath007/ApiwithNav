// Get the search form and input elements

const searchForm = document.getElementById("search-form");

const searchInput = document.getElementById("search-input");

// Get the search results container element

const searchResults = document.getElementById("search-results");

// Get the jokes list element

const jokesList = document.getElementById("jokes");

// Handle the search form submission

searchForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent the form from reloading the page

    // Send the search request

    fetch(
        `https://api.chucknorris.io/jokes/search?query=${encodeURIComponent(
            searchInput.value
        )}`
    )
        .then((response) => response.json()) // Parse the response as JSON

        .then((data) => {
            // The response data contains the search results

            console.log(data);

            // Clear the jokes list

            jokesList.innerHTML = "";

            // Add the jokes to the list

            let max_jokes = data.result.slice(0,5); 
            max_jokes.forEach((joke) => {
                jokesList.innerHTML += `<li>${joke.value}</li>`;
            });

            // data.result.forEach((joke) => {
            //     jokesList.innerHTML += `<li>${joke.value}</li>`;
            // });

            // Display the search results container

            searchResults.style.display = "block";
        })

        .catch((error) => console.error(error)); // Log any errors to the console
});

// Hide the search results container when the search input is empty

searchInput.addEventListener("input", () => {
    if (!searchInput.value) {
        searchResults.style.display = "none";
    }
});