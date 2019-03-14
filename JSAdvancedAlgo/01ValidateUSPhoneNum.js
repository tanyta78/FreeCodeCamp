//Validate US Telephone Numbers
//Return true if the passed string is a valid US phone number.
function telephoneCheck(str) {
    // Good luck!
    var rgx = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
    return rgx.test(str);
  }