//A call-back is a function passed as an argument to another function.

function myCalculator(num1, num2, myCallback) {
  let sum = num1 + num2;
  myCallback(sum);
}

function display(sum) {
  console.log(sum);
}
function main() {
  myCalculator(5, 5, display); // display function is passed to myCalculator() as an argument.
  //When we pass a function as an argument, remember not to use parenthesis().
}

main();

// setTimeout(function () {
//   dispayfunc("Passing the whole function as an argument");
// }, 2000);

// function dispayfunc(message) {
//   console.log(`${message}`);
// }

// dispayfunc(); //Calling the call-back function
