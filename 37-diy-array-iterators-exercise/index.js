/**
 * Exercise #1
 *
 * forEach(array, callback)
 *
 * The callback is invoked for every
 * element in the array and is
 * passed each element and the index.
 *
 */

 forEach = (arr, callback) => {
     for (let i = 0; i < arr.length; i++) {
         callback(arr[i], i);
         
     }
 }



/**
 * Exercise #2
 *
 * map(array, callback)
 *
 * The callback is invoked for every
 * element in the array and is passed
 * each element and the index. 
 * 
 * A new array is returned which contains
 * whatever was returned from each
 * time the callback was invoked.
 *
 */

map = (arr,callback) => {

newArr = [];

for (let i = 0; i < arr.length; i++) {
    const result = callback(arr[i], i);
    // const newelement = (arr[i]);
    newArr.push(result);
    }

    return newArr;

}

/**
 * Exercise #3
 *
 * filter(array, callback)
 *
 * The callback is invoked for every
 * element in the array and is passed
 * each element and the index. 
 * 
 * A new array is returned which contains
 * _only_ the elements for which the
 * callback returned a truthy value.
 *
 */

filter = (arr, callback) =>{

     newArr = [];

    for (let i = 0; i < arr.length; i++) {
        const result = callback(arr[i], i);

        if (result) {
            newArr.push(arr[i]);
        }
        
    }
    return newArr;
}


/**
 * Exercise #4
 *
 * find(array, callback)
 *
 * The callback is invoked for every
 * element in the array and is passed
 * each element and the index. 
 * 
 * The function returns the _first element_
 * for which the callback returns a
 * truthy value.
 *
 */

 find = (arr, callback) => {

    for (let i = 0; i < arr.length; i++) {
            const result = callback(arr[i], i);

            if (result) {
                return arr[i];
            }
        
    }

 }

/**
 * Exercise #5
 *
 * findIndex(array, callback)
 *
 * The callback is invoked for every
 * element in the array and is passed
 * each element and the index. 
 * 
 * The function returns the _index of
 * the first element_ for which the
 * callback returns a truthy value.
 *
 */

findIndex = (arr, callback) => {

    for (let i = 0; i < arr.length; i++) {
            const result = callback(arr[i], i);

            if (result) {
                return i;
            }
        
    }

 }


/**
 * Exercise #6
 *
 * every(array, callback)
 *
 * The callback is invoked for every
 * element in the array and is passed
 * each element and the index. 
 * 
 * The function returns a boolean value
 * representing if every time the
 * callback was invoked it returned
 * a truthy value.
 *
 */


every = (arr, callback) => {

    for (let i = 0; i < arr.length; i++) {
        const result = callback(arr[i], i);

        if (!result) {
            return false;
            }      
        } return true; 
    }

/**
 * Exercise #7
 *
 * some(array, callback)
 *
 * The callback is invoked for every
 * element in the array and is passed
 * each element and the index. 
 * 
 * The function returns a boolean value
 * representing if _any_ time the
 * callback was invoked it returned
 * a truthy value.
 *
 */

 some = (arr, callback) => {

    for (let i = 0; i < arr.length; i++) {
        const result = callback(arr[i], i);

        if (Boolean(result) === true) {
            return true;
        } 
        
    }
 }


/**
 * Exercise #8
 *
 * reduce(array, callback, initialValue)
 *
 * Reduce is often used for combining
 * values together.
 *
 * `reduce` should take 3 arguments:
 * `array`, `callback` and `initialValue`.
 *
 * The callback is invoked for every
 * element in the array and is passed
 * **the current cumulative value**,
 * each element and the index. 
 * 
 * Whatever
 * the callback returns is the new
 * cumulative value. The function
 * should return the final cumulative
 * value.
 *
 */

 reduce = (array, callback, initialValue = 0) => {
    
    let acc = initialValue;

    for (let i = 0; i < array.length; i++) { 
        acc = callback(acc, array[i], i);     
    }
    return acc;
 }

