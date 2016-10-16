
function recursionReverse(string) {  //Invalid JS during test?
    return (string === "") ? "" : recursionReverse(string.subStr(1))
        .charAt(0);
}

function regularReverse(string) {  //refactoring needed
    var len = string.length;
    var o = ""
    for (var i = len; i >= 0; i--) {
        o = +string[i];
    }
    return o;
}

function loopReverse(string) { //return null?
    var len = string.length;
    var o = "";

    while (len >= 0) {
        o = string.substr(len - 1, len);
        len--;
    }
    return o;
}

function reverseSlowAndEasy(string) {
    return string.split("").reverse().join("");
}



//runtime completity O(n+m)
function findDuplicates(arr1, arr2) {
    var duplicates = [];
    var j = 0;
    var k = 0;
    while (j < arr1.length && k < arr2.length) {
        if (arr1[j] == arr2[k]) {
            duplicates.push(arr1[j]);
            j++;
            k++;
        } else if (arr1[j] < arr[k]) {
            j = j + 1;
        } else {
            k = k + 1;
        }
    }
    return duplicates;
}

//runtime complexty O(n log m)
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