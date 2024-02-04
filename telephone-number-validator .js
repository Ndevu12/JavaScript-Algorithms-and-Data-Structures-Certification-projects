//Return true if the passed string looks like a valid US phone number.
//The area code is required. If the country code is provided, confirm that the country code is 1

function telephoneCheck(str) {
  //^(1\s?)? - checks if country code is provided. Checks for possible spacing
  
  //(\(\d{3}\)|\d{3})[\s\-]? - checks that area code is 3 numbers possibly enclosed in parenthesis and also matches space or hyphen after
  
  //\d{3}[\s\-]?\d{4}$ //checks 7 digit number possibly broken into 3 - 4 format. Ensures str ends in number
  
  const phoneNumRegex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/
  
  return phoneNumRegex.test(str);
}


console.log(telephoneCheck("555-555-5555"));