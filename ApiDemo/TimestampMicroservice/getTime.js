var obj = {
  "unix":null,
  "natural":null
};

const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June',
 'July', 'August', 'September', 'October', 'November', 'December'];

const VALID_DATE_REGEX = /^[a-zA-Z]{3,9}\s[0-9]{1,2}\s[0-9]{1,4}/;

const getMonth = (value)=>{
  return MONTHS.find((month) => { 
    return month.toLowerCase().includes(value.slice(0,3).toLowerCase());
  });
};

const parseUnix = (timestamp)=>{
  const parseDate = new Date(Number(timestamp));
  if(isFinite(parseDate)){
     let day = parseDate.getUTCDate();
     let month = MONTHS[parseDate.getUTCMonth()];
     let year = parseDate.getUTCFullYear();
     return {unix: Number(timestamp), natural: `${month} ${day}, ${year}`};
  }
  
  throw new Error('Invalid Date');
}

module.exports = (dateString)=>{
  if(dateString.match(VALID_DATE_REGEX)){
    let [month, day, year] = dateString.split(' ');
    month = getMonth(month);
    if (month) {
      const natural = `${month} ${day}, ${year}`;
      const unix = Date.parse(natural);
      if(!isNaN(unix)){
        return parseUnix(unix);
      }
    }
  }else{
    return parseUnix(dateString);
  }
};