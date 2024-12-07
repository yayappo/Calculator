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
        else return divide(a,b);
    }
}

function rounding(number){
    {
        let arr = number.toString().split("")
        let cutLenght = number.toString().length - 11;
        for (let i = 0; i < cutLenght; i++){
            arr.pop();
        }
        return arr.join("");
    }
}
//check if number is just large or number have got a lot of number after decimals
function getTenCharNumber(numb){
    if(numb.toString().length >10){
        if(numb.toString().includes(".")){
            return rounding(numb);
        }
        else if(numb > 9999999999){
            return 9999999999;
        }
    }
    else{
        return numb;
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
        if (collector.length < 10){
            display.textContent = "";
            collector += button.textContent;
            display.textContent = collector;
        }
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
                value1 = operate(sign1, Number(value2), Number(value1));
                display.textContent = value1 = getTenCharNumber(value1);
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
        display.textContent = getTenCharNumber(operate(sign1, Number(value2), Number(value1)));
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

const backspaceButton = document.querySelector(".backspace");
backspaceButton.addEventListener("click", () => { 
    if(collector !=""){
        let arr = collector.split("");
        arr.pop();
        display.textContent = collector = arr.join("");
    }
});

const decimalButton = document.querySelector(".decimal");
decimalButton.addEventListener("click", () => {
    if (!collector.includes(".") && collector !=""){
        collector += decimalButton.textContent;
        display.textContent = collector;
    }
})

//key activation
window.addEventListener('keydown', function(e) {
    const button = document.querySelector(`button[data-key="${e.keyCode}"]`);
    if(!button) return;
    button.click();
})

