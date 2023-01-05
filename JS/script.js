
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

function parseResponse(json){
    document.getElementById("data").innerHTML = "<br>" + json["value"] + "</br>";
}

document.getElementById("logo").addEventListener("click", function() {randomFact();
});