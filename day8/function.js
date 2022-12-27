let i = 0;
let price = 99.99;
let username = "rahul";
let list = [];

//Assigning the annoymous function :: to a variable
let hello1 = function () {
  console.log("hello world");
};

//1.Named Function
function sum() {}
//2.Annonymous
let sum1 = function () {};
//3.Arrow
let sum2 = () => {};

//////////////////////////////////////////////////////////////

function hello(p1) {
  console.log(`${p1}`);
}

let a = 1;
hello(1);
hello(i);

let prices = 99.99;
hello(99.99);

let user = "jay";
hello("jay");
hello(user);

let fn1 = () => {};
hello(fn1);
hello(() => {}); //Callback Function, P1 is callback function
