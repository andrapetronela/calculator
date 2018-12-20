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
        } else if (action === 'clear') {
                display.textContent = '0';
        }
    }
});










