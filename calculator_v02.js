window.addEventListener('load', function()  { reset();}, false);
var option = document.getElementsByTagName("input");
for (var i = 0;i < option.length; i++) {
option[i].addEventListener('click', function(event) { calculate(event.target.value); }, false);
}

document.addEventListener('keypress', function(event){
  var oper = '=';
if (event.keyCode >= 48 && event.keyCode <= 57) { 
    var code = event.keyCode - 48;
    calculate(code);
}

else {

switch(event.keyCode)
{
  case 42: oper = '*'; break;
  case 43: oper = '+'; break;
  case 45: oper = '-'; break;
  case 47: oper = '/'; break;
  case 32: oper = '='; break;
  default: oper = '='; break;
}
calculate(oper);
}

}, false);

function calculate(y) {
var existVal = document.getElementById("output");
var currOperand = document.getElementById("oper");
var val = document.getElementById("val");
if (isNaN(y) == true) {

       existVal.value = doPrevOperation(existVal.value, currOperand.value, val.value);
       currOperand.value = y;
switch(y) {
    case "=": 
       val.value = 0;   
       break;
    case "Reset": 
      reset(); 
      break;
    default:
       val.value = existVal.value;
       existVal.value = 0; break;
}}
else
{   x = Number(y);
    existVal.value = (existVal.value * 10 ) + x; 
}
document.getElementById("output").value = existVal.value;
document.getElementById("oper").value = currOperand.value;
document.getElementById("val").value = val.value;
document.getElementById("outputD").innerHTML = existVal.value;
}

function doPrevOperation(vb, op, va ) {
    switch(op) {
    case "+": return(va + vb); break;
    case "-": return(va - vb); break;
    case "*": return(va * vb); break;
    case "/": return(va / vb); break;
    default: return(vb); break;
    }
}

function reset() {
console.log("Reset started");
document.getElementById("output").value = 0;
document.getElementById("oper").value = "";
document.getElementById("val").value = 0;
document.getElementById("outputD").innerHTML = 0;
}
