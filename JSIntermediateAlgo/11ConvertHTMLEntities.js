//Convert HTML Entities
//Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

function convertHTML1(str) {
    // &colon;&rpar;
    var convertor = { '&': '&amp', '<': '&lt', '>': '&gt', '"': '&quot', "'": '&apos' };
    return str.replace(/[&<>"']/g, function (match) {
      return convertor[match];
    });
  }
  
  function convertHTML(str) {
    // &colon;&rpar;
    return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
  
  }