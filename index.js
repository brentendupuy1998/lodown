'use strict';

// YOU KNOW WHAT TO DO //

/**
 * identity: Designed to return anything that is passed through
 * unchanged
 * @param {anything} Anything is the paramater, anything can be put into it.
 * @return: what was passed in the parameter
*/

function identity(anything) {
    return anything;
}

/**
 * typeOf: Returns the specific type as a string
 * @param {anything} Can be passed with anything
 * @return a string with the type of argument from the parameter
 */

function typeOf(anything) {
    if (Array.isArray(anything)) {
        return "array";
    } else if (anything instanceof Date) {
        return "date";
    } else if (anything === null) {
        return "null";
    } else {
        return typeof anything;
    }
}

/**
 * first: If the array is not an array it will returh [];
 * if there is not a number return the first element in array
 * or return the first number of items of array
 * @param {array} that is being looped over
 * @param {number}
 * @return {array} an array with the first number of elements from the paramater
 */
 
function first(array, number) {
    if (!Array.isArray(array) || number < 0) {
        return [];
    }
    if (typeof number !==  'number' || !number) {
        return array[0];
    } else {
      return array.slice(0, number);
    }
}

/**
 * last: If the array is not an array, it returns an empty array [],
 * if the number is not a given number, 
 * it will return the last element within the array
 * Otherwise, it will return the last number of items within the array
 * 
 * @param {array} to loop over, 
 * @param {number} of elements within the array
 * @return {array} an array with the last parameter from the array that was passed in
*/

function last(array, number) {
    if (!Array.isArray(array) || number < 0) {
        return [];
    }
    if (typeof number !==  'number' || !number) {
        return array[array.length-1];
    } else {
      return array.slice(-number);
    }
}

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {array or object} collection: The collection over which to iterate.
 * @param {function} action: The Function to be applied to each value in the 
 * collection
 * @return nothing
 */
 
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}

/**
 * indexOf: Uses a loop and goes through and returns the index of the array 
 * with the first occurance of value, returns -1 if the value is
 * not an array
 * @param: {array} being looped over
 * @param: {value} any value for it to compare each element
 * @return: {number} first number index in the array that matches value
 */


function indexOf(array, value) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] === value) {
            return i;
        }
    } return -1;
}


/**
 * filter: When called with the passing arguments the element, it's index,
 * array
 * Returns a new array of elements for which is returned true
 * We used the each function to loop over the array.
 * @params: {array} that is being looped over
 * @params: {function} that is going to be used 
 * @return {array} with all the elements that is true from the parameter passed in
 */

function filter (array, func) {
    var newArray = [];
    each(array, function (value, index, collection) {
        if (func(value, index, collection)) {
            newArray.push(value);
        }
    });
    return newArray;
}

/**
 * reject: When called, passes the arguments: the element, it's index, 
 * and array
 * Returns new array of elements for which the function returned false
 * 
 * Uses the each function to loop over the array pushing the value
 * into a new array
 * @param: {array} being looped over
 * @param: {function} that is going to be called for true or false
 * @return {array} with all the elements in the array that is false from the paramater passed in
 */
 
 function reject(array, func) {
        var newArray = [];
    each(array, function (value, index, collection) {
        if (!func(value, index, collection)) {
            newArray.push(value);
        }
    });
    return newArray;
}

/**
 * parition: Calling the function passes the arguments through it
 * Returns an array made up of 2 sub arrays,
 * One array that contains the values for the function that returned truthy
 * One array that contains the values for the function that returned falsey
 * @param: {array} to loop over
 * @param: {function} a test function to have on each element within the array
 * @return {array} many arrays, the first has values of true, and the other has values of false
*/
 
 function partition(array, func) {
return [filter(array, func), reject(array, func)];
}

/**unique: When called, unique uses each and indexOf to loop over the array
 * pushes the new value into a newArray, then returns it
 * 
 * @param: {array}, which is the array we have to loop over
 * @return {array} that has every element within array
 */
 
 
 
function unique(array) {
    var newArray = [];
    each(array, function(value, i, collection) {
        if (indexOf(newArray, value) === -1) {
            newArray.push(value);
        }
});
    return newArray;
}

