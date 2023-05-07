//INPUT

var numberA = () => parseInt(document.getElementById("input-number1").value);
var numberB = () => parseInt(document.getElementById("input-number2").value);

//OPERACIONES

var sumNumber = () => numberA() + numberB();
var restNumber = () => numberA() - numberB();
var divideNumber = () => numberA() / numberB();
var multiplyNumber = () => numberA() * numberB();

//RESULTADOS

var showResultsum = () => document.getElementById("result").innerText = sumNumber();
var showResultrest = () => document.getElementById("result").innerText = restNumber();
var showResultdivide = () => document.getElementById("result").innerText = divideNumber();
var showResultmultiply = () => document.getElementById("result").innerText = multiplyNumber();

//EVENTOS

document.getElementById("sum").addEventListener("click", showResultErrorsum);
document.getElementById("rest").addEventListener("click", showResultErrorrest);
document.getElementById("divide").addEventListener("click", showResultErrordivide);
document.getElementById("multiply").addEventListener("click", showResultErrormultiply);

//function error

function showResultErrorsum() {
    if ((isNaN(numberA())) || (isNaN(numberB()))) {
        return document.getElementById("result").innerText ="error";
    }
    else document.getElementById("result").innerText = sumNumber();
}
function showResultErrorrest() {
    if ((isNaN(numberA())) || (isNaN(numberB()))) {
        return document.getElementById("result").innerText ="error";
    }
    else document.getElementById("result").innerText = restNumber();
}
function showResultErrordivide() {
    if ((isNaN(numberA())) || (isNaN(numberB()))) {
        return document.getElementById("result").innerText ="error";
    }
    else document.getElementById("result").innerText = divideNumber();
}
function showResultErrormultiply() {
    if ((isNaN(numberA())) || (isNaN(numberB()))) {
        return document.getElementById("result").innerText ="error";
    }
    else document.getElementById("result").innerText = multiplyNumber();
}

    
    



  
  

