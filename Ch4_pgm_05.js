// Two more function definitions and assignments
// Declare variables
var number1, number2, result;

// Assign values to variables
number1 = 10;
number2 = 5;

// Function definitions
var findTotal;
var displayMenu;

findTotal = function () {
    result = number1 + number2;
};

displayMenu = function () {
    console.log("Please choose an option:");
    console.log("(1) Print log");
    console.log("(2) Upload file");
    console.log("(9) Quit");
};

// Execute findTotal function
findTotal();

// Display the result on the console
console.log("Result of findTotal function: " + result);

// Run the displayMenu function
displayMenu();




/* Further Adventures
 *
 *
 * 1) Declare number1, number2 and result variables.
 *
 * 2) Assign values to the variables.
 *
 * 3) Run the findTotal function by writing its name
 *    followed by parentheses: findTotal();
 *
 * 4) Display the result on the console.
 *
 * 5) Run the displayMenu function.
 *
 */