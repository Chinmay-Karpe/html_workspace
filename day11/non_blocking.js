function helloSync() {
  console.log("1");
  console.log("2");
  console.log("3");
}

function helloAsync() {
  console.log("1");

  //Non Blocking :: ASYNC
  setTimeout(() => console.log("2"), 3000);
  //This is a non blocking statement it will execute after timeout 3000ms/3seconds.

  console.log("3");
  console.log("4");
}

//helloSync();
helloAsync();
