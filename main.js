// Step 1 - Find all the elements we need to interact with
const num1Input = document.getElementById('number1')
const num2Input = document.getElementById('number2')
const operatorSelect = document.getElementById('operator')
const calculateButton = document.getElementById('calculateButton')
const resultSpan = document.getElementById('result')
const clearButton = document.getElementById('clearCalculator')

// Step 2 - Add an event listener to the button to call a function when clicked
calculateButton.addEventListener('click', calculate)
clearButton.addEventListener('click', clearCalculator)

function calculate() {
    const num1 = parseFloat(num1Input.value)
    const num2 = parseFloat(num2Input.value)
    const operator = operatorSelect.value;

    let result
    if( operator === "+") {
        result = num1 + num2
    }
    else if (operator === '-') {
        result = num1 - num2
    }
    else if (operator === '*') {
        result = num1 * num2
    }
    else if (operator === '/') {
        result = num1 / num2
    }
    else if (operator === '**') {
        result = num1 ** num2
    }
    else if (operator === 'sqrt') {
        result = num1 ** (1/num2)
    }
    
    // Step 3 - update the result span with the result of the calculation
    resultSpan.innerText = result;
}

function clearCalculator() {
    num1Input.value = ''
    num2Input.value = ''
    operatorSelect.value = '+'
    resultSpan.innerText = '?'
}
