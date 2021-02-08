'use strict';

let user = {
  name: 'John',
  age: 30
};

let count = obj => {
  let count = 0;

  for ( let key in obj ) {
    count += 1;
  }

  return count;
}

alert( count(user) ); // 2