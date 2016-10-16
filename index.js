'use strict';

/**
 * Finds Duplicates in two Arrays
 * @param {arr1} first Array
 * @param {arr2} secondArry
 * @return {duplicates} array of duplicates
 */

/*
module.exports = //runtime complexty O(n log m)
function findDuplicatesAdv(arr1, arr2) {
    var duplicats = [];
    for (var i = 0; i < arr1.length; i++) {
        var result = binarySearch(arr2, arr1[i]);
        if (result == -1) {
            continue;
        } else {
            duplicats.push(result);
        }
    }
    return duplicats;
}


function binarySearch(arr, value) {
    var low = 0;
    var high = arr.length - 1;
    var midpoint = 0;
    while (low <= high) {
        if (value == arr[midpoint]) {
            return value;
        } else if (value < arr[midpoint]) {
            high = midpoint - 1;
        } else {
            low = midpoint + 1;
        }
    }
    return -1;
}
*/

'use strict';

/**
 * Adds commas to a number
 * @param {number} number
 * @param {string} locale
 * @return {string}
 */
module.exports = function(number, locale) {
    return number.toLocaleString(locale);
};