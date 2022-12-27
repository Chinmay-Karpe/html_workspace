//JS :: Dynamic Array :: Equivalent to the ArrayList in Java
//let list = []; //Empty List
let list = ["delhi", "mumbai"];

console.log("\nAdding...............");
//Add Elements:: PUSH adds the elements in the end of the array
list.push("kochi");
list.push("banglore");
console.log("\n======= Push Operation =================");
console.log(list);

//Add Elements :: Begining of the Array
list.unshift("pune");
console.log("\n============== Unshift Operation =================");
console.log(list);

////ADD ELEMENT :: IN BETWEEN
list.splice(3, 0, "Goa"); //At position 3 add 1 element //0 indicates not to delete any array element.
console.log("\n=========== Splice Operation ==========================");
console.log(list);
