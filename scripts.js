//A simple Calculator app.

//Declare methods
const calculator = {
  add(a, b) {
    //Calculate
    return Number(a) + Number(b);
  },

  subtract(a, b) {
    //Calculate
    return a - b;
  },

  multiply(a, b) {
    //Calculate
    return a * b;
  },

  divide(a, b) {
    //Calculate
    return a / b;
  },

  remainder: function remainder(a, b) {
    //Calculate
    return a % b;
  }
};

//Declare variables
const form = document.querySelector("form");
const num1 = document.querySelector("#num-1");
const num2 = document.querySelector("#num-2");
const select = document.querySelector("select");
const output = document.querySelector("output");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  output.textContent = calculator[select.value](num1.value, num2.value);
});
