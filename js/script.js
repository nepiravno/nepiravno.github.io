'use strict';

let getAverageAge = (users) => {
  // let sum = 0;
  // for (let i= 0; i < users.length; i++) {
  //   sum += users[i].age;
  // }

  // return sum / users.length;
  return users.reduce( (sum, item) => 
         sum + item.age, 0 ) / users.length;
};

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr = [ vasya, petya, masha ];

alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28