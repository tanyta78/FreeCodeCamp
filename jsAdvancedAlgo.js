//Validate US Telephone Numbers
//Return true if the passed string is a valid US phone number.
function telephoneCheck(str) {
  // Good luck!
  var rgx = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
  return rgx.test(str);
}

//Record Collection
//You are given a JSON object representing a part of your musical album collection. Each album has several properties and a unique id number as its key. Not all albums have complete information.Write a function which takes an album's id (like 2548), a property prop (like "artist" or "tracks"), and a value (like "Addicted to Love") to modify the data in this collection.If prop isn't "tracks" and value isn't empty (""), update or set the value for that record album's property.Your function must always return the entire collection object.There are several rules for handling incomplete data:If prop is "tracks" but the album doesn't have a "tracks" property, create an empty array before adding the new value to the album's corresponding property.If prop is "tracks" and value isn't empty (""), push the value onto the end of the album's existing tracks array.If value is empty (""), delete the given prop property from the album.HintsUse bracket notation when accessing object properties with variables.Push is an array method you can read about on Mozilla Developer Network.You may refer back to Manipulating Complex Objects Introducing JavaScript Object Notation (JSON) for a refresher.
// Setup
var collection = {
  "2548": {
    "album": "Slippery When Wet",
    "artist": "Bon Jovi",
    "tracks": [
      "Let It Rock",
      "You Give Love a Bad Name"
    ]
  },
  "2468": {
    "album": "1999",
    "artist": "Prince",
    "tracks": [
      "1999",
      "Little Red Corvette"
    ]
  },
  "1245": {
    "artist": "Robert Palmer",
    "tracks": []
  },
  "5439": {
    "album": "ABBA Gold"
  }
};
// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

// Only change code below this line
function updateRecords(id, prop, value) {
  if (prop != 'tracks' && value != "") {
    collection[id][prop] = value;
  }
  if (prop == 'tracks') {
    if (!collection[id].hasOwnProperty('tracks')) {
      collection[id][prop] = [];
    }
    if (value !== '') {
      collection[id][prop].push(value);
    }
  }
  if (value == '') {
    delete collection[id][prop];
  }

  return collection;
}

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

//Exact Change
//Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.cid is a 2D array listing available currency.Return the string "Insufficient Funds" if cash-in-drawer is less than the change due. Return the string "Closed" if cash-in-drawer is equal to the change due.Otherwise, return change in coin and bills, sorted in highest to lowest order.


function checkCashRegister(price, cash, cid) {
  var change = cash - price;
  var denom = [
    { name: 'ONE HUNDRED', val: 100.00 },
    { name: 'TWENTY', val: 20.00 },
    { name: 'TEN', val: 10.00 },
    { name: 'FIVE', val: 5.00 },
    { name: 'ONE', val: 1.00 },
    { name: 'QUARTER', val: 0.25 },
    { name: 'DIME', val: 0.10 },
    { name: 'NICKEL', val: 0.05 },
    { name: 'PENNY', val: 0.01 }
  ];

  var register = cid.reduce(function (acc, curr) {
    acc.total += curr[1];
    acc[curr[0]] = curr[1];
    return acc;
  }, { total: 0 });

  if (register.total===change) {
    return 'Closed';
  }

  if (register.total < change) {
    return 'Insufficient Funds';
  }

  var result = denom.reduce(function(acc, curr) {
    var value = 0;
    // While there is still money of this type in the drawer
    // And while the denomination is larger than the change reminaing
    while (register[curr.name] > 0 && change >= curr.val) {
      change -= curr.val;
      register[curr.name] -= curr.val;
      value += curr.val;

      // Round change to the nearest hundreth deals with precision errors
      change = Math.round(change * 100) / 100;
    }
    // Add this denomination to the output only if any was used.
    if (value > 0) {
        acc.push([ curr.name, value ]);
    }
    return acc; // Return the current Change Array
  }, []); // Initial value of empty array for reduce

  // If there are no elements in change_arr or we have leftover change, return
  // the string "Insufficient Funds"
  if (change_arr.length < 1 || change > 0) {
    return "Insufficient Funds";
  }
  return result;
}

//checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);

//Inventory Update
//Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery. Update the current existing inventory item quantities (in arr1). If an item cannot be found, add the new item and quantity into the inventory array. The returned inventory array should be in alphabetical order by item.