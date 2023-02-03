# Project 1 - MoodMovies

## Collaborators:

1. Desislava Ivanova
2. Desislava Metodieva
3. Irfan Ahmed
4. Josh Williams


## Task

Based on real world problem, develop a Mood Movies list for the user to play depending on the real time weather at the particular location. Use two server side APIs for weather and movie player. Our challenge is to build a weather dashboard that will run in the browser and feature dynamically updated HTML and CSS powered by Javascript using Bootstrap and jQuery.

Server side APIs used are:
1. Weather (OpenWeather - https://openweathermap.org) - for real time weather report.
2. TMDB - for the movies.

Using above weather API, present day / time weather forecast is retrieved for the selected city. The link displays movies based on the weather report.
If it is sunny, it recommends 6 movies based on action, adventure, musicals, romance, sports and thriller.
If it is cloudy, fog or raining, it recommends 6 movies based on comedy, drama, fantasy, horror and mystery.

The base URL for the API weather calls look like the following: `https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={294d8b64be1fb708429a60b0e59477b5&limit6}`.

We have used `localStorage` to store persistent data.



## User Story

```text
As a user of this web app, I want to watch movies based on the weather condition of my city.
```



## Acceptance Criteria

* Create a weather dashboard with form inputs and recommend movies according to the weather condition.
  * When a user searches for a city they are presented with current conditions for that city.
  * When a user views the current weather conditions for that city they are presented with recommended movies to watch based on the weather report.
* Use modals instead of alerts, confirms or prompts.
* Have a clean and polished User Interface(UI).
* Application is interactive/responsive (accepts and responds to user input).
* Have a clean repository that meets quality coding standards like:
    File structure
    Naming conventions
* Follows best practices for Class / ID naming conventions, Indentation, Quality comments. etc.



## Description of the Project

* HTML file has been coded with Bootstrap.
* CSS file has been coded for styling the HTML code.
* Javascript has been coded for interaction with the web app using jQuery and two APIs (for Weather and Movies).



## Technologies Used
1. Bootstrap in HTML.
2. jQuery in Javascript.
3. Third party servers APIs -
  *** Weather (OpenWeather - https://openweathermap.org) - for real time weather report.
  *** TMDB - for the movies.
4. Kandan board implementation.



## Action

1. Created a simple application that allows a user to see weather condition ans based on that the web app recomments movies.

2. This app runs in the browser and feature dynamically updated HTML and CSS powered by Javascript using jQuery.

3. It is linked to Moment.js library along with the jQuery library and UI library.
     
4. It adapts to multiple screen sizes.

5. The following points show how the app should works:

    * Displays the current weather condition based on selected city.
 
    * Recommends 6 movies to watch.



## Screen Shot of the deployed website:
  ![](assets/images/mood-movies.png)



## Links to the deployed website and repository URL:

*** Repository URL: https://github.com/heirfanahmed/mood-movies

*** Deployed website: https://heirfanahmed.github.io/mood-movies/