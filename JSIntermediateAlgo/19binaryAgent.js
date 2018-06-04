//Binary Agents
//Return an English translated sentence of the passed binary string.The binary string will be space separated.

function binaryAgent(str) {
    let arr = str.split(' ').map(function (el) { return String.fromCharCode(parseInt(el, 2)); });
    return arr.join('');
  }
  // return String.fromCharCode(...str.split(" ").map(function(char){ return parseInt(char, 2); }));
  
  
  