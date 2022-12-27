function useState() {
  return ["delhi", "calcutta"];
}

let list = useState();
console.log(list);

let [] = useState();

let [a, b] = useState();
console.log(a, b);

// REACT :: DE-STRUCTING OF ARRAY
let [data, setData] = useState();
console.log(data);
console.log(setData);
