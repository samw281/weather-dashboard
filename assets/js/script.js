var searchBtn = document.getElementById("search-btn");
var cityName = document.getElementById("city-name");
var searchForm = document.getElementById("search-form");
var currentCity = document.getElementById("current-city")
var temp = document.getElementById("temp");
var wind = document.getElementById("wind");
var humidity = document.getElementById("humidity");
var uvi = document.getElementById("uvi");
var day1 = document.getElementById("day-1");
var day2 = document.getElementById("day-2");
var day3 = document.getElementById("day-3");
var day4 = document.getElementById("day-4");
var day5 = document.getElementById("day-5");

var oneCallUrl =
  "https://api.openweathermap.org/data/2.5/onecall?units=imperial?lat={lat}&lon={lon}&appid=e0d9ee6c1369f1e9f7efbfb5647c00b1";

searchForm.addEventListener("submit", function (event) {
  event.preventDefault();
  var geocodingUrl =
    "http://api.openweathermap.org/geo/1.0/direct?q=" +
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

                  currentCity.textContent = cityName.value.toUpperCase() +" - "+ moment().format("MM/D/YYYY")
                  temp.textContent = "Temp: " + data.current.temp;
                  wind.textContent = "Wind: " + data.current.wind_speed + " MPH";
                  humidity.textContent = "Humidity: " + data.current.humidity + " %";
                  uvi.textContent = "UV Index: " + data.current.uvi
                  if(uvi.value <= 2){
                    uvi.setAttribute("style", "background-color: green; color: white;");
                  } 
                  if (uvi.value > 2 && uvi.value <= 5){
                    uvi.setAttribute("style", "background-color: yellow; color: white;");
                  }
                  if (uvi.value > 5 && uvi.value <= 7){
                    uvi.setAttribute("style", "background-color: orange; color: white;");
                  } else {
                    uvi.setAttribute("style", "background-color: red; color: white;");
                  }

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
