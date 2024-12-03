function add(a ,b){
    return a + b;
}
function subtract(a,b){
    return a - b;
}
function multiply(a,b){
    return a * b;
}
function divide(a,b){
    return a / b;
}
function operate(operator,a,b){
    if (operator == "+"){
        return add(a,b);
    }
    else if (operator == "*"){
        return multiply(a,b);
    }
    if (operator == "-"){
        return subtract(a,b);
    }
    if (operator == "/"){
        if (b == 0){
            clear();
            return "ERROR";
        }
        else return divide(a,b).toFixed(6);
    }
}

let collector = "";
let value1 = "";
let value2 = "";
let sign1;
let sign2;
const numbers = document.querySelectorAll(".number");
const display = document.querySelector(".display");
display.textContent = 0;

numbers.forEach((button) =>{
    button.addEventListener("click", () =>{
        display.textContent = "";
        collector += button.textContent;
        display.textContent = collector;
    });
});

const ClearButton = document.querySelector(".clearButton");
ClearButton.addEventListener("click", clear)

const operatorsButtons = document.querySelectorAll(".operator");
operatorsButtons.forEach((button) =>{
    button.addEventListener("click", () =>{
        if (collector !=""){
            value2 = value1;
            value1 = collector;
            if (value1 != "" && value2 != ""){
                if (sign1 == ""){
                    sign1 = button.textContent;
                }
                value1 = display.textContent = operate(sign1, Number(value2), Number(value1));
            }
            
            collector = "";
        }
        sign1 = button.textContent;
    });
});

const equals = document.querySelector(".equals");
equals.addEventListener("click", () => {
    if (value1 != "" && collector !=""){
        value2 = value1;
        value1 = collector;
        display.textContent = operate(sign1, Number(value2), Number(value1));
        if (display.textContent != "ERROR"){
            value1 = display.textContent;
        }
        collector ="";
    }
})

function clear(){
    display.textContent = "0";
    collector = "";
    value1 = "";
    value2 = "";
    sign1 = "";
}


