const reverseString = function(text) {
  let reversedString = '';
  for(let i = text.length - 1 ; i >= 0; i-- ){
    reversedString += text[i];
  }
  return reversedString;


  // Also an interesting solution without using loop
  // const reversedStr = text.split('').reverse().join('');
  // return reversedStr
};

// Do not edit below this line
module.exports = reverseString;
