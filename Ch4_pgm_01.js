// Displaying an object's properties on the console

// First movie object
var movie1 = {
  title: "Inside Out",
  actors: "Amy Poehler, Bill Hader",
  directors: "Pete Doctor, Ronaldo Del Carmen"
};

console.log("Movie information for " + movie1.title);
console.log("------------------------------");
console.log("Actors: " + movie1.actors);
console.log("Directors: " + movie1.directors);
console.log("------------------------------");

// Second movie object
var movie2 = {
  title: "Inception",
  actors: "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page",
  directors: "Christopher Nolan"
};

console.log("\nMovie information for " + movie2.title);
console.log("------------------------------");
console.log("Actors: " + movie2.actors);
console.log("Directors: " + movie2.directors);
console.log("------------------------------");

// Blog post object
var blogPost = {
  title: "JavaScript Basics: Objects",
  author: "JavaScript Learner",
  publishedDate: "2023-07-14",
  content: "Objects are a fundamental part of JavaScript...",
  tags: ["JavaScript", "Objects", "Programming"]
};

console.log("\nBlog Post: " + blogPost.title);
console.log("------------------------------");
console.log("Author: " + blogPost.author);
console.log("Published Date: " + blogPost.publishedDate);
console.log("Content: " + blogPost.content);
console.log("Tags: " + blogPost.tags.join(", "));
console.log("------------------------------");


/* Further Adventures
 *
 * 1) Add a second movie and display the same info for it.
 *
 * 2) Create an object to represent a blog post.
 *
 * 3) Write code to display info about the blog post.
 *
 */