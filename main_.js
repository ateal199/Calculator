const calculator = index.html
      document.querySelector ('.calculator')
const keys =
      calculator.querySelector('calculator_keys')
keys.addEventListener('click, e =>
{
 if (e.target.matches('button')) {
    // Do something
}
})
const key = e.target
const action = key.dateset.action

                      
      function updateDisplay() {
  // select the element with class of `calculator-screen`
  const display = document.querySelector('.calculator-screen');
  // update the value of the element with the contents of `displayValue`
  display.value = calculator.displayValue;
}

for(let i = 0; i < numberButtons.length; i++) {
  numberButtons[i].addEventListener('click', clickNumber);
}
for(let i = 0; i < operatorButtons.length; i++) {
  operatorButtons[i].addEventListener('click', clickOperator);
}
equalButton.addEventListener('click', clickEqualButton);
clearButton.addEventListener('click', clickClearButton);

const keys = document.querySelector('.calculator-keys');
keys.addEventListener('click', (event) => {
  // Access the clicked element
  const { target } = event;

  // Check if the clicked element is a button.
  // If not, exit from the function
  if (!target.matches('button')) {
    return;
  }

  if (target.classList.contains('operator')) {
    console.log('operator', target.value);
    return;
  }

  if (target.classList.contains('decimal')) {
    console.log('decimal', target.value);
    return;
  }

  if (target.classList.contains('all-clear')) {
    console.log('clear', target.value);
    return;
  }

  console.log('digit', target.value);
});

      const { target } = event;
// is equivalent to
const target = event.target;

      function inputDigit(digit) {
  const { displayValue } = calculator;
  // Overwrite `displayValue` if the current value is '0' otherwise append to it
  calculator.displayValue = displayValue === '0' ? digit : displayValue + digit;
}

      console.log('digit', target.value);
      
      inputDigit(target.value);
updateDisplay();

      function inputDecimal(dot) {
  // If the `displayValue` property does not contain a decimal point
  if (!calculator.displayValue.includes(dot)) {
    // Append the decimal point
    calculator.displayValue += dot;
  }
}

      console.log('decimal', target.value);

      inputDecimal(target.value);
updateDisplay();

      function handleOperator(nextOperator) {
  // Destructure the properties on the calculator object
  const { firstOperand, displayValue, operator } = calculator
  // `parseFloat` converts the string contents of `displayValue`
  // to a floating-point number
  const inputValue = parseFloat(displayValue);

  // verify that `firstOperand` is null and that the `inputValue`
  // is not a `NaN` value
  if (firstOperand === null && !isNaN(inputValue)) {
    // Update the firstOperand property
    calculator.firstOperand = inputValue;
  }

  calculator.waitingForSecondOperand = true;
  calculator.operator = nextOperator;
}

      console.log(calculator);

      console.log('operator', target.value);

      handleOperator(target.value);
updateDisplay();

      function inputDigit(digit) {
  const { displayValue, waitingForSecondOperand } = calculator;

  if (waitingForSecondOperand === true) {
    calculator.displayValue = digit;
    calculator.waitingForSecondOperand = false;
  } else {
    calculator.displayValue = displayValue === '0' ? digit : displayValue + digit;
  }

  console.log(calculator);
}

      function resetCalculator() {
  calculator.displayValue = '0';
  calculator.firstOperand = null;
  calculator.waitingForSecondOperand = false;
  calculator.operator = null;
  console.log(calculator);
}

      console.log('all clear', target.value)

      resetCalculator();
updateDisplay();
    document.forms['calc']['display'].value = ans;
}

function clickClearButton() {
    const clearButton = calculator.querySelector('[dataaction=clear]')
    clearButton.textContent = 'CE'
}
\