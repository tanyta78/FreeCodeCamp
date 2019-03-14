//SearchAndReplace
//Perform a search and replace on the sentence using the arguments provided and return the new sentence.First argument is the sentence to perform the search and replace on.Second argument is the word that you will be replacing (before).Third argument is what you will be replacing the second argument with (after). Preserve the case of the original word when you are replacing it
function myReplace(str, before, after) {
    if (/[A-Z]/.test(before[0])) {
      after = after.charAt(0).toUpperCase() + after.slice(1);
    }
    return str.replace(before, after);
  }
  //
  function myReplace(str, before, after) {
    return str
           .split(" ")
           .map((x) => (x == before)? 
                (x[0] == x[0].toUpperCase()) ?
                (after[0].toUpperCase() + after.slice(1)) : after.toLowerCase() 
                : x)
           .join(" ");
  
  }
  //
  function myReplace(str, before, after) {
    if (before[0] === before[0].toUpperCase()) {
      after = after.replace(after[0], after[0].toUpperCase());
    }
    return str.replace(before, after);
  }

  myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");