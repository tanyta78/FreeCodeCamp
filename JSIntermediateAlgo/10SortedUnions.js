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