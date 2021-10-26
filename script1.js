// 'use strict';
// activate stricy mode in javascript ;should be written top

function fruitDrink(apples, oranges) {
    const juice = console.log(`fruits and apples initial are ${apples} & ${oranges} initially`);
    return juice;
}

fruitDrink(10, 20);

// functions practice

// function declaration
function calCost(price) {
    const basePrice = 500;
    return basePrice - price;
}
const finalPrice = calCost(10);
console.log(finalPrice);



// function expression
const a = function calcAge(userage) {
    return 2027 - userage;
}
const age2 = a(1999);
console.log(age2);


// Arrow functions
// this keyword cannot be used with arrow fnctions
const yearsUntilretirement = (firstName, birthyear) => {
    const age = 2037 - birthyear;
    const retirement = 70 - age;
    return `${firstName} will return in ${retirement} years`;
}

const b = yearsUntilretirement('ganesh', 1999)
console.log(b);


// functions calling other functions

function firstFunction(fruit) {
    return fruit * 4;
}

const secondfunction = (fruits, vegetables) => {
    const applePieces = firstFunction(fruits);
    const orangePieces = firstFunction(vegetables);
    const juice = `juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange`;
    return juice;
}

console.log(secondfunction(8, 10));

// Reviewing functions

const calcAge2 = function (birthYear) {
    return 2035 - birthYear;
}

const yearsUntilretirement1 = function (name, age3) {

    const finalAge = calcAge2(age3);
    const finalName = calcAge2(name);
    const retirement1 = 70 - finalAge;
    if (retirement1 > 0) {
        return retirement1;
    } else {
        return -1;
    }
}

console.log(yearsUntilretirement1('varun', 1999));

// coding challenge 1

const calcAverage = (avg1, avg2, avg3) => (avg1 + avg2 + avg3) / 3;
console.log(calcAverage(1, 10, 13));

const scoreDolphins = calcAverage(50, 30, 21);
const scoreShinangians = calcAverage(20, 30, 100);
const checkWinner = function (avgdolphins, avgshinangians) {
    if (avgdolphins >= 2 * avgshinangians) {
        console.log(`dolphins are the winners 🎉 with score ${avgdolphins}`);
    } else if (avgshinangians >= avgdolphins) {
        console.log(`shinangians are the winners 🎉 with score ${avgshinangians}`);
    } else {
        console.log(`It's a tie match`);
    }
}
const finalWinner = checkWinner(scoreDolphins, scoreShinangians);

// ========================ARRAYS========================

const years = [2012, 2013, 2014, 2015];
years.unshift(1, 2, 3); // adds element at beginning in array
years.push(10, 20, 'varun'); //add element at last  in array
years.shift(); //remove first element form array;
let poppedElement = years.pop(); //remove last element from array
console.log(years);
console.log(`popped element is ${poppedElement}`);
console.log(years[years.length - 1]) // to get last element of an array.

// to find position of an elemt in array returns position if there orelse -1
console.log(years.indexOf(2013));


// includes --> rtns tru if element is prsent  orelse false;

console.log(years.includes('varun'));
console.log(years.includes(2013));

// =================coding challenge 2

function calcTip(bill) {
    if (bill >= 50 && bill <= 300) {
        bill *= 0.15;
    } else {
        bill *= 0.2
    }
    return bill;
}
const bills = [125, 555, 100];
let tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(tips);


// objects

// . vs bracket notation

const sample = {
    firstname: 'tokyo',
    lastname: 'berlin',
    age: 27,
    friends: ['rio', 'Oslo', 'helsinki']
};
console.log(sample.firstname);
console.log(sample.friends[2]);


// let chooseUser = prompt('what do u want to know about varun?choose between Firstname , lastname ,age ,friends!');
// if(sample[chooseUser]){
//     console.log(sample[chooseUser])
// }
// else{
//     console.log('wrong request ! what do u want to know about varun?choose between Firstname , lastname ,age ,friends!')
// }



// object methods
const sample1 = {
    firstname: 'tokyo',
    lastname: 'berlin',
    birthYear: 1998,
    friends: ['rio', 'Oslo', 'helsinki'],
    calcAge3: function () {
        return 2027 - this.birthYear;
    }
};

console.log(sample1.calcAge3())


// =======coding challenge 3

const obj1 = {
    firstName: 'Mark',
    lastname: 'Miller',
    weight: 78,
    height: 180,
    calcBmi: function () {
        this.BMI = this.height / this.height ** 2;
        return this.BMI;
    }
}

const obj2 = {
    firstName: 'John',
    lastname: 'Smith',
    weight: 922,
    height: 180,
    calcBmi: function () {
        this.BMI = this.height / this.height ** 2;
        return this.BMI;
    }
}
obj1.calcBmi();
obj2.calcBmi();

if (obj1.BMI > obj2.BMI) {
    console.log(`MARK has hIGER BMI`)
} else {
    console.log(`Jhon has higher BMI`)
}

// ==================coding challenge -4

const bills2 = [22, 295, 30, 45, 78, 56, 98, 15, 2, 36];
const tips1 = [];
const totals = [];

function calcTip1(bill) {
    if (bill >= 50 && bill <= 300) {
        bill *= 0.15;
    } else {
        bill *= 0.2
    }
    return bill;
}
for (let i = 0; i < bills2.length; i++) {
    const tip = calcTip1(bills2[i]);
    tips.push(tip);
    totals.push(tip + bills2[i])
}
console.log(bills2, tips, totals)