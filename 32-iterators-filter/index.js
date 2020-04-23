/**
 * Exercise 1
 *
 * create a function {noStrings} that takes an array
 * as a parameter and return an array but without strings
 */

noStrings = arr => {
    const withoutStrings = arr.filter(element => typeof element !== 'string');
    return withoutStrings;
}


/**
 * Exercise 2
 *
 * create a function {justStrings} that takes an array
 * as a parameter and return an array of strings by removing
 * every other type
 */

justStrings = arr => {
    const strings = arr.filter(element => typeof element === 'string');
    return strings;
}


/**
 * Exercise 3
 *
 * create a function {justStringsLongerThan5} that takes
 * an array as a parameter and return an array of strings
 * that are longer than 5 characters
 */

justStringsLongerThan5 = arr => {
    const stringsfiverorlonger = arr.filter(element => typeof element === 'string' && element.length > 5);
    return stringsfiverorlonger;
}


/**
 * Exercise 4
 *
 * create a function {numbersMoreThan13} that takes
 * an array as a parameter and return an array of numbers
 * that are more than 13
 */

numbersMoreThan13 = arr => {
    const numbers = arr.filter(element => typeof element === 'number' && element > 13);
    return numbers;
}

/**
 * Exercise 5
 *
 * create a function {objectsOnly} that takes
 * an array as a parameter and return an array of objects
 */

objectsOnly = arr => {
    const objectsarr = arr.filter(element => typeof element === 'object');
    return objectsarr;
}
 

/**
 * Exercise 6
 *
 * create a function {truthyOnly} that takes
 * an array as a parameter and return an array of truthy values.
 * IMPORTANT: You still need to keep number 0.
 */

truthyOnly = arr => {
 return arr.filter (element => {
     return element || element === 0;
});
};