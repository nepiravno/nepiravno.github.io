'use strict';

function truncate(str, maxlength) {
    if ( str.length > maxlength ) {
        return str = str.slice(0, maxlength - 1) + '...';
    }

    return str;
}

console.log( truncate('Всем привет!', 20) );