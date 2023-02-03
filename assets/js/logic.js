

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

var apiKey = "90bfcfb3836391f1a58986e70119cd20";

// SEARCH BY MOVIE
var queryUrl = "https://api.themoviedb.org/3/search/movie?api_key="+apiKey+"&query=Jack+Reacher";
//FIND GENRE LIST
var queryUrl2 = "https://api.themoviedb.org/3/genre/movie/list?api_key="+apiKey+"&language=en-US";
// SEARCH BY GENRE
var queryUrl3 = "https://api.themoviedb.org/3/discover/movie?api_key="+apiKey+"&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=28"; // Mix genres with comma



var locationEntry;
$(".submit" ).click(function(event) {
    event.preventDefault();
    locationEntry = ($(".text-search").children().eq(0).val());
    console.log(locationEntry);
  });

$.ajax({
  url: queryUrl3,
  method: "GET"
}).then(function(response) {
    console.log(response)
    for(var i = 0; i<6 ; i++)
    {
        $("#movie-list").children().eq(i).children().eq(0).attr("src","https://image.tmdb.org/t/p/w500"+response.results[i].poster_path);
    }
    

    
});
