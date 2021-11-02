'use strict';


// destructuring array
const arr1 = [1, 2, 3, 4];

const [a, b, c, d] = arr1;
console.log(a, b, c, d);


const restaurant = {
    name: 'Bawarchi',
    location: 'kamareddy',
    categories: ['veg', 'non-veg', 'both'],
    starterMenu: ['chicken manchuria', 'kebab', 'chicken 65'],
    mainMenu: ['chicken biryani', 'mutton biryani'],
    openinghours: {
        mon: {
            open: 12,
            close: 22
        },
        Tue: {
            open: 13,
            close: 23
        },
        Wed: {
            open: 0, //24 hrs
            close: 15
        }
    },
    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
    },
    orderChickernBiryani: function (ing1, ing2, ing3) {
        console.log(`Here is your delicious chicken Biryani with ${ing1}, ${ing2}, ${ing3} `);
    }
}
// const ingredients = [prompt("Let's make Chicken Biryani! ingredient 1?"), prompt("ingredient 2?"), prompt("ingredient 3?")]
// const food = restaurant.orderChickernBiryani(...ingredients);



const [first, , second] = restaurant.categories;
console.log(first, second);

//nested destructuring
const nested = [1, 2, [3, 4]];
const [i, , [j, k]] = nested;
console.log(i, j, k);

// default destructuring

const arr2 = [1, 2];
const [p = 1, q = 1, r = 1] = arr2;
console.log(p, q, r);

// destructuring objects


const { name, openinghours, categories } = restaurant;
console.log(name, openinghours, categories);


// spread operator --used to build new arrays or pass multiple values in to a function.(to pack and array
const arr3 = [1, 2, 3, 4, 5, 6]
const newArrray1 = [...arr3]
console.log(newArrray1);


// join two arrrays

const arr4 = [12, 13, 14];
const arr5 = [15, 16, 17];
const combinedArrays = [...arr4, ...arr5]
console.log(combinedArrays);

// we can copy objects two

const newobj1 = { ...arr4, ...restaurant }
console.log(newobj1);


// Rest pattern and parameters

// rest pattern - used to colllect muliple elements and condense them into array(unpack an array)
// opposite of spread.

// DIFF B/W SPREAD AND REST
 
// SPREAD =========> BECAUSE ON THE RIGHT SIDE OF  = OPERATOR
const elements = [1, 2, 3];
const newelemet = [...elements];
console.log(newelemet);

// REST ==========? BECAUSE ON THE LEFT SIDE OF =  OPERATOR

const [a1, b1, ...others] = [1,2,3,4,5,5,6,7];
console.log(a1,b1,...others);