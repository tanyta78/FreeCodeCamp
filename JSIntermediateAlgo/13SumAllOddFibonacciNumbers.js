//sumAllOddFibonacciNumbers
//Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than 10 are 1, 1, 3, and 5.
function sumFibs1(num) {
    var sum = 0;
    var prev = 0;
    var current = 1;
    while (current <= num) {
      if (current % 2 == 1) sum += current;
      current += prev;
      prev = current - prev;
    }
    return sum;
  }
  
  function sumFibs(num) {
    // create an array of fib numbers till num
    var arrFib = [1];
    for (var i = 1; i <= num;) {
      arrFib.push(i);
      i = arrFib[arrFib.length - 1] + arrFib[arrFib.length - 2];
    }
  
    // return the sum of odd numbers from the array
    var res = arrFib.reduce(function (prev, curr) {
      if (curr % 2 !== 0) return prev + curr;
      else return prev;
    });
  
    return res;
  }