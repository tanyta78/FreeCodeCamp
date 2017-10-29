// Sum All Numbers in a Range
function sumAll(arr) {
    for(var i= Math.min(arr[0],arr[1])+1;i<Math.max(arr[0],arr[1]);i++){
      arr.push(i);
    }
    return arr.reduce(function(accumulator, currentValue) {
      return accumulator + currentValue;
  });
  }

  //Diff Two Arrays
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
      )
}

  //Roman Numeral Converter
  var convertToRoman = function(num) {
    
      var decimalValue = [ 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 ];
      var romanNumeral = [ 'M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I' ];
    
      var romanized = '';
    
      for (var index = 0; index < decimalValue.length; index++) {
        while (decimalValue[index] <= num) {
          romanized += romanNumeral[index];
          num -= decimalValue[index];
        }
      }
    
      return romanized;
    }