'use strict';

// YOU KNOW WHAT TO DO //

/**
 * identity: Designed to return anything that is passed through
 * unchanged
 * @parm Anything: Can be anything that is put into it
*/

function identity(anything) {
    return anything;
}

/**
 * typeOf: Returns the specific type as a string
 * @parm Anything: Can be passed with anything
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
module.exports.identity = identity;
module.exports.typeOf = typeOf;
module.exports.first = first;
module.exports.each = each;
