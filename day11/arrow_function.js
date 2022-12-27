let sum = (n1 = 0, n2 = 0) => n1 + n2; //No curly braces{} required.

let output1 = sum();
let output2 = sum(1);
let output3 = sum(1, 2);
let output4 = sum(10, 20, 30);
console.log(output1, output2, output3, output4);
