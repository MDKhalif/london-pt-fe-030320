/**
 * Exercise 1
 *
 * Create a function `greet` which takes your name as a parameter
 * and return "Hello 'your_name'!"
 */

 const name = "Mohammed";

 function greet(name){
    message = `Hello ${name}!`;
    return message;

 }

greet("Mohammed");

/**
 * Exercise 2
 *
 * Create a function `loginValidation` which takes age(number)
 * and returns "Welcome!" if the age is 18+ and "Sorry, not allowed."
 * if the age is less than 18
 */


function loginValidation (age) {
    if (age < 18) {
      message = "Sorry, not allowed."
      return message;
    } else {
      return "Welcome!";
    }}

loginValidation (21);

/**
 * Exercise 3
 *
 * Create a function `minNumber` which takes 2 numbers as params
 * and return the least one.
 */

function minNumber(number1, number2) {

number = Math.min(number1, number2);
 return number;
}

minNumber (10,6);

/**
 * Exercise 4
 *
 * Create a function `randomNumber` which returns an integer between
 * 1 and 10, fraction should be rounded to lower integer
 */

 
 function randomNumber(){
  return Math.floor(Math.random() * 10 + 1);
 }



/**
 * Exercise 5
 *
 * Create a function `getOppositeNumber` that takes a number as a param and
 * returns an opposite number
 */
function getOppositeNumber(num) {
    num = 5;
    return -num;
}
