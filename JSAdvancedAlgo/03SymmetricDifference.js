//Symmetric Difference
//Create a function that takes two or more arrays and returns an array of the symmetric difference (△ or ⊕) of the provided arrays.Given two sets (for example set A = {1, 2, 3} and set B = {2, 3, 4}), the mathematical term "symmetric difference" of two sets is the set of elements which are in either of the two sets, but not in both (A △ B = C = {1, 4}). For every additional symmetric difference you take (say on a set D = {2, 3}), you should get the set with elements which are in either of the two the sets but not both (C △ D = {1, 4} △ {2, 3} = {1, 2, 3, 4}).

function sym1(args) {
    args = Array.prototype.slice.call(arguments);
  
    function symDiff(arr1, arr2) {
      var len1 = arr1.length;
      var len2 = arr2.length;
      var result = new Set();
      for (let i = 0; i < len1; i++) {
        let el = arr1[i];
        if (arr2.some(e => e === el)) {
          continue;
        } else {
          result.add(el);
        }
      }
  
      for (let i = 0; i < len2; i++) {
        let el = arr2[i];
        if (arr1.some(e => e === el)) {
          continue;
        } else {
          result.add(el);
        }
      }
  
  
  
      return result;
    }
  
    return args.reduce((a, b) => symDiff(a, b));
  }
  
  function sym(args) {
    args = Array.prototype.slice.call(arguments);
  
    function symDiff(arrayOne, arrayTwo) {
      var result = [];
  
      arrayOne.forEach(function (item) {
        if (arrayTwo.indexOf(item) < 0 && result.indexOf(item) < 0) {
          result.push(item);
        }
      });
  
      arrayTwo.forEach(function (item) {
        if (arrayOne.indexOf(item) < 0 && result.indexOf(item) < 0) {
          result.push(item);
        }
      });
  
      return result;
    }
  
    // Apply reduce method to args array, using the symDiff function
    return args.reduce(symDiff);
  }