//DNA Pairing
//The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.Base pairs are a pair of AT and CG. Match the missing element to the provided character.Return the provided character as the first element in each array.For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.
function pairElement(str) {
    let result = [];
    let strAsArr = str.split('');
    for (let i = 0; i < strAsArr.length; i++) {
      let element = strAsArr[i];
      switch (element) {
        case 'C':
          result.push(['C', 'G']);
          break;
        case 'G':
          result.push(['G', 'C']);
          break;
        case 'A':
          result.push(['A', 'T']);
          break;
        case 'T':
          result.push(['T', 'A']);
          break;
      }
  
    }
    return result;
  }
  //
  function pairElement2(str) {
    //define a map object with all pair possibilities 
    let map = { T: 'A', A: 'T', G: 'C', C: 'G' };
    //split str into a char Array
    let strArr = str.split('');
    //replace each Array item with a 2d Array using map
    for (let i = 0; i < strArr.length; i++) {
      strArr[i] = [strArr[i], map[strArr[i]]];
    }
    return strArr;
  }
  