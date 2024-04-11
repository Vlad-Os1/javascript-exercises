const removeFromArray = function(myArray, ...extract) {
  let myNewArray = [];
  for(i = 0; i < myArray.length; i++){
    if(extract.includes(myArray[i])) continue;
    myNewArray.push(myArray[i]);
  }
  return myNewArray;
};

// Do not edit below this line
module.exports = removeFromArray;
