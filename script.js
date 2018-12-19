const calculator = document.querySelector('#buttons');
const buttons = calculator.querySelector('.button');
const display = document.getElementById('display');
const clear = document.getElementById('clear');

calculator.addEventListener('click', ev => {
    if (ev.target.matches('button')) {
        const key = ev.target;
        const action = key.dataset.action;
        const keyContent = key.textContent;
        const number = display.textContent;
                
        if (!action) {
            if (number === '0') {
                display.textContent = keyContent;
            } else {
                display.textContent = number + keyContent;
            }
        } else if (action === 'decimal') {
            display.textContent = number + '.';
        }
            if (
              action === 'add' ||
              action === 'subtract' ||
              action === 'multiply' ||
              action === 'divide'
            ) {
              console.log('operator key!')
            } 
        if (action === 'decimal') {
              console.log('decimal key!')
            }
            if (action === 'clear') {
              console.log('clear key!')
            }
            if (action === 'equals') {
              console.log('equal key!')
            }
    }
});

clear.addEventListener('click', function() {
    display.textContent = '0';
})









