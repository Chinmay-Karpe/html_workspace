let inputList = ["delhi", "calcutta", "kochin"];

//let outputList = ["Hello delhi","Hello calcutta","Hello Kochin"];

//Conventional way of thinking
let outputList = [];
for (let i = 0; i < inputList.length; i++) {
  let item = inputList[i];
  let transformItem = `Hello ${item}`;
  outputList.push(transformItem);
}
console.log(outputList);

//Functional Way of using Lambda/Arrow
let outputList1 = inputList.map((item) => `Hello ${item}`);
console.log(outputList1);
