//reverse a string
function reverseString(str) {
    var splitString=str.split("");
    var arr=splitString.reverse();
    var joined=arr.join("");
    return joined;
  }
  
  reverseString("hello");