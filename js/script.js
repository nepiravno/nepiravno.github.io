'use strict';

let num;

function readNumber() {
    do {
        num = prompt('Enter your number', '');
    } while ( !isFinite(num) )

    if ( num === '' || num === null) {
        return null;
    }

    return +num;
}

console.log( readNumber() );