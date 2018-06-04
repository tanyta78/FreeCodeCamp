//Steamroller
//Flatten a nested array. You must account for varying levels of nesting. steamrollArray([1, [2], [3, [[4]]]]);

function steamrollArray(arr) {
    // I'm a steamroller, baby
    var result = [];
  
    var flattenFunc = function (el) {
      if (!Array.isArray(el)) {
        result.push(el);
      } else {
        for (var index in el) {
          flattenFunc(el[index]);
        }
      }
    };
  
    arr.forEach(flattenFunc);
    return result;
  }
  
  function steamrollArray2(arr) {
    return arr.toString()
      .replace(',,', ',')       // "1,2,,3" => "1,2,3"
      .split(',')               // ['1','2','3']
      .map(function (v) {
        if (v == '[object Object]') { // bring back empty objects
          return {};
        } else if (isNaN(v)) {        // if not a number (string)
          return v;
        } else {
          return parseInt(v);         // if a number in a string, convert it
        }
      });
  }
  
  function steamrollArray3(arr) {
    let flat = [].concat(...arr);
    return flat.some(Array.isArray) ? steamrollArray(flat) : flat;
  }