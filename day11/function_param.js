//Function parameter with Default Value
function sum(n1 = 0, n2 = 0) {
  let result = n1 + n2;
  return result;
}

let output1 = sum();
let output2 = sum(1);
let output3 = sum(1, 2);
let output4 = sum(10, 20, 30);
console.log(output1, output2, output3, output4);
