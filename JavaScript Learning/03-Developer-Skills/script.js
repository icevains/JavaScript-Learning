'use strict';

/*
const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// amplitude is between highest and lowest

// 2.分解问题，将大问题分解为小问题
// --忽略数组中错位的值
// --找到最大值和最小值，返回两者的差

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];

    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

const result = calcTempAmplitude(temperatures);
console.log(result);
*/
/*
const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',
    // value: Number(prompt('Degrees celsius:')),
  };
  const kelvin = measurement.value + 273;
  return kelvin;
};

console.log(measureKelvin());
*/

//Test DATA1:[17,21,23]
//Test DATA2:[12,5,-5,0,4]

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
  let str = '... ';
  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]}°C in ${i + 1} days ... `;
  }
  return str;
};

console.log(printForecast(data2));
