const fitnessCalculatorFunctions = require("fitness-calculator");

async function bmiFormHandler(event) {
    event.preventDefault();
    // console.log(event);
    
    const height = document.querySelector("#height").value.trim();
    const weight = document.querySelector("#weight").value.trim();
    // console.log(height);
    // console.log(weight);

    if (height && weight) {
        const myBmi = fitnessCalculatorFunctions(height, weight);
        console.log(myBmi);
    }

}


document.querySelector("#bmi-form").addEventListener("submit", bmiFormHandler);