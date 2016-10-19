"use strict";


var digits = document.getElementsByClassName("digits");
var operators = document.getElementsByClassName("operators");
var leftInput = document.getElementById("leftOperand");
var rightInput = document.getElementById("rightOperand");
var operatorInput = document.getElementById("operator");
var inputs = document.getElementsByClassName("inputs");
var clear = document.getElementById("btnC");


for (var i = 0; i < digits.length; i++)
        digits[i].addEventListener('click', function () {
            event.preventDefault();
            if (operatorInput.value) {

                rightInput.value += this.innerHTML;

            } else {

                leftInput.value += this.innerHTML;

            }
        });
for (i = 0 ; i < operators.length; i++) {

    operators[i].addEventListener('click', function (event) {

        event.preventDefault();

        operatorInput.value = this.innerHTML;

    })
}

var doCalculation = function() {
    var num1 = parseFloat(leftInput.value);
    var num2 = parseFloat(rightInput.value);
    var op = operatorInput.value;
    var result;

    if (op == "+") {
        result = num1 + num2;
        rightInput.value = "";
        operatorInput.value = "";
    } else if (op == "-") {
        result = num1 - num2;
        rightInput.value = "";
        operatorInput.value = "";
    } else if (op == "*") {
        result = num1 * num2;
        rightInput.value = "";
        operatorInput.value = "";
    } else if (op == "/") {
        result = num1 / num2;
        rightInput.value = "";
        operatorInput.value = "";
    }
document.getElementById("leftOperand").value = result;
    };

document.getElementById("btn=").addEventListener('click', doCalculation, false);


clear.addEventListener('click', function() {
    leftInput.value = "";
    rightInput.value = "";
    operatorInput.value = "";
});



















//http://stackoverflow.com/questions/33550145/html-adding-two-inputs












/*



document.getElementById("btn+").addEventListener("click",function (){
   total = rightInput.value + leftInput.value;
    console.log(total);
});

/*document.getElementById("btn1").addEventListener('click', function() {
 leftInput.value = this.innerHTML;
 })

document.getElementById("btn2").addEventListener('click', function() {
    leftInput.value = this.innerHTML;
});

document.getElementById("btn3").addEventListener('click', function() {
    leftInput.value = this.innerHTML;

});

document.getElementById("btn4").addEventListener('click', function() {
    leftInput.value = this.innerHTML;
});

document.getElementById("btn5").addEventListener('click', function() {
    leftInput.value = this.innerHTML;
});

document.getElementById("btn6").addEventListener('click', function() {
    leftInput.value = this.innerHTML;
});

document.getElementById("btn7").addEventListener('click', function() {
    leftInput.value = this.innerHTML;
});

document.getElementById("btn8").addEventListener('click', function() {
    leftInput.value = this.innerHTML;
});

document.getElementById("btn9").addEventListener('click', function() {
    leftInput.value = this.innerHTML;
});

document.getElementById("btn0").addEventListener('click', function() {
    leftInput.value = this.innerHTML;
});




document.getElementById("btn+").addEventListener('click', function() {
    operatorInput.value = this.innerHTML;
});
document.getElementById("btn-").addEventListener('click', function() {
    operatorInput.value = this.innerHTML;
});

document.getElementById("btn*").addEventListener('click', function() {
    operatorInput.value = this.innerHTML;
});

document.getElementById("btn/").addEventListener('click', function() {
    operatorInput.value = this.innerHTML;
});





document.getElementById("btn1").addEventListener('click', function() {
    rightInput.value = this.innerHTML;
});

document.getElementById("btn2").addEventListener('click', function() {
    rightInput.value = this.innerHTML;
});

document.getElementById("btn3").addEventListener('click', function() {
    rightInput.value = this.innerHTML;

});

document.getElementById("btn4").addEventListener('click', function() {
    rightInput.value = this.innerHTML;
});

document.getElementById("btn5").addEventListener('click', function() {
    rightInput.value = this.innerHTML;
});

document.getElementById("btn6").addEventListener('click', function() {
    rightInput.value = this.innerHTML;
});

document.getElementById("btn7").addEventListener('click', function() {
    rightInput.value = this.innerHTML;
});

document.getElementById("btn8").addEventListener('click', function() {
    rightInput.value = this.innerHTML;
});

document.getElementById("btn9").addEventListener('click', function() {
    rightInput.value = this.innerHTML;
});

document.getElementById("btn0").addEventListener('click', function() {
    rightInput.value = this.innerHTML;
});*/
