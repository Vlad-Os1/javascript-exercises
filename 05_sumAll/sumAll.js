const sumAll = function(num1, num2) {
  if(typeof num1 !== 'number' || typeof num2 !== 'number'){
    return 'ERROR';
  }
  if(num1 < 0 || num2 < 0){
    return 'ERROR';
  }
  if(num1 > num2){
    let sum = num1 + num2;
    let final = 0;
    for(i = 0; i < sum; i++){
      final += i;
    }
    return final;
  }

  if(num2 > num1){
    let sum = num2 + num1;
    let final = 0;
    for(i = 0; i < sum; i++){
      final += i;
    }
    return final;
  }
};

// Do not edit below this line
module.exports = sumAll;
