

// Pseudo code

// 1. Create event listener for the submit button - Josh
// 2. When clicked on the search button, use the geo - location - Josh
// 3. Pull the value of lof city and get the geo location coordinates, so those are sent to the weather API - Josh
// 4. Pass it in to the weather API - Josh
// 5. Use current weather conditions to be rendered on the weather - temp, location and discription - Desi Metodieva
// 6. Build logic with moment.js to change the background color of the weather section - Desi Metodieva
// 
// Movie Section - Desi Ivanova
// Make sure adult to *FALSE*
// 6. Propogate the img divs - get the img URL pulled from the request based on genre
// 7. Get title of the image from the TMDB API
// 
// 

var apiKeyMovie = "90bfcfb3836391f1a58986e70119cd20";

// SEARCH BY MOVIE
var queryUrl = "https://api.themoviedb.org/3/search/movie?api_key="+apiKeyMovie+"&query=Jack+Reacher";
//FIND GENRE LIST
var queryUrl2 = "https://api.themoviedb.org/3/genre/movie/list?api_key="+apiKeyMovie+"&language=en-US";
// SEARCH BY GENRE
var queryUrl = "https://api.themoviedb.org/3/discover/movie?api_key="+apiKeyMovie+"&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=28"; // Mix genres with comma







// EVENT LISTENER FOR SUBMIT BUTTON TO GET CITY
var locationEntry;
$(".submit" ).click(function(event) {
    event.preventDefault();
    locationEntry = ($(".text-search").children().eq(0).val());
  

  // CALL TO GEO API FOR LAT AND LON
  var apiKeyWeather = "294d8b64be1fb708429a60b0e59477b5";
  var queryUrlGeocode = "https://api.openweathermap.org/geo/1.0/direct?q="+locationEntry+"&limit=1&appid="+apiKeyWeather;
  $.ajax({
    url: queryUrlGeocode,
    method: "GET"
  }).then(function(response) {
      var lat = response[0].lat;
      var lon = response[0].lon;
      var queryUrlWeather = "https://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lon+"&appid="+apiKeyWeather+"&units=metric";
  // CALL TO WEATHER API FOR CURRENT WEATHER
  $.ajax({
      url: queryUrlWeather,
      method: "GET"
  }).then(function(response) {
      console.log(response) // <<< THIS IS API RESPONSE AFTER YOU ENTER CITY NAME AND PRESS SEARCH

      // Traversing current temperature at the searched Location
      var currentTemp;
      currentTemp = response.main.temp;
      currentTemp = Math.round(currentTemp);
      var tempH3 = $('#temperature');
      tempH3.text(currentTemp + "°");
     
      // Traversing the searched location
      var cityName;
      cityName = response.name;
      var cityLocation = $('#location');
      cityLocation.text(cityName);

      // Traversing weather conditions for the searched location
      var weatherConditions;
      weatherConditions = response.weather[0].main;
      var discriptionWeather = $('#discription-weather');
      discriptionWeather.text(weatherConditions);
      $('.weather-icon').attr("src","assets/images/"+weatherConditions+".svg");
      
    }); 

  });
});


$.ajax({
  url: queryUrl,
  method: "GET"
}).then(function(response) {
    for(var i = 0; i<6 ; i++)
    {
        $("#movie-list").children().eq(i).children().eq(0).attr("src","https://image.tmdb.org/t/p/w500"+response.results[i].poster_path);
    }
    

    
});
