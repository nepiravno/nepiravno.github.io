'use strict';

function unique(arr) {
  let unique = [];

  for ( let item of arr ) {
    if ( unique.includes(item) ) continue;

    unique.push(item);
  } 

  return unique;
}

let strings = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", ":-O"
];

alert( unique(strings) ); // кришна, харе, :-O