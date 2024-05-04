const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	return array.reduce((total, current) => total + current, 0)
};

const multiply = function(array) {
  return array.reduce((total, current) => total * current, 1)
};

const power = function(a, b) {
  // return Math.pow(a, b); Well it`s certainly better way 
  let guys = [a, b];
	return guys.reduce((total, current) => total ** current, )
};

const factorial = function(num) {
  let result = 1;
	for(let i = num; i > 1; i--){
    result *= i; 
  }
  return result
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
