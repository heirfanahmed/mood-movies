

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
