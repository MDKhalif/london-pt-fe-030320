// install and  import "readline-sync" npm package before you do exercises

const readlineSync = require('readline-sync');

let selectedItems = {
	book: "",
	movie: "",
	nextTrip: ""
};

const movies = [
	"The Invisible Man",
	"Never Rarely Sometimes Always",
	"Gretel & Hansel",
	"No time to die",
	"Bloodshot",
	"Onward",
	"Sonic"
];

const books = [
	"My Dark Vanessa",
	"Uncanny Valley",
	"Weather",
	"The night watchman",
	"All adults here",
	"Dear Edward",
	"Grown ups"
];

const countries = [
	"Italy",
	"France",
	"Germany",
	"Spain",
	"Portugal",
	"Denmark",
	"Netherland"
];


/**
 * Exercise 1
 *
 * create a sub menu "Books" where you need to render a list of {books}.
 * User should be able to select one. On selection store the response
 * to {user.book}.
 *
 * NOTE: You need to add option to go back, to main menu
 */

function chooseAbook() {
	console.log("Here are the books");
	books.forEach((book, index) => { 
	  console.log(`${index + 1}: ${book}`); 
	});
  
	const choice = readlinesync.question("Make your choice"); 
	const choiceAsNumber = parseInt(choice); 
	user.book = books[choiceAsNumber - 1]; 
	
	if (user.book !== undefined) { 
		console.log(`You chose ${user.book}!`); 
	  } else {
		console.log("That is not a valid choice"); 
		chooseAbook(); 
	  }

}

/**
 * Exercise 2
 *
 * create a sub menu "Movies" where you need to render a list of {movies}.
 * User should be able to select one. On selection store the response
 * to {user.movie}.
 *
 * NOTE: You need to add option to "go back", to main menu
 */


function chooseAMovie() {
	console.log("Here are the movies");
	movies.forEach((movie, index) => { 
	  console.log(`${index + 1}: ${movie}`); 
	});
  
	const choice = readlinesync.question("Make your choice"); 
	const choiceAsNumber = parseInt(choice); 
	user.movie = movies[choiceAsNumber - 1]; 
	
	if (user.movie !== undefined) { 
		console.log(`You chose ${user.movie}!`); 
	  } else {
		console.log("That is not a valid choice"); 
		chooseAMovie(); 
	  }

}

/**
 * Exercise 3
 *
 * create a sub menu "Next destination" where you need to render a list
 * of {countries}. User should be able to select one. On selection store
 * the response to {user.nextTrip}.
 *
 * NOTE: You need to add option to go back, to main menu
 */

function chooseAdestination() {
	console.log("Here are the destinations");
	countries.forEach((destination, index) => { 
	  console.log(`${index + 1}: ${destination}`); 
	});
  
	const choice = readlinesync.question("Make your choice"); 
	const choiceAsNumber = parseInt(choice); 
	user.nextTrip = countries[choiceAsNumber - 1]; 
	
	if (user.nextTrip !== undefined) { 
		console.log(`You chose ${user.nextTrip}!`); 
	  } else {
		console.log("That is not a valid choice"); 
		chooseAdestination(); 
	  }

}

/**
 * Exercise 4
 *
 * create a top menu with categories: "Books", "Movies", "Next destination"
 * so user can pick one. User also should have the option "Exit".
 * When the user pick "Exit", log selected items.
 */

 const topMenu = ["Books", "Movies", "Next destination"];

 function chooseMenu() {
	console.log("Here are the menu options");
	topMenu.forEach((option, index) => { 
	  console.log(`${index + 1}: ${option}`); 
	});
  
	const choice = readlinesync.question("Make your choice"); 
	const choiceAsNumber = parseInt(choice); 
	const chosenoption = topMenu[choiceAsNumber - 1]; 
	
	if (chosenoption === 0) { 
		chooseAbook(); 
	  } else if (chosenoption === 1) {
		chooseAMovie(); 	
		} else if (chosenoption === 2) {
		chooseAdestination(); 
	  } else {
		console.log("That is not a valid choice"); 
		chooseMenu();
	  }
}