//Function Concept :: No Input type Nor Output Type.
function sum(n1, n2) {
  let result = n1 + n2;
  return result;
}

//Function Overloading (By default func supports overloading)
let output1 = sum(); //Nan-> Not a Null , n1=undefined + n2=undefined
let output2 = sum(1); //n1=1 + n2=undefined = Nan
let output3 = sum(1, 2); //3
let output4 = sum(10, 20, 30); //n1=10 + n2=20 = 30 , //30 will be discarded since no parameter available
console.log(output1, output2, output3, output4);
