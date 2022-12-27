let ref1 = { id: 1, task: "assignment" };
let ref2 = { ...ref1 };
let ref3 = { ...ref1, ...ref2 };
console.log(ref1);
console.log(ref2);
console.log(ref3);
