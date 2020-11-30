'use strict';

let camelize = (str) => {
  let arr = str.split('');

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '-') {
      arr.splice(i, 2, arr[i+1].toUpperCase());
    }
  }

  return str = arr.join('');
}

console.log( camelize("background-color") ); 
console.log( camelize("list-style-image") );
console.log( camelize("-webkit-transition") );