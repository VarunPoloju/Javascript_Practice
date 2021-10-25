// values and variables assignment

let country = "India";
let continent = "Asia";
let population = 9999999999;

console.log("country is",country);
console.log("Continent is",continent);
console.log("Population is",population);

// Data types notes


/*
1)Number --both for integer and floating numbers ex: let age = 23;
2)String -- ex: let people = "Good!"
3)Boolean -- true or false ex: let age = true;
4)Undefined -- not yet defined (empty value) ex: let children;
5)NULL - empty value
6)Symbol(ES2015) -- value is unique and cannot be changed
7)BigInt(ES2020) -- large numbers that number can't hold
*/

// DataTypes assignment

let isIsland = false;

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
// console.log(typeof language);


 //Let, const and var assignment
// language = 'Hindi'; 
const language = 'telugu'
console.log(language)


// basic operators
const now = 25;
const ageVarun = now-3;
const ageTharun = now-7;
console.log(ageTharun, ageVarun) 

// assignment operators
let x = 5+5;
x+= 10; //x=x+10
x-= 10;
x*= 5;
x/= 5;
console.log(x);

// coding challenge 1 & 2

const markWeight = 78;
const markHeight = 1.69;
const johnWeight = 92;
const johnHeight = 1.95;

const BMImark = markWeight / markHeight **2; 
const BMIjohn = johnWeight / johnHeight **2;
const markHigherBMI = BMImark > BMIjohn
if(BMImark > BMIjohn){
    console.log(`Marks BMI (${BMImark}) is Higher than Jhon's(${BMIjohn})`);
}
else{
    console.log(`Jhon's BMI (${BMImark}) is Higher than Mark's(${BMImark})`);

}


//strings and template literals

const firstName = "Varun";
const lastName = "Poloju";
const age = 22;
const output = `Hi My name is ${firstName} ${lastName} and i'm ${age} years old`;
console.log(output);
console.log(`string
with
multiple lines`);


// type conversion and coercion

// STRING TO NUMBER
const value = '23';
const futureAge = Number(value) + 2;
console.log(`converting string ${value} to number ${futureAge}`);

// NUMBER TO STRING
const price = 23;
const output1= String(price); 
console.log(`converting number to string here ${output1}` , typeof output1);

let n = '1' +1;
console.log(n, typeof n);

// Truthy and falsy values
/*5 falsy values
.NULL
.undefined
.0
.''
. NaN
*/

const money = 0;
if(money){
    console.log(`Im rich`);
}
else{
    console.log(`I need money`)
}

let height;
if(height){
    console.log(`Im rich`);
}
else{
    console.log(`I need money`)
}

//Equality operators  == vs ===
const price1 = '23';
if(price1 ==23) console.log(`it is loosly equality`);
if(price1 === 23) console.log(`It has strict equality`);

// logical operators
const hasDriversLicense = true;
const hasEligibilityTodrive = false ; 

const age2 = 12;
// const age2 = prompt("Enter ur age");
if(age2  >=18 && !hasEligibilityTodrive){
    // alert("Ur eligible to drive")
}
else{
    // alert("not eligible");
}

// coding challenge 3
const dscore = (961+108+89)/3;
const kscore = (888+91+110)/3;

const minscore = 100;

if(minscore && (dscore>kscore)){
    console.log("dscore wins",dscore);
}
else if(minscore && (dscore === kscore)){
    console.log("it's a tie brah!!");
}
else
{
    console.log("kscore wins")
}


// conditional operator

const cost = 21;
if(cost>100 ? console.log('I would like to ut it 😊') : console.log('i wont buy it'));
// coding challenge 4

const bill = 275;
const tip = bill <=300 && bill>= 50 ? bill*0.5 : bill*0.2;
console.log(`the bill is ${bill} and tip is ${tip} and totalValue is ${bill + tip}`)