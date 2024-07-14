// Using a function to display object properties

var showMovieInfo;

// Step 1: Adding a call to showMovieInfo
showMovieInfo = function () {
  console.log("Movie information for " + movie.title);
  console.log("------------------------------");
  console.log("Actors: " + movie.actors);
  console.log("Directors: " + movie.directors);
  console.log("------------------------------");
};

var movie = {
  title: "Inception",
  actors: "Leonardo DiCaprio, Joseph Gordon-Levitt",
  directors: "Christopher Nolan"
};

console.log("Step 1: Adding a call to showMovieInfo");
showMovieInfo();
console.log("\n");

// Step 2: Declaring movie without assigning a value
showMovieInfo = function () {
  try {
    console.log("Movie information for " + movie.title); // TypeError
    console.log("------------------------------");
    console.log("Actors: " + movie.actors);
    console.log("Directors: " + movie.directors);
    console.log("------------------------------");
  } catch (error) {
    console.error("Step 2: Declaring movie without assigning a value");
    console.error(error.message);
  }
};
var movie;
showMovieInfo();
console.log("\n");

// Step 3: Assigning an empty object to movie
showMovieInfo = function () {
  console.log("Movie information for " + movie.title); // Output: Movie information for undefined
  console.log("------------------------------");
  console.log("Actors: " + movie.actors); // Output: Actors: undefined
  console.log("Directors: " + movie.directors); // Output: Directors: undefined
  console.log("------------------------------");
};

movie = {};
console.log("Step 3: Assigning an empty object to movie");
showMovieInfo();
console.log("\n");

// Step 4: Adding properties to movie
showMovieInfo = function () {
  console.log("Movie information for " + movie.title); // Output: Movie information for Inception
  console.log("------------------------------");
  console.log("Actors: " + movie.actors); // Output: Actors: Leonardo DiCaprio, Joseph Gordon-Levitt
  console.log("Directors: " + movie.directors); // Output: Directors: Christopher Nolan
  console.log("------------------------------");
};

movie = {
  title: "Inception",
  actors: "Leonardo DiCaprio, Joseph Gordon-Levitt",
  directors: "Christopher Nolan"
};
console.log("Step 4: Adding properties to movie");
showMovieInfo();



/* Further Adventures
 *
 * 1) Add a call to showMovieInfo and run the program.
 *    What happens?
 *
 * 2) Declare a movie variable
 *    but don't assign it a value.
 *    Run the program. What happens now?
 *
 * 3) Create an empty object and
 *    assign it to the movie variable.
 *    Run the program again.
 *    Does the output change?
 *
 * 4) Add title, actors and directors properties
 *    to the movie object. Run one more time.
 *    Is the output as expected?
 *
 */