//No Input Data Type
//No Output Data Type
//No Data Type while Exception as well

function sum(n1, n2) {
  try {
    let result = n1 + n2;
    return result;
  } catch (e) {
    console.error(e);
  }
}

let output1 = sum();
let output2 = sum(1);
let output3 = sum(1, 2);
let output4 = sum(10, 20, 30);
console.log(output1, output2, output3, output4);
