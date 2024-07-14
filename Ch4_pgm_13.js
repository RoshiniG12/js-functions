// A function to display player information

var player1 = {
    name: "Kandra",
    place: "The Dungeon of Doom",
    health: 50
};

var player2 = {
    name: "Dax",
    place: "The Old Library",
    health: 40
};

var showPlayerLocation = function(player) {
    console.log(player.name + " is in " + player.place);
};

var showPlayerHealth = function(player) {
    console.log(player.name + " has health " + player.health);
};

var showPlayerInfo = function(player) {
    console.log(player.name);
    console.log("------------------------------");
    showPlayerLocation(player);
    showPlayerHealth(player);
    console.log("------------------------------");
    console.log("");
};

// Display player1's information
showPlayerInfo(player1);

// Display player2's information
showPlayerInfo(player2);




/* Further Adventures
 *
 * 1) Write a function that just shows
 *    where the player is.
 *
 * 2) Write a function that just shows
 *    the player's health.
 *
 * 3) Change the showPlayerInfo function
 *    to use your two functions.
 *
 */