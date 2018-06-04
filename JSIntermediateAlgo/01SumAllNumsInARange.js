// Sum All Numbers in a Range
function sumAll(arr) {
    for (var i = Math.min(arr[0], arr[1]) + 1; i < Math.max(arr[0], arr[1]); i++) {
      arr.push(i);
    }
    return arr.reduce(function (accumulator, currentValue) {
      return accumulator + currentValue;
    });
  }
  //
  function sumAll2(arr) {
    return (Math.abs(arr[0]-arr[1]) + 1) * (arr[0] + arr[1]) / 2;
  
  }