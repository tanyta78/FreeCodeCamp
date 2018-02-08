// Sum All Numbers in a Range
function sumAll(arr) {
  for (var i = Math.min(arr[0], arr[1]) + 1; i < Math.max(arr[0], arr[1]); i++) {
    arr.push(i);
  }
  return arr.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
  });
}

//Diff Two Arrays
//Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.
function diffArray(arr1, arr2) {
  return arr1
    .concat(arr2)
    .filter(
    item => !arr1.includes(item) || !arr2.includes(item)
    )
}

//Diff Two Arrays2
function diffArray(arr1, arr2) {
  return arr1
    .filter(el => !arr2.includes(el))
    .concat(
    arr2.filter(el => !arr1.includes(el))
    );
}

//Roman Numeral Converter
var convertToRoman = function (num) {

  var decimalValue = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  var romanNumeral = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

  var romanized = '';

  for (var index = 0; index < decimalValue.length; index++) {
    while (decimalValue[index] <= num) {
      romanized += romanNumeral[index];
      num -= decimalValue[index];
    }
  }

  return romanized;
};

//Wherefore art thou
//Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching property and value pairs (second argument). Each property and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.
function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  let propertiesForSearch = Object.keys(source);
  // filter the collection
  arr = collection.filter(function (obj) {
    for (var i = 0; i < propertiesForSearch.length; i++) {
      if (!obj.hasOwnProperty(propertiesForSearch[i]) || obj[propertiesForSearch[i]] !== source[propertiesForSearch[i]]) {
        return false;
      }
    }
    return true;
  });
  //var2 to filter
  /*
  return collection.filter(function (obj) {
      return srcKeys
        .map(function(key) {
          return obj.hasOwnProperty(key) && obj[key] === source[key];
        })
        .reduce(function(a, b) {
          return a && b;
        });
    });
  */

  // Only change code above this line
  return arr;
}

//SearchAndReplace
//Perform a search and replace on the sentence using the arguments provided and return the new sentence.First argument is the sentence to perform the search and replace on.Second argument is the word that you will be replacing (before).Third argument is what you will be replacing the second argument with (after). Preserve the case of the original word when you are replacing it
function myReplace(str, before, after) {
  if (/[A-Z]/.test(before[0])) {
    after = after.charAt(0).toUpperCase() + after.slice(1);
  }
  return str.replace(before, after);
}

//PigLatin
//Translate the provided string to pig latin.Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".If a word begins with a vowel you just add "way" to the end.
function translatePigLatin(str) {
  var vowelsRgx = /[aeiouy]/gi;

  if (str[0].match(vowelsRgx)) {
    str = str + 'way';
  } else {
    var vowelIndex = str.indexOf(str.match(vowelsRgx)[0]);
    str = str.substr(vowelIndex) + str.substr(0, vowelIndex) + 'ay';
  }
  return str;
}

//PigLatin2
function translatePigLatin2(str) {
  return str
    .replace(/^([aeiouy])(.*)/, '$1$2way')
    .replace(/^([^aeiouy]+)(.*)/, '$2$1ay');
}

//DNA Pairing
//The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.Base pairs are a pair of AT and CG. Match the missing element to the provided character.Return the provided character as the first element in each array.For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.
function pairElement(str) {
  let result = [];
  let strAsArr = str.split('');
  for (let i = 0; i < strAsArr.length; i++) {
    let element = strAsArr[i];
    switch (element) {
      case 'C':
        result.push(['C', 'G']);
        break;
      case 'G':
        result.push(['G', 'C']);
        break;
      case 'A':
        result.push(['A', 'T']);
        break;
      case 'T':
        result.push(['T', 'A']);
        break;
    }

  }
  return result;
}
//
function pairElement2(str) {
  //define a map object with all pair possibilities 
  let map = { T: 'A', A: 'T', G: 'C', C: 'G' };
  //split str into a char Array
  let strArr = str.split('');
  //replace each Array item with a 2d Array using map
  for (let i = 0; i < strArr.length; i++) {
    strArr[i] = [strArr[i], map[strArr[i]]];
  }
  return strArr;
}

//Missing letters
//Find the missing letter in the passed letter range and return it. If all letters are present in the range, return undefined.
function fearNotLetter(str) {
  var i;
  var asciiCode;
  var len = str.length;
  var firstCharCode = str.charCodeAt(0);
  for (i = 0; i < len; i++) {
    asciiCode = str.charCodeAt(i);
    if (asciiCode !== firstCharCode + i) {
      return String.fromCharCode(asciiCode - 1);
    }

  }
  return undefined;
}

//Boo who
//Check if a value is classified as a boolean primitive. Return true or false.
function booWho(bool) {
  // What is the new fad diet for ghost developers? The Boolean.
  return typeof bool === 'boolean';

}

//Sorted Union
//Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.
function uniteUnique(arr) {

  let arrAll = [].concat(...arguments);
  let unique = new Set(arrAll);
  return [...unique];
}
//
function uniteUnique2(arr) {
  var unique = [];

  for (var i = 0; i < arguments.length; i++) {
    var arrArgs = arguments[i];
    var len = arrArgs.length;
    for (var j = 0; j < len; j++) {
      var indexValue = arrArgs[j];

      if (unique.indexOf(indexValue) < 0) {
        unique.push(indexValue);
      }
    }
  }

  return unique;
}
//
function uniteUnique3(arr1, arr2, arr3) {
  var newArr;
  //Convert the arguments object into an array
  var args = Array.prototype.slice.call(arguments);
  //Use reduce function to flatten the array
  newArr = args.reduce(function (arrA, arrB) {
    //Apply filter to remove the duplicate elements in the array
    return arrA.concat(arrB.filter(function (i) {
      return arrA.indexOf(i) === -1;
    }));
  });

  return newArr;
}