/**
 * map: When calling the function, map loops over the collection and then pushes
 * into the newArray, then returns the new array
 * Then return the new array
 * @param {array or object} collection, that needs to loop over
 * @param {function}
 * @return {array} an array having each element from the array parameter, then changed by function parmeter
 */


function map(collection, func) {
    var newArray = [];
    each(collection, function(value, i, collections) {
        newArray.push(func(value, i, collections));
    });
    return newArray;
}


/**
 * pluck: Returns an array containing the value of property for every
 * element in array
 * Uses the map function
 * @param {array of objects} loop over
 * @param {string} the key to look in
 * @return {array} values within proberty of each object
 */
 
 function pluck(array, property) {
    return map(array, function(value, i, array) {
        return value[property];
    });
}

/**
 * contains: Returns true if the array contains value
 * Returns false otherwise
 * Ternary operator is being used
 * @param {array} to iterate over
 * @param {value} checking within the array
 * @return {boolean} true if the value found in array, otherwise returns false
 */ 

function contains(array, value) {
    return (indexOf(array, value) > -1 ? true : false);
}

/**
 * every: Has parameters of if the collection is an array, or an object,
 * For every elements that true, returns true
 * If one of them is false, return false
 * If function is not provided return true, if every element is truthy
 * return false
 * @param {array or object} collection, to loop over
 * @param {function}
 * @return {boolean} if true, else returns false
 */

    function every(collection, func) {
    return reject(collection, function(value, index, collection) {
        if (!func) {
            return !!value;
        }
        else {
            return func(value, index, collection);
        }
}).length === 0;
}

/**
 * some: If collection is an array or an object, returns value of calling
 * the function is true for at least one element
 * If it is false for all other elements return false
 * If the function is not provided return true, if at least one element is
 * truthy, otherwise return false
 * @param {array or object} collection to loop thorough
 * @param {function}
 * @return {boolean} true if true, else returns false
 */

 function some(collection, func) {
    return filter(collection, function(value, index, group) {
        if (!func) {
            return !!value;
        } else {
            return func(value, index, collection);
        }
    }).length > 0;
}

/**
 * Reduce takes three params, collection, function, seed
 * Loops over a collection
 * Seed is optional
 * If seed is not given it, it becomes the first value of collection
 * func takes 4 parameters: seed, collection[i], i, collection
 * seed = the result of func
 * Returns seed
 * @param {array} to loop over
 * @param {function}
 * @param Seed that has a starting point for reduce
 * @return from the final call
 */

 function reduce (array, func, seed) {
    var arrayToIterate = array;
    var previousResult;
    var indexModifier = 0;
    if (seed !== null && seed !== undefined) {
        previousResult = seed;
    } else {
        previousResult = array[0];
        arrayToIterate = array.slice(1, array.length);
        indexModifier = 1;
    }
    each(arrayToIterate, function(value, index, collection) {
        previousResult = func(previousResult, value, index + indexModifier);
    });
    return previousResult;
    
    
// var reduce = (collection, cb, acc) => {
//   each(collection, (v, k, c) =>
//     (acc = acc === undefined ? v : cb (acc, v, k, c))
//     );
//     return acc;
// };
    
    
}

/**
 * extend: Copy object from Object two to object one
 * If more objects are passed in, copy their properties to object one as well
 * In the other they are passed in
 * Return the update object one
 @param {object} takes different numbers of objects, returns undefined if there are no arguements
 @return {object} object with key values
 */
 

 function extend(objectOne, objectTwo) {
    var args = Array.prototype.slice.call(arguments);
    return reduce(args, function(previousSum, currentValue, currentIndex) {
        return Object.assign(previousSum, currentValue);
    });
}




module.exports.identity = identity;
module.exports.typeOf = typeOf;
module.exports.first = first;
module.exports.last = last;
module.exports.each = each;
module.exports.indexOf = indexOf;
module.exports.filter = filter;
module.exports.reject = reject;
module.exports.partition = partition;
module.exports.unique = unique;
module.exports.map = map;
module.exports.pluck = pluck;
module.exports.contains = contains;
module.exports.every = every;
module.exports.some = some;
module.exports.reduce = reduce;
module.exports.extend = extend;

