const palindromes = function (text) {
  const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';

  let array = text.toLowerCase().split("").filter((item) => alphanumerical.includes(item)).join("");
  let reversedText = array.split("").reverse().join('');

  return array == reversedText;
};

// Do not edit below this line
module.exports = palindromes;
