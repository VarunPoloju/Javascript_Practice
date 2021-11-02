"use strict";

const temperatures = [10, 20, 30, 40, 50, 60, 70, 'error', 80, 90, -1];

const findAmplitude = function (temps) {
    let max = temps[0];
    let min = temps[0];
    for (let i = 0; i < temps.length; i++) {
        const curtemp = temps[i];
        if (typeof curtemp !== 'number') continue;
        if (curtemp > max) max = curtemp;
        if (curtemp < min) min = curtemp;
    }
    console.log(max, min);
    return max - min;
}

const amplitude = findAmplitude(temperatures);
console.log(amplitude);
// ==========================================================

// coding challenge
let data1 = [17, 21, 23]

const printForecast = function (arr) {
    let str = '';
    for (let i = 0; i < arr.length; i++) {
        str = str + `${arr[i]}🥵c in ${i + 1} days...`
    }
    console.log(str);
}

printForecast(data1);

// primitive types
let firstname = 'pawan';
let lastname = 'kalyan';

lastname = 'choudary';
console.log('firstname', firstname);
console.log('lastname', lastname);

// reference types

const pawan = {
    firstname: 'pawan',
    lastname: 'kalyan',
    age: 27
}

const marriedPawan = pawan;
marriedPawan.lastname = 'choudary';
console.log('pawan object',pawan);
console.log('marriedPawan onject',marriedPawan);

// copying objects using assign
// it creates only a shallow copy no so effective way for copying objects


const pawan2 = {
    firstname: 'pawan',
    lastname: 'kalyan',
    age: 27
}

const pawanCopy = Object.assign({},pawan2);
pawanCopy.age = 30;
console.log('pawan object',pawan2);
console.log('pawanCopy onject',pawanCopy);


