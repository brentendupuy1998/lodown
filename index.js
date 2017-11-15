'use strict';

// YOU KNOW WHAT TO DO //

/**
 * identity: Designed to return anything that is passed through
 * unchanged
 * @param Anything is the paramater, anything can be put into it.
*/

function identity(anything) {
    return anything;
}

/**
 * typeOf: Returns the specific type as a string
 * @param Anything: Can be passed with anything
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
 * @param Array
 * @param Number
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
 * @param Array
 * @param Number
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
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
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
 * @param: Array
 * @param: Value
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
 * @params: Array
 * @params: Function
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
 * @param: Array
 * @param: Function
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
 * @param: Array
 * @param: Function
*/
 
 function partition(array, func) {
return [filter(array, func), reject(array, func)];
}

/**
 * 
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
 * map: When calling the function passing the arguments, save and return
 * value of each function call in a new array
 * Then return the new array
 * @param Collection
 * @param Function
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
 * @param Array
 * @param Property
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
 */ 

function contains(array, value) {
    return (indexOf(array, value) > -1 ? true : false);
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

