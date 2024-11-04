"use strict";

// let hasDriversLicense = false;
// const passTest = true;
// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log("I can drive :D");

// function logger() {
//   console.log("My friend name is Jonas");
// }

// logger();

// function fruitProcessor(apples, oranges) {
//   const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//   return juice;
// }

// const appleJuice = fruitProcessor(3, 2);
// console.log(appleJuice);
// console.log(fruitProcessor(5, 0));

// console.log(Number("23"));

/*

//声明函数
function calcAge1(birthYear) {
  return 2037 - birthYear;
}

const age1 = calcAge1(1991);

//匿名函数
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};

const age2 = calcAge2(2003);
console.log(age1, age2);
*/

/*
//Arrow function --箭头函数
const calcAge3 = (birthYear) => 2037 - birthYear;

const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  // return retirement;
  return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(1991,'Jonas'));
console.log(yearsUntilRetirement(2003,'Cole'));
*/

// function cutFruitPieces(fruit) {
//   return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(oranges);

//   const juice = `Juice with ${applePieces} applePieces and ${orangePieces} orangePieces.`;
//   return juice;
// }
// console.log(fruitProcessor(2, 3));

// const calcAge = function (year) {
//   return 2037 - year;
// };

// const yearsUntilRetirement = function (birthYear, firstName) {
//   const age = calcAge(birthYear);
//   const retirement = 65 - age;
//   // return retirement;
//   return `${firstName} retires in ${retirement} years`;
// };

// console.log(yearsUntilRetirement(1991,'Jonas'))

// const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
// const DolScoreAvg = calcAverage(44, 23, 71);
// const KoaScoreAvg = calcAverage(65, 54, 49);
// console.log(DolScoreAvg, KoaScoreAvg);

// const checkWinner = function (avgDolhins, avgKoalas) {
//   if (avgDolhins >= avgKoalas * 2) {
//     console.log(`Dolphins win ${avgDolhins} vs. ${avgKoalas}`);
//   } else if (avgKoalas >= avgDolhins * 2) {
//     console.log(`Koalas win ${avgKoalas} vs. ${avgDolhins}`);
//   }else{
//     console.log('No team wins ....')
//   }
// };

// checkWinner(DolScoreAvg, KoaScoreAvg);

// const years = new Array(1991, 1984, 2008, 2024);
// console.log(friends[0]);
// console.log(friends[2]);
// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[2] = "Jay";

// console.log(friends);

// friends = ['Bob','Alice'];

/*
const firstName = "Jonas";
const jonas = [firstName, "Schmedtmann", 2037 - 1991, "teacher", friends];

console.log(jonas);

//Exercise
const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const years = [1990, 1967, 2002, 2010, 2018];

const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]),
];

console.log(ages);
*/

// const friends = ["Michael", "Steven", "Peter"];
// // Add Elements
// friends.push("Jay");
// console.log(friends);

// friends.unshift("John");
// console.log(friends);

// //Remove Elements
// friends.pop();
// friends.pop();
// console.log(friends);
// friends.push("Bob");
// friends.push(23)
// // includes/indexOf
// console.log(friends.includes("Bob"));
// console.log(friends.includes(23))

// const calcTip = function (bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// };
// const bills = [125, 555, 44];

// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

// const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

// console.log(bills,tips,total);

/*
// 对象的属性是非结构化的,无序的
const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  age: 2037 - 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
};

// console.log(jonas.job);

// const interestedIn = prompt(
//   "What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends"
// );

// if (jonas[interestedIn]) {
//   console.log(jonas[interestedIn]);
// } else {
//   console.log("Wrong  request!");
// }

console.log(
  `${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`
);
*/

/*
const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  birthYear: 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
  hasDriversLicense: true,

  // calcAge: function (birthYear) {
  //   return 2037 - birthYear;
  // },

  // calcAge: function () {
  //   return 2037 - this.birthYear;
  // },

  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${
      this.job
    }, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license`;
  },
};

// console.log(jonas.calcAge());
// console.log(jonas.age);
// console.log(jonas.age);
// console.log(jonas.age);

console.log(jonas.getSummary());

*/

/*
const marks = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

marks.calcBMI();
john.calcBMI();
console.log(marks.bmi, john.bmi);

if (marks.bmi > john.bmi) {
  console.log(
    `${marks.fullName}'s BMI (${marks.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})`
  );
} else if (john.bmi > marks.bmi) {
  console.log(
    `${john.fullName}'s BMI (${john.bmi}) is higher than ${marks.fullName}'s BMI (${marks.bmi})`
  );
}
*/

// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repetition ${rep}!`);
// }

const types = [];

// for (let i = 0; i < jonasArray.length; i++) {
//   // console.log(jonasArray[i], typeof jonasArray[i]);

//   // types[i] = typeof jonasArray[i];
//   types.push(typeof jonasArray[i]);
// }

// console.log(types);

// const years = [1991, 2007, 1969, 2020];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//   ages.push(2037 - years[i]);
// }
// console.log(ages);

// for (let i = 0; i < jonasArray.length; i++) {
//   // console.log(jonasArray[i], typeof jonasArray[i]);
//   if (typeof jonasArray[i] !== "string") continue;
//   // types[i] = typeof jonasArray[i];
//   console.log(jonasArray[i], typeof jonasArray[i]);
// }

// const jonas = [
//   "Jonas",
//   "Schmedtmann",
//   1991,
//   "teacher",
//   ["Michael", "Peter", "Steven"],
// ];

// for (let i = jonas.length - 1; i >= 0; i--) {
//   console.log(i, jonas[i]);
// }

// console.log("Only log jonas's friends");
// for (let i = 0; i < jonas.length; i++) {
//   if (typeof jonas[i] !== "object") continue;
//   for (let j = 0; j < jonas[i].length; j++) {
//     console.log(jonas[i][j]);
//   }
// }

// for (let exercise = 1; exercise < 4; exercise++) {
//   console.log(`------ Starting exercise ${exercise}`);
//   for (let rep = 1; rep < 6; rep++) {
//     console.log(`Exercise ${exercise}:Lifting weight repetition ${rep}!`);
//   }
// }

// let dice = Math.trunc(Math.random() * 6) + 1;
// let count = 0;

// while (dice !== 6) {
//   console.log(`You rolled a ${dice}`);
//   dice = Math.trunc(Math.random() * 6) + 1;
//   if(dice === 6) console.log('Loop is about to end ..........')
//   count++;
// }
// console.log(`You rolled the dice count is ${count + 1}`);

// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

// const tips = [];
// const totals = [];

// const calcTip = function (bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// };

// for (let i = 0; i < bills.length; i++) {
//   const tip = calcTip(bills[i]);
//   tips.push(tip);
//   totals.push(tip + bills[i]);
// }
// console.log(bills, tips, totals);

// const calcAverage = function (arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum / arr.length;
// };

// console.log(calcAverage(totals));
// console.log(calcAverage(tips));
