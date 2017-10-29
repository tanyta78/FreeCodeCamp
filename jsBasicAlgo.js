//reverse a string
function reverseString(str) {
    var splitString=str.split("");
    var arr=splitString.reverse();
    var joined=arr.join("");
    return joined;
  }
  
  reverseString("hello");

  //Factorialize a Number 
  function factorialize(num) {
    if (num < 0) 
          return -1;
    else if (num == 0) 
        return 1;
    else {
        return (num * factorialize(num - 1));
    }
  }
  factorialize(5);

  //
  function factorialize2(num) {
    if (num === 0 || num === 1)
      return 1;
    for (var i = num - 1; i >= 1; i--) {
      num *= i;
    }
    return num;
  }
  factorialize2(5);

  //Check for Palindromes
  function palindrome(str) {
    var re = /[\W_]/g;
    var lowRegStr = str.toLowerCase().replace(re, '');
    var reverseStr = lowRegStr.split('').reverse().join(''); 
    return reverseStr === lowRegStr;
  }
  palindrome("A man, a plan, a canal. Panama");

  //Find the Longest Word in a String Complete   
  function findLongestWord(str) {
    var strSplit = str.split(' ');
    var longestWord = 0;
    for(var i = 0; i < strSplit.length; i++){
      if(strSplit[i].length > longestWord){
      longestWord = strSplit[i].length;
       }
    }
    return longestWord;
  }
  findLongestWord("The quick brown fox jumped over the lazy dog");
  //
  function findLongestWord2(str) {
    var longestWord = str.split(' ').sort(function(a, b) { return b.length - a.length; });
    return longestWord[0].length;
  }
  findLongestWord2("The quick brown fox jumped over the lazy dog");
  //Title Case a Sentence Complete  
  function titleCase(str) {
    return str.toLowerCase().split(' ').map(function(word) {
      return (word.charAt(0).toUpperCase() + word.slice(1));
    }).join(' ');
  }
  titleCase("I'm a little tea pot");
  function titleCase2(str) {
    return str.toLowerCase().split(' ').map(function(word) {
      return word.replace(word[0], word[0].toUpperCase());
    }).join(' ');
  }
  titleCase2("I'm a little tea pot");
  function titleCase3(str) {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    }
    return str.join(' ');
  }
  titleCase3("I'm a little tea pot");

  //Return Largest Numbers in Arrays Complete 
  function largestOfFour(mainArray) {
    return mainArray.map(function(subArray) {
      return Math.max.apply(null, subArray);
    });
  }

  function largestOfFour2(mainArray) {
    return mainArray.map(function (subArray){
      return subArray.reduce(function (previousLargestNumber, currentLargestNumber) {
        return (currentLargestNumber > previousLargestNumber) ? currentLargestNumber : previousLargestNumber;
      }, 0);
    });
  }

  function largestOfFour3(arr) {
    var largestNumber = [0,0,0,0];
    for(var arrayIndex = 0; arrayIndex < arr.length; arrayIndex++) {
     for(var subArrayIndex = 0; subArrayIndex < arr[arrayIndex].length; subArrayIndex++) {
        if(arr[arrayIndex][subArrayIndex] > largestNumber[arrayIndex]) {         
           largestNumber[arrayIndex] = arr[arrayIndex][subArrayIndex];
         }
     }
  }
  return largestNumber;
 }
 largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

 //Confirm the Ending Complete 
 function confirmEnding(string, target) {
    return string.substr(-target.length) === target;
  }
  confirmEnding('Bastian', 'n');

  //Repeat a string repeat a string Complete 
  function repeatStringNumTimes(string, times) {
    var repeatedString = "";
    while (times > 0) {
      repeatedString += string;
      times--;
    }
    return repeatedString;
  }
  repeatStringNumTimes("abc", 3);
  function repeatStringNumTimes2(string, times) {
    if (times > 0)
      return string.repeat(times);
    else
      return "";
  }
  repeatStringNumTimes2("abc", 3);

  //Truncate a string Complete   
  function truncateString(str, num) {
    var strLen = str.length;
     
     if (strLen > num && num > 3) {
       return str.slice(0, (num - 3)) + '...';
     } else if (strLen > num && num <= 3) {
       return str.slice(0, num) + '...';
     } else {
       return str;
     }
   
   }

   //Chunky Monkey
   function chunkArrayInGroups(arr, size) {
    var result = [];
    for (var i = 0; i < arr.length; i+=size) {
      result.push(arr.slice(i , i+size));
    }
    return result;
  }
  
  chunkArrayInGroups(["a", "b", "c", "d"], 2);

  //Slasher Flick
  function slasher(arr, howMany) {
    // remove the head
    arr.splice(0, howMany);
    // return the remaining or the tail
    return arr;
  }
  slasher([1, 2, 3], 2);

  //Mutations
  function mutation(arr) {
    // For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.
     var first=arr[0].toLowerCase();
     var second = arr[1].toLowerCase();
     for(i=0;i<second.length;i++){
       var searchChar = second[i];
       if(first.indexOf(searchChar)<0){
         return false;
       }
     }
     return true;
   }
   
   mutation(["hello", "hey"]);
//Falsy Bouncer

function bouncer(arr) {
    return arr.filter(Boolean);
    
  }
  
  bouncer([7, "ate", "", false, 9]);

  //Seek and Destroy
  function destroyer(arr) {
    var args = Array.prototype.slice.call(arguments);
  
    for (var i = 0; i < arr.length; i++) {
      for (var j = 0; j < args.length; j++) {
        if (arr[i] === args[j]) {
          delete arr[i];
        }
      }
    }
    return arr.filter(Boolean);
  }

  function destroyer1(arr) {
    var args = Array.from(arguments).slice(1);
    return arr.filter(function(val) {
      return !args.includes(val);
    });
  }

  //Where do I belong Complete 
  function getIndexToIns(arr, num) {
    arr.sort(function(a, b) {
      return a - b;
    });
  
    for (var a = 0; a < arr.length; a++) {
      if (arr[a] >= num)
        return a;
    }
  
    return arr.length;
  }

  function getIndexToIns1(arr, num) {
    arr.push(num);
    arr.sort(function(a, b){return a-b});
    return arr.indexOf(num);
  }

  /*Caesars Cipher Complete A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔  'O' and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.*/
function rot13(str) { // LBH QVQ VG!
    return str.replace(/[A-Z]/g, L => String.fromCharCode((L.charCodeAt(0) % 26) + 65));
  }
   