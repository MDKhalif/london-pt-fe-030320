/**
 * Exercise 1
 *
 * create a global variable "myFavoriteAnimal" and
 * assign your favorite animal
 */

function myFavoriteAnimal() {
    myFavoriteAnimal = "Lion";
}

myFavoriteAnimal ();

/**
 * Exercise 2
 *
 * create a function "myAnimalWithLog", which will have
 * console.log with the message "My favorite animal is `myFavoriteAnimal`"
 * Check developer tools in your browser for the message
 */

function myAnimalWithLog() {
    console.log ("My favorite animal is " + myFavoriteAnimal);
}

myAnimalWithLog ();

/**
 * Exercise 3
 *
 * create a function "myAnimalWithWarn", which will have
 * console.warn with the message "My favorite animal is `myFavoriteAnimal`"
 * Check developer tools in your browser for the message
 * and see the difference with console.log
 */

 function myAnimalWithWarn() {
     global.console.warn ("My favorite animal is " + myFavoriteAnimal);
 }

myAnimalWithWarn ();

/**
 * Exercise 4
 *
 * create a function "myAnimalWithError", which will have
 * console.error with the message "My favorite animal is `myFavoriteAnimal`"
 * Check developer tools in your browser for the message
 * and see the difference with console.log
 */

function myAnimalWithError() {
    console.error ("My favorite animal is " + myFavoriteAnimal);
}

myAnimalWithError ();

/**
 * Exercise 5
 * create a function "myCity", which will have
 * alert(read about it) with the message "My favorite cat is YOUR_CITY"
 *
 */
<<<<<<< HEAD


function myCity() {
    myCity = "London";
    global.alert("My favorite city is " + myCity);

};
=======
>>>>>>> 88a68ad6e0c2c65a0e369253eeb292911925adb7
