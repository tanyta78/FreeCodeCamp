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