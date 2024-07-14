// Displaying a menu
var displayMenu;

displayMenu = function () {
    console.log("Please choose an option:");
    console.log("(1) Print log");
    console.log("(2) Upload file");
    console.log("(3) Delete account"); // New option
    console.log("(4) View settings"); // New option
    console.log("(9) Quit");
};

displayMenu();
var displayMyMenu;

displayMyMenu = function () {
    console.log("Welcome to My Menu:");
    console.log("(A) View profile");
    console.log("(B) Edit preferences");
    console.log("(C) Check notifications");
    console.log("(Q) Quit");
};

displayMenu(); // Calling the original displayMenu function
displayMyMenu(); // Calling your custom displayMyMenu function



/* Further Adventures
 *
 * 1) Add two more options to the displayMenu
 *    function and run the program.
 *
 * 2) Create your own displayMyMenu function.
 *
 * 3) Add a line to call your function as well.
 *    Run the program
 *
 */