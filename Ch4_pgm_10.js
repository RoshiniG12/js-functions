// Calling the showMovieInfo function
var movie1;
var showMovieInfo;
var movie;

movie1 = {
    title: "Inside Out",
    actors: "Amy Poehler, Bill Hader",
    directors: "Pete Doctor, Ronaldo Del Carmen"
};

showMovieInfo = function () {
  console.log("Movie information for " + movie.title);
  console.log("------------------------------");
  console.log("Actors: " + movie.actors);
  console.log("Directors: " + movie.directors);
  console.log("------------------------------");
};

// Assign movie1 to movie and display movie1 info
movie = movie1;
console.log("Calling showMovieInfo with movie1:");
showMovieInfo();
console.log("\n");

// Step 1: Assign movie2 to movie and display movie2 info
console.log("Step 1: Assign movie2 to movie and call showMovieInfo:");
var movie2 = {
    title: "Spectre",
    actors: "Daniel Craig, Christoph Waltz",
    directors: "Sam Mendes"
};
movie = movie2;
showMovieInfo();
console.log("\n");

// Step 2: Assign an empty object to movie2 and call showMovieInfo
console.log("Step 2: Assign an empty object to movie2 and call showMovieInfo:");
movie2 = {};
movie = movie2;
showMovieInfo();
console.log("\n");

// Step 3: Fill out movie2 with properties and call showMovieInfo
console.log("Step 3: Fill out movie2 with properties and call showMovieInfo:");
movie2.title = "Star Wars: Episode VII - The Force Awakens";
movie2.actors = "Harrison Ford, Mark Hamill, Carrie Fisher";
movie2.directors = "J.J. Abrams";
movie = movie2;
showMovieInfo();



/* Further Adventures
 *
 * 1) Without declaring a movie2 variable,
 *    assign movie2 to the movie variable
 *    instead of movie1.
 *    i.e. movie = movie2;
 *    What happens when you call showMovieInfo?
 *
 * 2) Create an empty object and
 *    assign it to a movie2 variable.
 *    What happens when you call showMovieInfo now?
 *
 * 3) Fill out movie2 with the properties
 *    needed by showMovieInfo.
 *    What happens when you call showMovieInfo now?
 *
 */