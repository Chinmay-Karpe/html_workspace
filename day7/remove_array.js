console.log("\nRemoving...............");
let list2 = ["red", "green", "blue"];

list2.push("purple");
list2.push("royalblue");
list2.push("red"); //Duplicates allowed

console.log("\nDuplicates allowed");
console.log(list2);

// DELETE OPERATION::Pop removes the elemet from the end
list2.pop();
console.log("\n======== Pop operation ============ ");
console.log(list2);

list2.pop();
console.log(list2);

// Shift::DELETE FROM THE BEGINING
console.log("\n======== Shift Operation ============ ");
list2.shift();
list2.shift();

console.log(list2);

// Splice::DELETE FROM IN BETWEEN
let list3 = ["apple", "mango", "kiwi", "dragon-fruit", "banana"];

console.log("\n======== SpliceOperation ============ ");
list3.splice(1, 2); //Starting from positon 1 remove 2 elements
console.log(list3);
