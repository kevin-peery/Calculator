//A simple Calculator app.

/**
 * Write some pseudo code steps here.
 * Use those steps as your `commit` messages (and delete them from here as you complete a step.)
 */

//Declare functions
function adder(number1, number2) {
  //Calculate
  let result = Number(number1) + Number(number2);

  //Display
  console.log("Addition result: " + result);
}
function subtractor(number1, number2) {
  //Calculate
  let result = number1 - number2;

  //Display
  console.log("Subtraction result: " + result);
}
function multiplier(number1, number2) {
  //Calculate
  let result = number1 * number2;

  //Display
  console.log("Multiplication result: " + result);
}
function divider(number1, number2) {
  //Calculate
  let result = number1 / number2;

  //Display
  console.log("Division result: " + result);
}

const form = document.querySelector("form");
const num1 = document.querySelector("#num-1");
const num2 = document.querySelector("#num-2");
const select = document.querySelector("select");

form.addEventListener("submit", function(event) {
  //
  event.preventDefault();

  console.log(num1.value, num2.value, select.value);
});
