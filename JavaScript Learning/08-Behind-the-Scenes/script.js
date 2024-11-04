'use strict';

/*
function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    const output = `${firstName} are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);
    }
    // console.log(str);

    function add(a, b) {
      return a + b;
    }

    console.log(millenial);
    console.log(add(2, 3));
  }

  printAge();

  return age;
}
const firstName = 'Jonas';
calcAge(1991);
*/

// console.log(me);
// console.log(job);
// console.log(year);

/*
var me = 'Jonas';
let job = 'teacher';
const year = 1991;

// Functions
console.log(addDecl(2, 3));
console.log(addExpr(2, 3));
console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}
const addExpr = function (a, b) {
  return a + b;
};

const addArrow = (a, b) => {
  a + b;
};
*/

/*


// console.log(this);

//jonas调用calcAge,calcAge调用isMillenial，
//所以isMillenial当中的this是指Age，Age没有year这个属性
const jonas = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    // console.log(this);
    console.log(2037 - this.year);

    // Solution 1 用self变量保存this-->jonas
    // const self = this;
    // const isMillenial = function () {
    //   console.log(self);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    // };

    // Solution2 使用箭头函数
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },

  greet: () => console.log(`Hey ${this.firstName}`),
};

// jonas.greet();
jonas.calcAge();

*/

/* 值传递
let age = 23;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const me = {
  name: 'jonas',
  age: '30',
};

let friend = me;
friend.age = 27;
console.log('Friend', friend);
console.log('Me', me);
*/

// 原型
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

// 引用类型
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

// const marriedJessica = jessica;
// marriedJessica.lastName = 'Davis';

// console.log('Before Married', jessica);
// console.log('After Married', marriedJessica);

// Copying objects
const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';

console.log('Before Married', jessica);
console.log('After Married', jessicaCopy);

jessicaCopy.family.push('Mary', 'Lily');
console.log(jessica2.family);
console.log(jessicaCopy.family);
