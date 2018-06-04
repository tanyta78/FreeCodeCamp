

//Arguments Optional
//Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.Calling this returned function with a single argument will then return the sum:var sumTwoAnd = addTogether(2);sumTwoAnd(3) returns 5.If either argument isn't a valid number, return undefined.


function addTogether() {
  var len = arguments.length;
  var args = Array.from(arguments);
  return args.some(function (e) {
    return typeof e !== 'number';
  }) ? undefined:
  len > 1 ? args.reduce(function (sum, n) {
    return sum += n;
  }) : function (n) { return typeof n === 'number' ? n + args[0] : undefined; };
}



