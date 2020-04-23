/**
 * Exercise 1
 * create a function {logProperties} which will
 * take object as a param and console log each property in a format
 * "Property name: {propertyName}"
 */

 function logProperties(obj){
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            console.log(key);
            
        }
    }

 }

/**
 * Exercise 2
 * Create a function {getAllValues} that takes an object
 * and returns an array of all values.
 */

 function getAllValues(obj){
     //const Array = [];
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            const element = obj[key];
            //Array.push(element);            
        }
    }

    return Object.values(obj);

 }


/**
 * Exercise 3
 * Create a function {getAllValuesAsString} that takes an object
 * and returns all values as one string with space separation.
 */


function getAllValuesAsString(obj){

    for (const key in obj) {
    const element = obj[key];
    const Array = Object.values(obj);
    return Array.join(' ');
    }

}

/**
 * Exercise 4
 * Create a function {propertyValueString} that takes object as a param
 * and log property and values as string in a next format:
 * 'PROPERTY: VALUE'
 */

 function propertyValueString(obj){
    for (const key in obj) {
        console.log(`${key}: ${obj[key]}`);
    }
 }