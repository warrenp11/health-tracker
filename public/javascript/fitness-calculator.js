const fitnessCalculatorFunctions = require("fitness-calculator");

const bmiBtnEl = document.querySelector("#bmi-btn");

function bmiCalculator(event) {
    event.preventDefault();
    // console.log(event);

    const height= document.querySelector("#height").value.trim();
    const weight= document.querySelector("#weight").value.trim();

    const myBmi = fitnessCalculatorFunctions(height, weight);
    console.log(myBmi);
}

bmiBtnEl.addEventListener("click", bmiCalculator);