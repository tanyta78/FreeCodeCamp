/*Caesars Cipher Complete A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔  'O' and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.*/

function rot13(str) { // LBH QVQ VG!
    return str.replace(/[A-Z]/g, L => String.fromCharCode((L.charCodeAt(0) % 26) + 65));
  }
   