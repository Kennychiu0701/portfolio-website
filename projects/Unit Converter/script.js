function convert() {
  const inputValue = document.getElementById("userInput").value;
  const unit = document.getElementById("unit").value;
  const milesToKm = unit === "milesToKm";
  const fahToCel = unit === "fahToCel";
  let result = 0;
  if (unit === "milesToKm") {
    result = inputValue * 1.60934;
  } else if (unit === "kmToMiles") {
    result = inputValue / 1.60934;
  } else if (unit === "fahToCel") {
    result = (inputValue - 32) * 0.556;
  } else if (unit === "celToFah") {
    result = inputValue * 1.8 + 32;
  }
  document.getElementById("resultElement").innerHTML = result;
}
