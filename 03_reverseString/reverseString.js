const reverseString = function(text) {
  let reversedString = '';
  for(let i = text.length - 1 ; i >= 0; i-- ){
    reversedString += text[i];
  }
  return reversedString;


  // Also an interesting solution without using loop
  // return reversedStr = text.split('').reverse().join('');
  
};

// Do not edit below this line
module.exports = reverseString;