//Convert HTML Entities
//Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

function convertHTML1(str) {
  // &colon;&rpar;
  var convertor = { '&': '&amp', '<': '&lt', '>': '&gt', '"': '&quot', "'": '&apos' };
  return str.replace(/[&<>"']/g, function (match) {
    return convertor[match];
  });
}

function convertHTML(str) {
  // &colon;&rpar;
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");

}

//Spinal Tap Case
//Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  return str.replace(/([a-z])([A-Z])|[_|\s]+/g, '$1-$2').toLowerCase();
}

//sumAllOddFibonacciNumbers
//Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than 10 are 1, 1, 3, and 5.
function sumFibs1(num) {
  var sum = 0;
  var prev = 0;
  var current = 1;
  while (current <= num) {
    if (current % 2 == 1) sum += current;
    current += prev;
    prev = current - prev;
  }
  return sum;
}

function sumFibs(num) {
  // create an array of fib numbers till num
  var arrFib = [1];
  for (var i = 1; i <= num;) {
    arrFib.push(i);
    i = arrFib[arrFib.length - 1] + arrFib[arrFib.length - 2];
  }

  // return the sum of odd numbers from the array
  var res = arrFib.reduce(function (prev, curr) {
    if (curr % 2 !== 0) return prev + curr;
    else return prev;
  });

  return res;
}

//Sum All Primes
//Sum all the prime numbers up to and including the provided number.A prime number is defined as a number greater than one and having only two divisors, one and itself. For example, 2 is a prime number because it's only divisible by one and two.The provided number may not be a prime.
function sumPrimes(num) {
  var sum = 0;

  for (let i = 0; i <= num; i++) {
    if (isPrime(i)) sum += i;
  }

  function isPrime(num) {
    if (num === 0 || num === 1) {
      return false;
    }
    for (var i = 2; i <= num; i++) {
      if (num % i === 0 && num != i) {
        return false;
      }
    }
    return true;
  }

  return sum;
}

//Smallest Common Multiple
//Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.The range will be an array of two numbers that will not necessarily be in numerical order.e.g. for 1 and 3 - find the smallest common multiple of both 1 and 3 that is evenly divisible by all numbers between 1 and 3.

function smallestCommons(arr) {
  var range = [];
  for (var i = Math.max(arr[0], arr[1]); i >= Math.min(arr[0], arr[1]); i--) {
    range.push(i);
  }

  // can use reduce() in place of this block
  var lcm = range[0];
  for (i = 1; i < range.length; i++) {
    var GCD = gcd(lcm, range[i]);
    lcm = (lcm * range[i]) / GCD;
  }
  return lcm;

  function gcd(x, y) {    // Implements the Euclidean Algorithm for greatest common divisor
    if (y === 0)
      return x;
    else
      return gcd(y, x % y);
  }
}


//Finders Keepers
//Create a function that looks through an array (first argument) and returns the first element in the array that passes a truth test (second argument).

function findElement(arr, func) {

  return arr.filter(func)[0];

}

//Drop it
//Drop the elements of an array (first argument), starting from the front, until the predicate (second argument) returns true.The second argument, func, is a function you'll use to test the first elements of the array to decide if you should drop it or not.Return the rest of the array, otherwise return an empty array.

function dropElements(arr, func) {

  // Drop them elements.
  let element = arr.filter(func).shift();
  return element == undefined ? [] : arr.slice(arr.indexOf(element));

}

//Steamroller
//Flatten a nested array. You must account for varying levels of nesting. steamrollArray([1, [2], [3, [[4]]]]);

function steamrollArray(arr) {
  // I'm a steamroller, baby
  var result = [];

  var flattenFunc = function (el) {
    if (!Array.isArray(el)) {
      result.push(el);
    } else {
      for (var index in el) {
        flattenFunc(el[index]);
      }
    }
  };

  arr.forEach(flattenFunc);
  return result;
}

function steamrollArray2(arr) {
  return arr.toString()
    .replace(',,', ',')       // "1,2,,3" => "1,2,3"
    .split(',')               // ['1','2','3']
    .map(function (v) {
      if (v == '[object Object]') { // bring back empty objects
        return {};
      } else if (isNaN(v)) {        // if not a number (string)
        return v;
      } else {
        return parseInt(v);         // if a number in a string, convert it
      }
    });
}

function steamrollArray3(arr) {
  let flat = [].concat(...arr);
  return flat.some(Array.isArray) ? steamrollArray(flat) : flat;
}

//Binary Agents
//Return an English translated sentence of the passed binary string.The binary string will be space separated.

function binaryAgent(str) {
  let arr = str.split(' ').map(function (el) { return String.fromCharCode(parseInt(el, 2)); });
  return arr.join('');
}
// return String.fromCharCode(...str.split(" ").map(function(char){ return parseInt(char, 2); }));

//Everything Be True
//Check if the predicate (second argument) is truthy on all elements of a collection (first argument).Remember, you can access object properties through either dot notation or [] notation.

function truthCheck(collection, pre) {
  // Is everyone being true?
  return collection.every(function (element) {
    return element.hasOwnProperty(pre) && Boolean(element[pre]);
  });
}

//Arguments Optional
//Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.Calling this returned function with a single argument will then return the sum:var sumTwoAnd = addTogether(2);sumTwoAnd(3) returns 5.If either argument isn't a valid number, return undefined.


function addTogether() {
  var len = arguments.length;
  var args = Array.from(arguments);
  return args.some(function (e) {
    return typeof e !== 'number';
  }) ? undefined:
  len > 1 ? args.reduce(function (sum, n) {
    return sum += n;
  }) : function (n) { return typeof n === 'number' ? n + args[0] : undefined; };
}



