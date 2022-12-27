// async makes a function return a Promise

// await makes a function wait for a Promise

async function getNumber() {
  return 100;
}

function main() {
  let num = getNumber();
  console.log(num); // Promise {100}
}

// To use await we must make a function async
async function main2() {
  let num = await getNumber();
  console.log("Using Await", num); // 100
}

//Using with synchronous
function main3() {
  getNumber().then((data) => {
    console.log("Using Then", data);
  });
}

//main();
main2();
//main3();
