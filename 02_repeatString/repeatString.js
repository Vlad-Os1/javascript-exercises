const repeatString = function(string, num) {
  let text = "";

  for (i = 0; i < num; i++){
    text += string
  }
  
  if(num < 0){
    text = "ERROR";
  }

  return text
};

// Do not edit below this line
module.exports = repeatString;
