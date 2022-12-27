//DE-STRUCTING OF ARRAY
let list = ["DELHI", "CALCULATTA", "CHENNAI", "MUMBAI", "PUNE"];

let first = list[0];
let second = list[1];
let third = list[2];

console.log(first);
console.log(second);
console.log(third);
console.log("\n");

let [a, b] = list;
console.log(a);
console.log(b);
console.log("\n");

let [p1, , p3] = list;
console.log(p1);
console.log(p3);
