//PigLatin
//Translate the provided string to pig latin.Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".If a word begins with a vowel you just add "way" to the end.
function translatePigLatin(str) {
    var vowelsRgx = /[aeiouy]/gi;
  
    if (str[0].match(vowelsRgx)) {
      str = str + 'way';
    } else {
      var vowelIndex = str.indexOf(str.match(vowelsRgx)[0]);
      str = str.substr(vowelIndex) + str.substr(0, vowelIndex) + 'ay';
    }
    return str;
  }
  
  //PigLatin2
  function translatePigLatin2(str) {
    return str
      .replace(/^([aeiouy])(.*)/, '$1$2way')
      .replace(/^([^aeiouy]+)(.*)/, '$2$1ay');
  }