

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
var apiKeyWeather = "294d8b64be1fb708429a60b0e59477b5";

// SEARCH BY MOVIE
var queryUrl = "https://api.themoviedb.org/3/search/movie?api_key="+apiKeyMovie+"&query=Jack+Reacher";
//FIND GENRE LIST
var queryUrl2 = "https://api.themoviedb.org/3/genre/movie/list?api_key="+apiKeyMovie+"&language=en-US";
// SEARCH BY GENRE


// EVENT LISTENER FOR SUBMIT BUTTON TO GET CITY
var locationEntry;
var weatherIcon;
$(".submit" ).click(function(event) {
    event.preventDefault();
    $('#movie-list').empty();
    locationEntry = $("#test").val();
  // CALL TO GEO API FOR LAT AND LON
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
    weatherIcon = response.weather[0].icon;
    getMovies ();
 // <<< THIS IS API RESPONSE AFTER YOU ENTER CITY NAME AND PRESS SEARCH
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


function getMovies () {
// Gets weather icon and returns a the 4 movie genres from get genre function
var genre = GetGenre(weatherIcon);
// Splits the genre numbers to 4 separate numbers
var genreArr = genre.split(",");
// Picks a random number to pick 1 of the 4 genres at random
var randomNum = Math.floor(Math.random() * 4)
// Queries the movies based on the random genre it chose from the 4
var movieQuery = "https://api.themoviedb.org/3/discover/movie?api_key="+apiKeyMovie+"&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres="+genreArr[randomNum]; 
$.ajax({
  url: movieQuery,
  method: "GET"
}).then(function(response) {
  console.log(response)

for(var i = 0; i<12 ; i++)
{   
 //creates HTML elements - div with image) 
  $('<div>').clone().appendTo('#movie-list').addClass('col-sm-12 col-md-4 col-lg-2 mt-1').append($('<img>').addClass('card col-12').attr("src","https://image.tmdb.org/t/p/w500"+response.results[i].poster_path));
}
});
}

function GetGenre(weather)
{
  if (weather == '01d' || weather == '01n') return "14,99,28,35";
  if(weather == '02d' || weather == '02n') return "35,16,14,10751";
  if(weather == '03d'|| weather == '03n') return "80,16,14,10751";
  if(weather == '04d' || weather == '04n') return "28,80,16,14";
  if(weather == '09d'|| weather == '09n') return "10751,10749,36,18";
  if(weather == '10d'|| weather == '10n') return "53,37,36,10571";
  if(weather == '11d' || weather == '11n') return "27,10752,18,53";
  if(weather == '13d' || weather == '13n') return "36,53,10751,12";
  if (weather == '50d' || weather == '50n') return "9648,12,14,10402";
};

