
function reverse(s) {
  return (s === '') ? '' : reverse(s.substr(1)) + s.charAt(0);
}

function reverse(s) { //works
  var o = '';
  for (var i = s.length - 1; i >= 0; i--){
    o += s[i];
  }
  return o;
}

function reverse(s) {  //works
  var i = s.length,
      o = '';
  while (i > 0) {
    o += s.substring(i - 1, i);
    i--;
  }
  return o;
}

function reverseSlowAndEasy(string) { //works
    return string.split("").reverse().join("");
}

function reverse(s) { //Works
  for (var i = s.length - 1, o = ''; i >= 0; o += s[i--]) { }
  return o;
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