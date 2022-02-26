
var searchBtn = document.getElementById("search-btn")
var cityName = document.getElementById("city-name");
var geocodingUrl = "http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&appid=e0d9ee6c1369f1e9f7efbfb5647c00b1"
var oneCallUrl = "https://api.openweathermap.org/data/2.5/onecall?units=imperial?lat={lat}&lon={lon}&appid=e0d9ee6c1369f1e9f7efbfb5647c00b1"

searchBtn.addEventListener("click", function(){
    console.log(cityName.value);
});


