

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
var index=0;
var apiKeyMovie = "90bfcfb3836391f1a58986e70119cd20";
var apiKeyWeather = "294d8b64be1fb708429a60b0e59477b5";

// SEARCH BY MOVIE
var queryUrl = "https://api.themoviedb.org/3/search/movie?api_key="+apiKeyMovie+"&query=Jack+Reacher";
//FIND GENRE LIST
var queryUrl2 = "https://api.themoviedb.org/3/genre/movie/list?api_key="+apiKeyMovie+"&language=en-US";
// SEARCH BY GENRE




// EVENT LISTENER FOR SUBMIT BUTTON TO GET CITY
var locationEntry;
$(".submit" ).click(function(event) {
    event.preventDefault();
    locationEntry = $("#test").val();
    sessionStorage.setItem(index, locationEntry)
  // CALL TO GEO API FOR LAT AND LON
  var queryUrlGeocode = "https://api.openweathermap.org/geo/1.0/direct?q="+locationEntry+"&limit=1&appid="+apiKeyWeather;
  $.ajax({
    url: queryUrlGeocode,
    method: "GET"
  }).then(function(response) {
    console.log(response)
      var lat = response[0].lat;
      var lon = response[0].lon;
      var queryUrlWeather = "https://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lon+"&appid="+apiKeyWeather+"&units=metric";
  // CALL TO WEATHER API FOR CURRENT WEATHER
  $.ajax({
      url: queryUrlWeather,
      method: "GET"
  }).then(function(response) {
      console.log(response)
      sessionStorage.setItem(index+1, response.weather[0].icon)
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


//  $.ajax({
//    url: queryUrl,
//    method: "GET"
//  }).then(function(response) {
//      for(var i = 0; i<6 ; i++)
//      {
//          $("#movie-list").children().eq(i).children().eq(0).attr("src","https://image.tmdb.org/t/p/w500"+response.results[i].poster_path);
//      }
    

//      });

function getMovies () {
  var currentWeatrher=sessionStorage.getItem(1)
  console.log (currentWeatrher);

if (currentWeatrher == '01d' || currentWeatrher == '01n') {
    //sessionStorage.setItem(index+2, response.results[0].poster_path)
    for(var i = 0; i<6 ; i++)
       {   
        var queryUrl14 = "https://api.themoviedb.org/3/discover/movie?api_key="+apiKeyMovie+"&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=14"; // Mix genres with comma
           $.ajax({
           url: queryUrl14,
           method: "GET"
           }).then(function(response){
           $("#movie-list").children().eq(0).children().eq(0).attr("src","https://image.tmdb.org/t/p/w500"+response.results[0].poster_path);
           $("#movie-list").children().eq(1).children().eq(0).attr("src","https://image.tmdb.org/t/p/w500"+response.results[1].poster_path);
           });
           var queryUrl99 = "https://api.themoviedb.org/3/discover/movie?api_key="+apiKeyMovie+"&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=99"; 
           $.ajax({
            url: queryUrl99,
            method: "GET"
            }).then(function(response){
           $("#movie-list").children().eq(2).children().eq(0).attr("src","https://image.tmdb.org/t/p/w500"+response.results[4].poster_path);
           $("#movie-list").children().eq(3).children().eq(0).attr("src","https://image.tmdb.org/t/p/w500"+response.results[5].poster_path);
            });
            var queryUrl28 = "https://api.themoviedb.org/3/discover/movie?api_key="+apiKeyMovie+"&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=28"; 
           $.ajax({
            url: queryUrl28,
            method: "GET"
            }).then(function(response){
           $("#movie-list").children().eq(4).children().eq(0).attr("src","https://image.tmdb.org/t/p/w500"+response.results[2].poster_path);    
            });
            var queryUrl35 = "https://api.themoviedb.org/3/discover/movie?api_key="+apiKeyMovie+"&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=35"; 
           $.ajax({
            url: queryUrl35,
            method: "GET"
            }).then(function(response){
           $("#movie-list").children().eq(5).children().eq(0).attr("src","https://image.tmdb.org/t/p/w500"+response.results[3].poster_path);      
            });
       }   
  }
  if(currentWeatrher == '02d' || currentWeatrher == '02n'){ 
    for(var i = 0; i<6 ; i++)  
             {   
              var queryUrl35 = "https://api.themoviedb.org/3/discover/movie?api_key="+apiKeyMovie+"&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=35"; // Mix genres with comma
                 $.ajax({
                 url: queryUrl35,
                 method: "GET"
                 }).then(function(response){
                 $("#movie-list").children().eq(0).children().eq(0).attr("src","https://image.tmdb.org/t/p/w500"+response.results[0].poster_path);
                 $("#movie-list").children().eq(1).children().eq(0).attr("src","https://image.tmdb.org/t/p/w500"+response.results[1].poster_path);
                 });
                 var queryUrl16 = "https://api.themoviedb.org/3/discover/movie?api_key="+apiKeyMovie+"&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=16"; 
                 $.ajax({
                  url: queryUrl16,
                  method: "GET"
                  }).then(function(response){
                 $("#movie-list").children().eq(2).children().eq(0).attr("src","https://image.tmdb.org/t/p/w500"+response.results[4].poster_path);
                 $("#movie-list").children().eq(3).children().eq(0).attr("src","https://image.tmdb.org/t/p/w500"+response.results[5].poster_path);
                  });
                  var queryUrl14 = "https://api.themoviedb.org/3/discover/movie?api_key="+apiKeyMovie+"&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=14"; 
                 $.ajax({
                  url: queryUrl14,
                  method: "GET"
                  }).then(function(response){
                 $("#movie-list").children().eq(4).children().eq(0).attr("src","https://image.tmdb.org/t/p/w500"+response.results[2].poster_path);    
                  });
                  var queryUrl10751 = "https://api.themoviedb.org/3/discover/movie?api_key="+apiKeyMovie+"&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=10751"; 
                 $.ajax({
                  url: queryUrl10751,
                  method: "GET"
                  }).then(function(response){
                 $("#movie-list").children().eq(5).children().eq(0).attr("src","https://image.tmdb.org/t/p/w500"+response.results[3].poster_path);
                  });
                }
              }
      
    if(currentWeatrher == '03d'|| currentWeatrher == '03n'){
              //sessionStorage.setItem(index+2, response.results[0].poster_path)
                for(var i = 0; i<6 ; i++)
                   {   
                    var queryUrl80 = "https://api.themoviedb.org/3/discover/movie?api_key="+apiKeyMovie+"&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=80"; // Mix genres with comma
                       $.ajax({
                       url: queryUrl80,
                       method: "GET"
                       }).then(function(response){
                       $("#movie-list").children().eq(0).children().eq(0).attr("src","https://image.tmdb.org/t/p/w500"+response.results[0].poster_path);
                       $("#movie-list").children().eq(1).children().eq(0).attr("src","https://image.tmdb.org/t/p/w500"+response.results[1].poster_path);
                       });
                       var queryUrl16 = "https://api.themoviedb.org/3/discover/movie?api_key="+apiKeyMovie+"&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=16"; 
                       $.ajax({
                        url: queryUrl16,
                        method: "GET"
                        }).then(function(response){
                       $("#movie-list").children().eq(2).children().eq(0).attr("src","https://image.tmdb.org/t/p/w500"+response.results[4].poster_path);
                       $("#movie-list").children().eq(3).children().eq(0).attr("src","https://image.tmdb.org/t/p/w500"+response.results[5].poster_path);
                        });
                        var queryUrl14 = "https://api.themoviedb.org/3/discover/movie?api_key="+apiKeyMovie+"&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=14"; 
                       $.ajax({
                        url: queryUrl14,
                        method: "GET"
                        }).then(function(response){
                       $("#movie-list").children().eq(4).children().eq(0).attr("src","https://image.tmdb.org/t/p/w500"+response.results[2].poster_path);    
                        });
                        var queryUrl10751 = "https://api.themoviedb.org/3/discover/movie?api_key="+apiKeyMovie+"&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=10751"; 
                       $.ajax({
                        url: queryUrl10751,
                        method: "GET"
                        }).then(function(response){
                       $("#movie-list").children().eq(5).children().eq(0).attr("src","https://image.tmdb.org/t/p/w500"+response.results[3].poster_path);
                        });
                   }    
                  }       
        if(currentWeatrher == '04d' || currentWeatrher == '04n'){
                    //sessionStorage.setItem(index+2, response.results[0].poster_path)
                      for(var i = 0; i<6 ; i++)
                         {   
                          var queryUrl28 = "https://api.themoviedb.org/3/discover/movie?api_key="+apiKeyMovie+"&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=28"; // Mix genres with comma
                             $.ajax({
                             url: queryUrl28,
                             method: "GET"
                             }).then(function(response){
                             $("#movie-list").children().eq(0).children().eq(0).attr("src","https://image.tmdb.org/t/p/w500"+response.results[0].poster_path);
                             $("#movie-list").children().eq(1).children().eq(0).attr("src","https://image.tmdb.org/t/p/w500"+response.results[1].poster_path);
                             });
                             var queryUrl80 = "https://api.themoviedb.org/3/discover/movie?api_key="+apiKeyMovie+"&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=80"; 
                             $.ajax({
                              url: queryUrl80,
                              method: "GET"
                              }).then(function(response){
                             $("#movie-list").children().eq(2).children().eq(0).attr("src","https://image.tmdb.org/t/p/w500"+response.results[4].poster_path);
                             $("#movie-list").children().eq(3).children().eq(0).attr("src","https://image.tmdb.org/t/p/w500"+response.results[5].poster_path);
                              });
                              var queryUrl16 = "https://api.themoviedb.org/3/discover/movie?api_key="+apiKeyMovie+"&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=16"; 
                             $.ajax({
                              url: queryUrl16,
                              method: "GET"
                              }).then(function(response){
                             $("#movie-list").children().eq(4).children().eq(0).attr("src","https://image.tmdb.org/t/p/w500"+response.results[2].poster_path);    
                              });
                              var queryUrl14 = "https://api.themoviedb.org/3/discover/movie?api_key="+apiKeyMovie+"&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=14"; 
                             $.ajax({
                              url: queryUrl14,
                              method: "GET"
                              }).then(function(response){
                             $("#movie-list").children().eq(5).children().eq(0).attr("src","https://image.tmdb.org/t/p/w500"+response.results[3].poster_path);                            
                              });
                            }
                         } 
                         if(currentWeatrher == '09d'|| currentWeatrher == '09n'){
                          //sessionStorage.setItem(index+2, response.results[0].poster_path)
                            for(var i = 0; i<6 ; i++)
                               {   
                                var queryUrl10751 = "https://api.themoviedb.org/3/discover/movie?api_key="+apiKeyMovie+"&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=10751"; // Mix genres with comma
                                   $.ajax({
                                   url: queryUrl10751,
                                   method: "GET"
                                   }).then(function(response){
                                   $("#movie-list").children().eq(0).children().eq(0).attr("src","https://image.tmdb.org/t/p/w500"+response.results[0].poster_path);
                                   $("#movie-list").children().eq(1).children().eq(0).attr("src","https://image.tmdb.org/t/p/w500"+response.results[1].poster_path);
                                   });
                                   var queryUrl10749 = "https://api.themoviedb.org/3/discover/movie?api_key="+apiKeyMovie+"&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=10749"; 
                                   $.ajax({
                                    url: queryUrl10749,
                                    method: "GET"
                                    }).then(function(response){
                                   $("#movie-list").children().eq(2).children().eq(0).attr("src","https://image.tmdb.org/t/p/w500"+response.results[4].poster_path);
                                   $("#movie-list").children().eq(3).children().eq(0).attr("src","https://image.tmdb.org/t/p/w500"+response.results[5].poster_path);
                                    });
                                    var queryUrl36 = "https://api.themoviedb.org/3/discover/movie?api_key="+apiKeyMovie+"&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=36"; 
                                   $.ajax({
                                    url: queryUrl36,
                                    method: "GET"
                                    }).then(function(response){
                                   $("#movie-list").children().eq(4).children().eq(0).attr("src","https://image.tmdb.org/t/p/w500"+response.results[2].poster_path);    
                                    });
                                    var queryUrl18 = "https://api.themoviedb.org/3/discover/movie?api_key="+apiKeyMovie+"&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=18"; 
                                   $.ajax({
                                    url: queryUrl18,
                                    method: "GET"
                                    }).then(function(response){
                                   $("#movie-list").children().eq(5).children().eq(0).attr("src","https://image.tmdb.org/t/p/w500"+response.results[3].poster_path);                            
                                    });
                               }
                              }
                              if(currentWeatrher == '10d'|| currentWeatrher == '10n'){
                                //sessionStorage.setItem(index+2, response.results[0].poster_path)
                                  for(var i = 0; i<6 ; i++)
                                     {   
                                      var queryUrl53 = "https://api.themoviedb.org/3/discover/movie?api_key="+apiKeyMovie+"&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=53"; // Mix genres with comma
                                         $.ajax({
                                         url: queryUrl53,
                                         method: "GET"
                                         }).then(function(response){
                                         $("#movie-list").children().eq(0).children().eq(0).attr("src","https://image.tmdb.org/t/p/w500"+response.results[0].poster_path);
                                         $("#movie-list").children().eq(1).children().eq(0).attr("src","https://image.tmdb.org/t/p/w500"+response.results[1].poster_path);
                                         });
                                         var queryUrl37 = "https://api.themoviedb.org/3/discover/movie?api_key="+apiKeyMovie+"&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=37"; 
                                         $.ajax({
                                          url: queryUrl37,
                                          method: "GET"
                                          }).then(function(response){
                                         $("#movie-list").children().eq(2).children().eq(0).attr("src","https://image.tmdb.org/t/p/w500"+response.results[4].poster_path);
                                         $("#movie-list").children().eq(3).children().eq(0).attr("src","https://image.tmdb.org/t/p/w500"+response.results[5].poster_path);
                                          });
                                          var queryUrl36 = "https://api.themoviedb.org/3/discover/movie?api_key="+apiKeyMovie+"&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=36"; 
                                         $.ajax({
                                          url: queryUrl36,
                                          method: "GET"
                                          }).then(function(response){
                                         $("#movie-list").children().eq(4).children().eq(0).attr("src","https://image.tmdb.org/t/p/w500"+response.results[2].poster_path);    
                                          });
                                          var queryUrl10751 = "https://api.themoviedb.org/3/discover/movie?api_key="+apiKeyMovie+"&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=10751"; 
                                         $.ajax({
                                          url: queryUrl10751,
                                          method: "GET"
                                          }).then(function(response){
                                         $("#movie-list").children().eq(5).children().eq(0).attr("src","https://image.tmdb.org/t/p/w500"+response.results[3].poster_path);                            
                                          });
                                     }                                   
            } 
                                               
if(currentWeatrher == '11d' || currentWeatrher == '11n'){
  //sessionStorage.setItem(index+2, response.results[0].poster_path)
    for(var i = 0; i<6 ; i++)
       {   
        var queryUrl27 = "https://api.themoviedb.org/3/discover/movie?api_key="+apiKeyMovie+"&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=27"; // Mix genres with comma
           $.ajax({
           url: queryUrl27,
           method: "GET"
           }).then(function(response){
           $("#movie-list").children().eq(0).children().eq(0).attr("src","https://image.tmdb.org/t/p/w500"+response.results[0].poster_path);
           $("#movie-list").children().eq(1).children().eq(0).attr("src","https://image.tmdb.org/t/p/w500"+response.results[1].poster_path);
           });
           var queryUrl10752 = "https://api.themoviedb.org/3/discover/movie?api_key="+apiKeyMovie+"&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=10752"; 
           $.ajax({
            url: queryUrl10752,
            method: "GET"
            }).then(function(response){
           $("#movie-list").children().eq(2).children().eq(0).attr("src","https://image.tmdb.org/t/p/w500"+response.results[4].poster_path);
           $("#movie-list").children().eq(3).children().eq(0).attr("src","https://image.tmdb.org/t/p/w500"+response.results[5].poster_path);
            });
            var queryUrl18 = "https://api.themoviedb.org/3/discover/movie?api_key="+apiKeyMovie+"&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=18"; 
           $.ajax({
            url: queryUrl18,
            method: "GET"
            }).then(function(response){
           $("#movie-list").children().eq(4).children().eq(0).attr("src","https://image.tmdb.org/t/p/w500"+response.results[2].poster_path);    
            });
            var queryUrl53 = "https://api.themoviedb.org/3/discover/movie?api_key="+apiKeyMovie+"&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=53"; 
           $.ajax({
            url: queryUrl53,
            method: "GET"
            }).then(function(response){
           $("#movie-list").children().eq(5).children().eq(0).attr("src","https://image.tmdb.org/t/p/w500"+response.results[3].poster_path);                            
            });
       }                                   
}                                   
if(currentWeatrher == '13d' || currentWeatrher == '13n'){
  //sessionStorage.setItem(index+2, response.results[0].poster_path)
    for(var i = 0; i<6 ; i++)
       {   
        var queryUrl36 = "https://api.themoviedb.org/3/discover/movie?api_key="+apiKeyMovie+"&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=36"; // Mix genres with comma
           $.ajax({
           url: queryUrl36,
           method: "GET"
           }).then(function(response){
           $("#movie-list").children().eq(0).children().eq(0).attr("src","https://image.tmdb.org/t/p/w500"+response.results[0].poster_path);
           $("#movie-list").children().eq(1).children().eq(0).attr("src","https://image.tmdb.org/t/p/w500"+response.results[1].poster_path);
           });
           var queryUrl53 = "https://api.themoviedb.org/3/discover/movie?api_key="+apiKeyMovie+"&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=53"; 
           $.ajax({
            url: queryUrl53,
            method: "GET"
            }).then(function(response){
           $("#movie-list").children().eq(2).children().eq(0).attr("src","https://image.tmdb.org/t/p/w500"+response.results[4].poster_path);
           $("#movie-list").children().eq(3).children().eq(0).attr("src","https://image.tmdb.org/t/p/w500"+response.results[5].poster_path);
            });
            var queryUrl10751 = "https://api.themoviedb.org/3/discover/movie?api_key="+apiKeyMovie+"&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=10751"; 
           $.ajax({
            url: queryUrl10751,
            method: "GET"
            }).then(function(response){
           $("#movie-list").children().eq(4).children().eq(0).attr("src","https://image.tmdb.org/t/p/w500"+response.results[2].poster_path);    
            });
            var queryUrl12 = "https://api.themoviedb.org/3/discover/movie?api_key="+apiKeyMovie+"&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=12"; 
           $.ajax({
            url: queryUrl12,
            method: "GET"
            }).then(function(response){
           $("#movie-list").children().eq(5).children().eq(0).attr("src","https://image.tmdb.org/t/p/w500"+response.results[3].poster_path);                            
            });
       }                                   
}  
if(currentWeatrher == '50d' || currentWeatrher == '50n'){
  //sessionStorage.setItem(index+2, response.results[0].poster_path)
    for(var i = 0; i<6 ; i++)
       {   
        var queryUrl9648 = "https://api.themoviedb.org/3/discover/movie?api_key="+apiKeyMovie+"&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=9648"; // Mix genres with comma
           $.ajax({
           url: queryUrl9648,
           method: "GET"
           }).then(function(response){
           $("#movie-list").children().eq(0).children().eq(0).attr("src","https://image.tmdb.org/t/p/w500"+response.results[0].poster_path);
           $("#movie-list").children().eq(1).children().eq(0).attr("src","https://image.tmdb.org/t/p/w500"+response.results[1].poster_path);
           });
           var queryUrl12 = "https://api.themoviedb.org/3/discover/movie?api_key="+apiKeyMovie+"&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=12"; 
           $.ajax({
            url: queryUrl12,
            method: "GET"
            }).then(function(response){
           $("#movie-list").children().eq(2).children().eq(0).attr("src","https://image.tmdb.org/t/p/w500"+response.results[4].poster_path);
           $("#movie-list").children().eq(3).children().eq(0).attr("src","https://image.tmdb.org/t/p/w500"+response.results[5].poster_path);
            });
            var queryUrl14 = "https://api.themoviedb.org/3/discover/movie?api_key="+apiKeyMovie+"&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=14"; 
           $.ajax({
            url: queryUrl14,
            method: "GET"
            }).then(function(response){
           $("#movie-list").children().eq(4).children().eq(0).attr("src","https://image.tmdb.org/t/p/w500"+response.results[2].poster_path);    
            });
            var queryUrl10402 = "https://api.themoviedb.org/3/discover/movie?api_key="+apiKeyMovie+"&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=10402"; 
           $.ajax({
            url: queryUrl10402,
            method: "GET"
            }).then(function(response){
           $("#movie-list").children().eq(5).children().eq(0).attr("src","https://image.tmdb.org/t/p/w500"+response.results[3].poster_path);                            
            });
       }                                   
}                                                                                                        
      else{
        console.log(currentWeatrher) 
}
    }
