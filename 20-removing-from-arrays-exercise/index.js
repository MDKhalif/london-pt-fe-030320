
/**
 * create an array "carBrands"
 * and assign to it ["Mercedes", "Volvo", "BMW", "Reno", "Vauxhall", "Land Rover"]
 */

const carBrands = ["Mercedes", "Volvo", "BMW", "Reno", "Vauxhall", "Land Rover"];

/**
 * Exercise 1
 *
 * remove the last element from the carBrands array
 *
 * * PS: console.log() the result to see the difference
 */


carBrands.pop();
console.log(carBrands);

/**
 * Exercise 2
 *
 * remove the first element from the carBrands array
 *
 * * PS: console.log() the result to see the difference
 */

carBrands.shift();
console.log(carBrands);

/**
 * Exercise 3
 *
 * from "carBrands" remove "Vauxhall"
 *
 * * PS: console.log() the result to see the difference
 */

carBrands.pop("Vauxhall");
console.log(carBrands);



/**
 * Exercise 4
 *
 * in "carBrands" replace BMW with Rolls-Royce
 *
 * * PS: console.log() the result to see the difference
 */

 carBrands.splice(0, 2, "Rolls-Royce");
 console.log(carBrands);