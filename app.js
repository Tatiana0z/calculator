function addNumber(n){
    let result = document.querySelector(".result");
    let index = n;
    let r = result.value;

    if( result.value == 0){
        console.log(index);
        result.value = index;
    } else {
        console.log(index);
        result.value += index;
    }
} 

function operator( n ){
    let result = document.querySelector(".result");
    let r = result.value;

    if( r !== ""){
        if( r.slice(-1) !== " "){
            let index = n;
            console.log(index);
            if(index == "+") {
                result.value += " + ";
            } else if (index == "-") {
                result.value += " - ";
            } else if (index == "*") {
                result.value += " * ";
            } else if (index == "/") {
                result.value += " / ";
            } else if (index == "%") {
                result.value += " % ";
            }
        }
    }
}

function c() {
    let result = document.querySelector(".result");

    result.value = 0;
}


function remove(){
    let result = document.querySelector(".result").value;
    let rl = result.slice(-1);

    if( ( result == "0") || (result.slice(1) == "" )) {
        document.querySelector(".result").value = "0";
    }  else {
        if( rl !== " "){
            document.querySelector(".result").value = result.slice(0,-1);
            
        } else {
            document.querySelector(".result").value = result.slice(0,-3);
        }
    }
}


function calculate(num1, operator, num2){
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);


    switch(operator) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            return num1 / num2;
        case "%":
            return num1  % num2;
        default: 
            return "Error";
    }
}

function resultOperation() {
    let result = document.querySelector(".result").value;
    let res = result.split(" ");

    let symbols = [];
    let numbs = [];

    for (let i = 0; i < res.length; i++) {
        if (!isNaN(parseFloat(res[i]))) {
            numbs.push(res[i]);
        } else {
            symbols.push(res[i]);
        }
    }

    if (symbols.length !== numbs.length - 1) {
        console.log("Input invalid");
        return; // Ieși din funcție dacă input-ul nu este valid
    }

    let total = parseFloat(numbs[0]);
    for (let i = 0; i < symbols.length; i++) {
        let operator = symbols[i];
        let operand = parseFloat(numbs[i + 1]);
        total = calculate(total, operator, operand);
    }

    document.querySelector(".result").value = total;
    console.log("Rezultatul:", total);
}
