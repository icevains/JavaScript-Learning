'use strict';

/** 
const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  this.calcAge = function () {
    console.log(2037 - this.birthYear);
  };
};

const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);
const jonas = new Person('Jonas', 1991);

console.log(jonas);
console.log(matilda);
console.log(jack);

// Prototypes
console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

jonas.calcAge();
matilda.calcAge();
*/

/** 
// Person.prototype 才是jonas和matilda的原型
console.log(jonas.__proto__);
console.log(jonas.__proto__ === Person.prototype);
console.log(Person.prototype);

Person.prototype.species = 'Homo Sapiens';
console.log(jonas.species, matilda.species);

console.log(jonas.hasOwnProperty('firstName'));

// Object prototype
console.log(jonas.__proto__.__proto__);

console.dir(Person.prototype.constructor);

Array.prototype.unique = function () {
  return [...new Set(this)];
};

const arr = [3, 6, 6, 5, 7, 7, 9, 4, 8, 9];
console.log(arr.length);
console.log(arr.unique());

const h1 = document.querySelector('h1');
*/

/* 
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀
*/

/** 
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function (speed) {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

Car.prototype.brake = function (speed) {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

const bmwCar = new Car('BMW', 120);
const mercedesCar = new Car('Mercedes', 95);

bmwCar.accelerate();
bmwCar.accelerate();
bmwCar.accelerate();
bmwCar.brake();
bmwCar.brake();
bmwCar.brake();
mercedesCar.accelerate();
mercedesCar.accelerate();
mercedesCar.accelerate();
mercedesCar.brake();
mercedesCar.brake();
mercedesCar.brake();
mercedesCar.brake();
*/

// class expression
// const PersonCl = class {};

// class declaration
class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.firstName}`);
  }
}

const jessica = new PersonCl('Jessica', 1996);
console.log(jessica);
jessica.calcAge();

console.log(jessica.__proto__ === PersonCl.prototype);

jessica.greet();
