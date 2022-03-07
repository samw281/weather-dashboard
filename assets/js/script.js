var searchBtn = document.getElementById("search-btn");
var cityName = document.getElementById("city-name");
var searchForm = document.getElementById("search-form");
var currentWeather = document.querySelector(".current-weather")
var currentCity = document.getElementById("current-city")
var temp = document.getElementById("temp");
var wind = document.getElementById("wind");
var humidity = document.getElementById("humidity");
var uvi = document.getElementById("uvi");

var fiveDayH2 = document.getElementById("five-day-h2");

var day1 = document.getElementById("day-1");
var day1Date = document.getElementById("day-1-date");
var day1Temp = document.getElementById("day-1-temp");
var day1Wind = document.getElementById("day-1-wind");
var day1Humidity = document.getElementById("day-1-humidity");

var day2 = document.getElementById("day-2");
var day2Date = document.getElementById("day-2-date");
var day2Temp = document.getElementById("day-2-temp");
var day2Wind = document.getElementById("day-2-wind");
var day2Humidity = document.getElementById("day-2-humidity");

var day3 = document.getElementById("day-3");
var day3Date = document.getElementById("day-3-date");
var day3Temp = document.getElementById("day-3-temp");
var day3Wind = document.getElementById("day-3-wind");
var day3Humidity = document.getElementById("day-3-humidity");

var day4 = document.getElementById("day-4");
var day4Date = document.getElementById("day-4-date");
var day4Temp = document.getElementById("day-4-temp");
var day4Wind = document.getElementById("day-4-wind");
var day4Humidity = document.getElementById("day-4-humidity");

var day5 = document.getElementById("day-5");
var day5Date = document.getElementById("day-5-date");
var day5Temp = document.getElementById("day-5-temp");
var day5Wind = document.getElementById("day-5-wind");
var day5Humidity = document.getElementById("day-5-humidity");

var oneCallUrl =
  "https://api.openweathermap.org/data/2.5/onecall?units=imperial?lat={lat}&lon={lon}&appid=e0d9ee6c1369f1e9f7efbfb5647c00b1";

searchForm.addEventListener("submit", function (event) {
  event.preventDefault();
  var geocodingUrl =
    "https://api.openweathermap.org/geo/1.0/direct?q=" +
    cityName.value +
    "&appid=e0d9ee6c1369f1e9f7efbfb5647c00b1";
  fetch(geocodingUrl)
    .then(function (response) {
      if (response.ok) {
        console.log(response);
        response.json().then(function (data) {
          var lat = data[0].lat;
          var lon = data[0].lon;
          // var lat = lat.substring(0,4)
          // var lon = lon.substring(0,4)
          console.log(data);
          console.log(lat);
          console.log(lon);
          var oneCallUrl =
            "https://api.openweathermap.org/data/2.5/onecall?lat="+lat+"&lon="+lon+"&units=imperial&appid=e0d9ee6c1369f1e9f7efbfb5647c00b1";
          fetch(oneCallUrl)
            .then(function(response){
              if(response.ok) {
                console.log(response);
                response.json().then(function(data){
                    console.log(data)
                  currentWeather.setAttribute("style", "border: solid 1px black;")
                  currentCity.textContent = cityName.value.toUpperCase(0) +" - "+ moment().format("MM/D/YYYY")
                  document.getElementById("current-icon").src = "https://openweathermap.org/img/wn/"+data.current.weather[0].icon+"@2x.png";
                  temp.textContent = "Temp: " + data.current.temp + " F";
                  wind.textContent = "Wind: " + data.current.wind_speed + " MPH";
                  humidity.textContent = "Humidity: " + data.current.humidity + " %";
                  uvi.textContent = "UV Index: " + data.current.uvi
                  if(uvi.value <= 2){
                    uvi.setAttribute("style", "background-color: green; color: white;");
                  } 
                  if (uvi.value > 2 && uvi.value < 5) {
                    uvi.setAttribute("style", "background-color: yellow; color: white;");
                  }
                  if (uvi.value > 5 && uvi.value <= 7){
                    uvi.setAttribute("style", "background-color: orange; color: white;");
                  } 
                  
                  if (uvi.value > 7.01 ){
                    uvi.setAttribute("style", "background-color: red; color: white;");
                  }
                fiveDayH2.textContent = "5-Day Forecast:";

                day1.setAttribute("style", "background-color: #2b2d42; color: white;");
                day1Date.textContent = moment().add(1, "d").format("MM/D/YYYY");
                day1Temp.textContent = "Temp: "+data.daily[0].temp.day + " F";
                day1Wind.textContent = "Wind: "+data.daily[0].wind_speed + " MPH";
                day1Humidity.textContent = "Humidity: " + data.daily[0].humidity + " %";
                document.getElementById("day-1-icon").src = "http://openweathermap.org/img/wn/"+data.daily[0].weather[0].icon+"@2x.png";
                
                day2.setAttribute("style", "background-color: #2b2d42; color: white;");
                day2Date.textContent = moment().add(2, "d").format("MM/D/YYYY");
                day2Temp.textContent = "Temp: "+data.daily[1].temp.day + " F";
                day2Wind.textContent = "Wind: "+data.daily[1].wind_speed + " MPH";
                day2Humidity.textContent = "Humidity: " + data.daily[1].humidity + " %";
                document.getElementById("day-2-icon").src = "http://openweathermap.org/img/wn/"+data.daily[1].weather[0].icon+"@2x.png";
                
                day3.setAttribute("style", "background-color: #2b2d42; color: white;");
                day3Date.textContent = moment().add(3, "d").format("MM/D/YYYY");
                day3Temp.textContent = "Temp: "+data.daily[2].temp.day + " F";
                day3Wind.textContent = "Wind: "+data.daily[2].wind_speed + " MPH";
                day3Humidity.textContent = "Humidity: " + data.daily[2].humidity + " %";
                document.getElementById("day-3-icon").src = "http://openweathermap.org/img/wn/"+data.daily[2].weather[0].icon+"@2x.png";
                
                day4.setAttribute("style", "background-color: #2b2d42; color: white;");
                day4Date.textContent = moment().add(4, "d").format("MM/D/YYYY");
                day4Temp.textContent = "Temp: "+data.daily[3].temp.day + " F";
                day4Wind.textContent = "Wind: "+data.daily[3].wind_speed + " MPH";
                day4Humidity.textContent = "Humidity: " + data.daily[3].humidity + " %";
                document.getElementById("day-4-icon").src = "http://openweathermap.org/img/wn/"+data.daily[3].weather[0].icon+"@2x.png";
                
                day5.setAttribute("style", "background-color: #2b2d42; color: white;");
                day5Date.textContent = moment().add(5, "d").format("MM/D/YYYY");
                day5Temp.textContent = "Temp: "+data.daily[4].temp.day + " F";
                day5Wind.textContent = "Wind: "+data.daily[4].wind_speed + " MPH";
                day5Humidity.textContent = "Humidity: " + data.daily[4].humidity + " %";
                document.getElementById("day-5-icon").src = "http://openweathermap.org/img/wn/"+data.daily[4].weather[0].icon+"@2x.png";

                });
              } else {
                alert("Error: City Not Found");
              }
            })
            .catch(function(error){
              alert("Unable to connect to Weather Dashboard");
            })
        });

      } else {
        alert("Error: City Not Found");
      }
    })
    .catch(function (error) {
      alert("Unable to connect to Weather Dashboard");
    });
});
