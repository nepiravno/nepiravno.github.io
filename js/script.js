'use strict';

function ucFirst(str) {
    if (!str) return str;
    
    return str = str[0].toUpperCase() + str.slice(1);
}

console.log( ucFirst('vasil') );