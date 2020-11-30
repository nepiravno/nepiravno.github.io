'use strict';

let arr = ["HTML", "JavaScript", "CSS"];

let copySorted = (arr) => {
  let copyArr = arr.slice();

  return copyArr.sort( (a, b) => {
    if (a > b) return 1;льше второго
    if (a == b) return 0;
    if (a < b) return -1;
  } );
};

let sorted = copySorted(arr);

alert( sorted ); // CSS, HTML, JavaScript
alert( arr ); // HTML, JavaScript, CSS