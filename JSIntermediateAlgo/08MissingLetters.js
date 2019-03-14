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

  fearNotLetter("abce");//abcde