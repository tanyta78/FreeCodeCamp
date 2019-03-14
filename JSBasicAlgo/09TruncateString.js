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