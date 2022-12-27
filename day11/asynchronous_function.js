//Synchronous :: Blocking Function
function sumSync(n1, n2) {}

//Promise :: Asynchronous :: Non Blocking Function
//To save our memory
//To make a function asynchronous use keyword -> async
//Return type of async function -> Promise{}

async function sumAsync(n1, n2) {}
//async -> runs in the background

let output1 = sumSync(1, 1); //undefined
let output2 = sumAsync(1, 1); //Promise {undefined}
console.log(output1);
console.log(output2);

// A JavaScript Promise object can be:
// Pending
// Fulfilled
// Rejected

// The Promise object supports two properties: state and result.

// While a Promise object is "pending" (working), the result is undefined.

// When a Promise object is "fulfilled", the result is a value.

// When a Promise object is "rejected", the result is an error object.
