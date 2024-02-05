$(document); function crap () {
    var input = document.querySelectorAll("input");
    var searchBtn = document.querySelectorAll("search-button")
    var geocoder = document.querySelectorAll("geocoder")
    var forecast = document.querySelectorAll("forecast")
    var today = document.querySelectorAll("today")
    var d1 = document.querySelectorAll("d1")
    var d2 = document.querySelectorAll("d2")
    var d3 = document.querySelectorAll("d3")
    var d4 = document.querySelectorAll("d4")
    var d5 = document.querySelectorAll("d5")

    searchBtn.addEventListener("click"); function forecast () {
        fetch(geocoder)
        .then(response => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json();
          })
          .then(data => {
            console.log(data);
          })
          .catch(error => {
            console.error('Error:', error);
          });
        };

}