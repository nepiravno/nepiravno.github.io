'use strict';

let styles = ['Jazz', 'Blues'];
console.log( styles );

styles.push('Rock\'n\'Roll');
console.log( styles );

if ( !(styles.length % 2) ) {
  styles[styles.length / 2] = 'Classic';
  console.log( styles );
} else {
  styles[Math.floor(styles.length / 2)] = 'Classic';
  console.log( styles );
}

console.log( styles.shift() );

styles.unshift('Rap', 'Reggae');
console.log( styles );