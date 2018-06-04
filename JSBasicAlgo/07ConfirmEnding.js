//Confirm the Ending Complete 
function confirmEnding(string, target) {
    return string.substr(-target.length) === target;
  }
  confirmEnding('Bastian', 'n');