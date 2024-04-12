const convertToCelsius = function(degree) {
  let convertedValue = (degree - 32) / 1.8;
  if (!Number.isInteger(convertedValue)){
    return convertedValue = parseFloat(convertedValue.toFixed(1));
  }
  return convertedValue; 
};

const convertToFahrenheit = function(degree) {
  let convertedValue = (degree * 1.8) + 32;
  if(!Number.isInteger(convertedValue)){
    return convertedValue = parseFloat(convertedValue.toFixed(1));
  }
  return convertedValue;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
