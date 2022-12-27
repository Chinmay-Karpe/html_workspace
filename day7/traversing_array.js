let list1 = ["delhi", "chennai", "mumbai", "calcutta"];

console.log("\nTraversing............");
//Old generation approach
console.log("\n:::::::::: OLD approach :::::::::::::::::::");
for (let i = 0; i < list1.length; i++) {
  let item = list1[i];
  console.log(item);
}

console.log("\n:::::::::::: For of loop :::::::::::::::::");
for (let city of list1) {
  console.log(city);
}

//Lambda Expression
console.log("\n:::::::::: Lambda Expression ::::::::::::::");
list1.forEach((item) => console.log(item));

//map() - creates a new array from calling a function for every array element.
let numbers = [65, 44, 12, 4];
let newArr = numbers.map(myFunction);

function myFunction(num) {
  return num * 10;
}

console.log("\n====Map=====");
console.log(newArr);
