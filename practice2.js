/*
(function squareNum(num) {
    let sum = num * num;
}(2));
console.log(sum);
*/
/*
(function() {
  let x = 10; // This variable x is scoped to the IIFE and can't be accessed outside
  console.log(x); // Output: 10
})();
console.log(x); // Error: x is not defined
*/
/*
numbers = [1, 2, 3, 4, 5, 6];
//function cube(element){
//    return Math.pow(element, 3);
//}

const cube = numbers.map(function cube(element){
    return Math.pow(element, 3);
});

const evenNums = numbers.filter(function(element){
    return element % 2 == 0;
})

console.log(evenNums);
*/

// difference between function expression and arrow function
// has a function keyword
let addOriginal = function (num1, num2) {
    return num1 + num2;
};
// no function keyword, but an arrow thing is added
let add = (num1, num2) => {
    return num1 + num2;
};
// arrow function that only returns things
let addNum = (num1, num2) => num1 + num2;



// example of iife
const systemStatus = {
    message: "online",
    time: (() => {
        // function goes in here, has local scope to this object
    })(),
};


function fib(n) {
    let arr = [0, 1]; // initialize an array
    if (n <= 2) return 1; // if n is less than/eq to 2, return 1
    for (let i = 2; i <= n; i++) { // loop through n using i as placeholder and starts with 2
        arr[i] = arr[i - 1] + arr[i - 2]; // the value of a specific i in array is equal to 
    }
    return arr[n];
}


const fibExpression = function(n) {
    let arr = [0, 1];
    if (n <= 2) return 1;
    for (let i = 2; i <= n; i++) {
        arr[i] = arr[i - 1] + arr[i - 2];
    }
    return arr[n];
} 


const fibArrow = (n) => {
    let arr = [0, 1];
    if (n <= 2) return 1;
    for (let i = 2; i <= n; i++) {
        arr[i] = arr[i - 1] + arr[i - 2];
    }
    return arr[n];
}


const tenthFib = (function(n) {
    let arr = [0, 1];
    if (n <= 2) return 1;
    for (let i = 2; i <= n; i++) {
        arr[i] = arr[i - 1] + arr[i - 2];
    }
    return arr[n];
})(10);



// Callback
// a function that you pass as a parameter to another function
// function A will do some work, then call that 'callback' function B
// 'When you're done, call this next'

const names = ['chiamaka', 'michelle', 'ofonagoro'];

function sum(callback, x, y){ // a function w 3 parameters
    let result = x + y; // result stores the sum of x + y
    callback(result); // call function B after function A has run
}

function display(result){ // create function B - this displays results
    //console.log(result); // print result
}

sum(display, 1, 2); // call function A with the 3 params


// Promises
// provide an interface for dealing with asynchronus code (code that waits for something to happen before it completes)


// "I promise to return a value"
// PENDING -> RESOLVED OR REJECTED
// new Promise((resolve, reject) => {aynschronous code})

// once the promise is complete (whatver needs to happen is done)
// then resolve is run (gives a message about the promise that ran)

let sayHello = new Promise(function (resolve, reject) {
    // reject can sit anywhere in your code
    reject("Unable to say hi.");

    setTimeout(function () {
        resolve("Hi, World");
    }, 5000);
});

// working w a promise
// when the promise is complete, then run the callback function
// the callback function can accept an argument (whatever is passed into resolve)
sayHello.then(function (msg) {
    console.log(msg);
}).catch(function (error) { // another callback function, argument is whatever was passed into reject method
    console.warn(error);
});

// there's also finally...ensures that the code is always executed
new Promise(function (resolve, reject) {
    //asynchronouse code...
    // .then (callback function)
}).finally(function () {
    console.log("I run no matter what");
});


// examples of Promises

function walkDog(){
    
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dogWalked = false;
            if(dogWalked){
                resolve("You walked the dog.");
            }
            else{
                reject("You didn't walk the dog.");
            }
        }, 1500);
    });
}

function cleanKitchen(){
   
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const kitchenCleaned = true;
            if (kitchenCleaned){
                resolve("You cleaned the kitchen.");
            }
            else{
                reject("You didn't clean the kitchen.");
            }
        }, 2500);
    });
}

function takeOutTrash(){
    
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const trashOut = true;
            if (trashOut){
                resolve("You took out the trash.");
            }
            else{
                reject("You didn't take out the trash.");
            }
        }, 500);
    })
}

// want to call the functions 1 after 1
// 'value' means resolve; the message inside resolve
/*
walkDog().then(value => {console.log(value); return cleanKitchen ()}).then(value => {console.log(value);return takeOutTrash()})
.then(value => {console.log(value); console.log("You finished all the chores.")}).catch(error => console.error(error));
*/


// Async/Await
// Async - makes a function return a promise
// Await - makes an async function wait for a promise
// lets reuse the functions from before

function walkTheDog(){
    
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dogWalked = false;
            if(dogWalked){
                resolve("You walked the dog.");
            }
            else{
                reject("You didn't walk the dog.");
            }
        }, 1500);
    });
}

function cleanTheKitchen(){
   
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const kitchenCleaned = true;
            if (kitchenCleaned){
                resolve("You cleaned the kitchen.");
            }
            else{
                reject("You didn't clean the kitchen.");
            }
        }, 2500);
    });
}

function takeOutTheTrash(){
    
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const trashOut = true;
            if (trashOut){
                resolve("You took out the trash.");
            }
            else{
                reject("You didn't take out the trash.");
            }
        }, 500);
    })
}

async function doChores(){
    // we AWAIT the result of the walkthedog function
    // print the result
    // if we didn't walk the dog, the next 2 functions will not run
    try{
        const walkDogResult = await walkTheDog();
        console.log(walkDogResult);

        const cleanKitchenResult = await cleanKitchen();
        console.log(cleanKitchenResult);

        const takeOutTheTrashResult = await takeOutTheTrash();
        console.log();

        console.log("You finished all the chores");
    }
    catch(error){
        console.error(error);
    }
}

doChores();

// NOTE: Each time when an async function is called, it returns a new Promise which will be resolved with the value returned by the async function, or rejected with an exception uncaught within the async function
