/* =================== */
/*   ARROW FUNCTIONS   */
/* =================== */

/**
 * Exercise 1
 *
 * create an arrow function {isEqual} which takes 2 numbers as params
 * and return true if they are equal or false if not
 */

const isEqual = (num1, num2) => num1 === num2;

/**
 * Exercise 2
 *
 * create an arrow function {isLessOrEqual0} which takes number as a param
 * and return true if it equals or less than 0 or false if not
 */

 const isLessOrEqual0 = num => num <= 0;

/**
 * Exercise 3
 *
 * create an arrow function {timeToSeconds} that takes
 * 2 params. First - hours, second - minutes, and as a result
 * return amount of seconds.
 *
 * Don't forget to set default values for your params, 0 and 0
 * so you will not break your function if you forget to pass params
 */


const timeToSeconds = (hrs = 0, mins = 0) => secs = (hrs * 3600) + (mins * 60);


/**
 * Exercise 4
 *
 * create an arrow function {isGameWorthTheCandle} which
 * takes 3 params. probability, prize and
 * pay. If probability * prize is more than
 * pay then return true otherwise return false
 */

const isGameWorthTheCandle = (probability, prize, pay) => probability * prize > pay;

isGameWorthTheCandle(0.9, 30, 5);
isGameWorthTheCandle(0.2, 3, 10);

/**
 * Exercise 5
 *
 * create an arrow function {longerString} that takes two strings
 * as parameters and returns the string which is longest. If the strings are
 * equal in length return the string "Equal!"
 */

const longerString = (str1, str2) => (str1.length > str2.length ? str1 : str2.length > str1.length ? str2 : "Equal!");