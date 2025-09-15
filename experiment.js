let height = document.getElementById("height");
let weight = document.getElementById("weight");
let btn = document.querySelector("#calculate");
let msg = document.querySelector("#result");

btn.addEventListener("click", () => {

    const bmi = (weight.value / ((height.value * height.value) / 10000)).toFixed(2);
    console.log(bmi);
    // msg.innerText = `Your BMI is ${bmi}`;
    if (bmi < 18.5) {
        msg.innerText = `Your BMI is ${bmi}:Under Weight`;
    } else if (bmi >= 18.5 && bmi < 24.9) {
        msg.innerText = `Your BMI is ${bmi}:Normal`;
    }else if (bmi >= 25 && bmi < 29.9) {
        msg.innerText = `Your BMI is ${bmi}:Over Weight`;
    }else if (bmi >= 30 && bmi < 34.9) {
        msg.innerText = `Your BMI is ${bmi}:Obesity(Class I)`;
    }else if (bmi >= 35 && bmi < 39.9) {
        msg.innerText = `Your BMI is ${bmi}:Obesity(Class II)`;
    } else if (bmi > 40) {
        msg.innerText = `Your BMI is ${bmi}:Extreme Obesity`;
    }
});



let theme = document.querySelector(".theme");
let body = document.querySelector("body");
let statusBar = document.querySelector(".status");

let mode = "light";
theme.addEventListener("click", () => {
    if(mode == "light") {
        mode = "dark";
        body.classList.add("dark");
        body.classList.remove("light");
        weight.style.borderBottom = "1px solid white";
        weight.style.color = "white";
        height.style.borderBottom = "1px solid white";
        height.style.color = "white";
        statusBar.innerText = `Dark Mode`;
    }else {
        mode = "light";
        body.classList.add("light");
        body.classList.remove("dark");
        weight.style.borderBottom = "1px solid black";
        weight.style.color = "Black";
        height.style.borderBottom = "1px solid black";
        height.style.color = "Black";
        statusBar.innerText = `Light Mode`;
    }
})