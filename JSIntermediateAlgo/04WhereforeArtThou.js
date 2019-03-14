

//Wherefore art thou
//Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching property and value pairs (second argument). Each property and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.
function whatIsInAName(collection, source) {
    // What's in a name?
    var arr = [];
    // Only change code below this line
    let propertiesForSearch = Object.keys(source);
    // filter the collection
    arr = collection.filter(function (obj) {
      for (var i = 0; i < propertiesForSearch.length; i++) {
        if (!obj.hasOwnProperty(propertiesForSearch[i]) || obj[propertiesForSearch[i]] !== source[propertiesForSearch[i]]) {
          return false;
        }
      }
      return true;
    });
    //var2 to filter
    /*
    return collection.filter(function (obj) {
        return srcKeys
          .map(function(key) {
            return obj.hasOwnProperty(key) && obj[key] === source[key];
          })
          .reduce(function(a, b) {
            return a && b;
          });
      });
    */
  
    // Only change code above this line
    return arr;
  }

  whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });