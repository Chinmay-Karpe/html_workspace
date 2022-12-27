//Checking Undefined and assign default value
function sum(n1, n2) {
  //n1 = n1 || 0;   //3rd way
  //if(!n1) //2nd way
  if (n1 == undefined) {
    //1st way
    n1 = 0;
  }

  //n2 = n2 || 0; //3rd way
  //if(!n2) //2nd way
  if (n2 == undefined) {
    //1st way
    n2 = 0;
  }

  let result = n1 + n2;
  return result;
}

function sum(n1, n2) {}

let output1 = sum();
let output2 = sum(1);
let output3 = sum(1, 2);
let output4 = sum(10, 20, 30);
console.log(output1, output2, output3, output4);
