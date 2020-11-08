// BUTTONS ON THE PAGE
const numberButtons = document.querySelectorAll('number);
const operatorButtons = document.querySelectorAll('.operator');
const equalButton = document.querySelector('.equal');
const clearButton = document.querySelector('.clear');

// TODO make references to all the proper HTML elements you'll be using to display elements to the user

// TODO make variables to keep track of the 1st number, operator, 2nd number, and the result of the math.

for(let i = 0; i < numberButtons.length; i++) {
  numberButtons[i].addEventListener('click', clickNumber);
}
for(let i = 0; i < operatorButtons.length; i++) {
  operatorButtons[i].addEventListener('click', clickOperator);
}
equalButton.addEventListener('click', clickEqualButton);
clearButton.addEventListener('click', clickClearButton);

function clickNumber(event) {
  console.log(event.target.value);
  var prev = document.forms['calc']['display'].value;
    if (!(prev == "" && value==0))
        var newval = prev+value;
    document.forms['calc']['display'].value = newval;
}

function clickOperator(event) {
  console.log(event.target.value);
  var display = document.forms['calc']['display'].value;
    nun1 = parselnt(display);
    document.forms['calc']['display'].value = "";
}

function clickEqualButton() {
    var display = document.forms['calc']['display'].value;
    var num2 = parselnt(display):
    switch(op){
            case "p"
                var ans=num1+num2;
            break;
            case "M":
                var ans=num1-num2;
            break;
    }
    document.forms['calc']['display'].value = ans;
}

function clickClearButton() {
    const clearButton = calculator.querySelector('[dataaction=clear]')
    clearButton.textContent = 'CE'
}
\