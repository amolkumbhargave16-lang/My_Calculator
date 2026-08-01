let currentInput = '';
let currentOperation = '';
let previousInput = '';

function appendOperation(operation){
    if(currentInput === '') return;
    if(previousInput !== ''){
        calculate();
    }
    currentOperation = operation;
    previousInput = currentInput;
    currentInput = '';
    document.getElementById('display').value = `${previousInput} ${currentOperation}`;
}

function appendNumber(number){
    currentInput+=number;
    document.getElementById('display').value = `${previousInput} ${currentOperation} ${currentInput}`;
}

function calculate(){
    if(previousInput === '' || currentInput === '') return;
    let result;
    let previous = parseFloat(previousInput);
    let current = parseFloat(currentInput);

    switch(currentOperation){
        case '+':
            result = previous + current;
            break;
        case '-':
            result = previous - current;
            break;
        case '*':
            result = previous * current;
            break;
        case '/':
            if(current === 0){
                alert("Cannot divisible by 0");
                return;
            }
            result = previous / current;
            break; 
        case '%':
            result = (previous/100)*current;
            break;
        default:
            return;     
            
            
        }
        currentInput = result.toString();
        currentOperation = ''
        previousInput = ''
        document.getElementById('display').value = currentInput;

        
    }

    
    function clearDisplay(){
        currentInput = '';
        currentOperation = '';
        previousInput = '';
        document.getElementById('display').value = '';

        
        
    }
    function singleClear() {
    if (currentInput !== '') {
        currentInput = currentInput.slice(0, -1);
    }
    else if (currentOperation !== '') {
        currentOperation = '';
    }
    else if (previousInput !== '') {
        previousInput = previousInput.slice(0, -1);
    }

    document.getElementById("display").value =
        `${previousInput} ${currentOperation} ${currentInput}`;
}