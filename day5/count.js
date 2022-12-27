function likeme() {
  let spanref = document.querySelector("span");

  //Get the value
  let currentValue = spanref.innerHTML;
  let currentCount = parseInt(currentValue);
  currentCount++;

  //Set the value :: Update the value
  spanref.innerHTML = currentCount;
}
