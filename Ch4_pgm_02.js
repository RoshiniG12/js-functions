// Displaying information from similar objects

// Movie objects
var movie1 = {
  title: "Inside Out",
  actors: "Amy Poehler, Bill Hader",
  directors: "Pete Doctor, Ronaldo Del Carmen"
};

var movie2 = {
  title: "Spectre",
  actors: "Daniel Craig, Christoph Waltz",
  directors: "Sam Mendes"
};

var movie3 = {
  title: "Star Wars: Episode VII - The Force Awakens",
  actors: "Harrison Ford, Mark Hamill, Carrie Fisher",
  directors: "J.J. Abrams"
};

var movie4 = {
  title: "The Dark Knight",
  actors: "Christian Bale, Heath Ledger, Aaron Eckhart",
  directors: "Christopher Nolan"
};

// Displaying movie information with spacing
console.log("Movie information for " + movie1.title);
console.log("------------------------------");
console.log("Actors: " + movie1.actors);
console.log("Directors: " + movie1.directors);
console.log("------------------------------\n");

console.log("Movie information for " + movie2.title);
console.log("------------------------------");
console.log("Actors: " + movie2.actors);
console.log("Directors: " + movie2.directors);
console.log("------------------------------\n");

console.log("Movie information for " + movie3.title);
console.log("------------------------------");
console.log("Actors: " + movie3.actors);
console.log("Directors: " + movie3.directors);
console.log("------------------------------\n");

console.log("Movie information for " + movie4.title);
console.log("------------------------------");
console.log("Actors: " + movie4.actors);
console.log("Directors: " + movie4.directors);
console.log("------------------------------");

// Calendar event objects
var event1 = {
  title: "Project Kickoff Meeting",
  date: "2023-08-01",
  time: "09:00 AM",
  location: "Conference Room A"
};

var event2 = {
  title: "Team Building Activity",
  date: "2023-08-10",
  time: "02:00 PM",
  location: "Outdoor Park"
};

var event3 = {
  title: "Monthly Review Meeting",
  date: "2023-08-20",
  time: "11:00 AM",
  location: "Boardroom"
};

// Displaying calendar event information
console.log("\nCalendar Event: " + event1.title);
console.log("Date: " + event1.date);
console.log("Time: " + event1.time);
console.log("Location: " + event1.location);
console.log("------------------------------");

console.log("\nCalendar Event: " + event2.title);
console.log("Date: " + event2.date);
console.log("Time: " + event2.time);
console.log("Location: " + event2.location);
console.log("------------------------------");

console.log("\nCalendar Event: " + event3.title);
console.log("Date: " + event3.date);
console.log("Time: " + event3.time);
console.log("Location: " + event3.location);
console.log("------------------------------");




/* Further Adventures
 *
 * 1) Add a fourth movie and display its info
 *
 * 2) All the movie info is in one big block on the console.
 *    Change the code to space out the different movies.
 *
 * 3) Create objects to represent three calendar events
 *
 * 4) Display info from the three events on the console.
 *
 */