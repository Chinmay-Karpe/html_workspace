// CALL BY VALUE :: CALL BY REFERENCE
let user1 = { id: 1, name: "messi" };

let user2 = user1; // is it creating anything new ?
user1.country = "ARG";
user2.champ = "2022";

console.log(user1);
console.log(user2);

////////////////////////////////////////////////////////
function updateUser(p1) {
  p1.country = "ARG";
}

function main() {
  let user = { id: 1, name: "messi" };

  // CALL BY REF.
  updateUser(user);

  console.log(user);
}

main();
