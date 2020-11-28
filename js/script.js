'use strict';

let arrNumSum = [];

let sumInput = () => {
  let userNumber;

  while (true) {
    userNumber = prompt('Enter your number', '');

    if (userNumber === '' ||
        userNumber === null ||
        !isFinite(userNumber)) break;

    arrNumSum.push(+userNumber);
  }
  
  let sum = 0;

  for (let item of arrNumSum) {
    sum += item;
  }

  return sum;
};

console.log( sumInput() );