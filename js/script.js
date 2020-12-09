'use strict';

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

let aclean = arr => {
  // let set = new Set();
  // let currentSize = 0;
  // let resultArr = [];

  // for ( let item of arr ) {
  //   currentSize = set.size;
  //   set.add( item.split('').sort().join('').toLowerCase() );

  //   if ( set.size > currentSize ) {
  //     resultArr.push(item);
  //   }
  // }

  // return resultArr;
  let map = new Map();

  for ( let item of arr ) {
    let sorted = item.toLowerCase().split('').sort().join('');
    map.set(sorted, item);
  }

  return Array.from(map.values());
};



alert( aclean(arr) ); 
// "nap,teachers,ear" or "PAN,cheaters,era"