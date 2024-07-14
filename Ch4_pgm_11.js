// Using the same function with multiple objects

// Define movie objects
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
    directors: "J.J.Abrams"
};

// Function to display movie information
var showMovieInfo = function () {
    console.log("Movie information for " + movie.title);
    console.log("------------------------------");
    console.log("Actors: " + movie.actors);
    console.log("Directors: " + movie.directors);
    console.log("------------------------------");
};

// Display movie information for each movie object
console.log("Movie 1:");
movie = movie1;
showMovieInfo();

console.log("Movie 2:");
movie = movie2;
showMovieInfo();

console.log("Movie 3:");
movie = movie3;
showMovieInfo();

/* Further Adventures
 *
 * 1) Create an object to represent a multiple choice quiz question.
 */
var quizQuestion1 = {
    question: "What is the capital of France?",
    option1: "Bordeaux",
    option2: "F",
    option3: "Paris",
    option4: "Brussels",
    correctAnswer: "Paris"
};

var quizQuestion2 = {
    question: "Who wrote 'To Kill a Mockingbird'?",
    option1: "Harper Lee",
    option2: "J.K. Rowling",
    option3: "Ernest Hemingway",
    option4: "Mark Twain",
    correctAnswer: "Harper Lee"
};

var quizQuestion3 = {
    question: "What year was the Eiffel Tower completed?",
    option1: "1889",
    option2: "1900",
    option3: "1850",
    option4: "1920",
    correctAnswer: "1889"
};

// Function to display quiz question and options
var showQuizQuestion = function (questionObj) {
    console.log("Question: " + questionObj.question);
    console.log("Options:");
    console.log("(1) " + questionObj.option1);
    console.log("(2) " + questionObj.option2);
    console.log("(3) " + questionObj.option3);
    console.log("(4) " + questionObj.option4);
    console.log("Correct Answer: " + questionObj.correctAnswer);
    console.log("------------------------------");
};

// Display quiz questions
console.log("Quiz Question 1:");
showQuizQuestion(quizQuestion1);

console.log("Quiz Question 2:");
showQuizQuestion(quizQuestion2);

console.log("Quiz Question 3:");
showQuizQuestion(quizQuestion3);




/* Further Adventures
 *
 * 1) Create an object to represent
 *    a multiple choice quiz question.
 *
 * 2) Create two more quiz question objects.
 *
 * 3) Create a function to show
 *    the question and answer options.
 *
 * 4) Use the same variable assignment technique
 *    as above to display all three questions
 *    on the console.
 *
 */