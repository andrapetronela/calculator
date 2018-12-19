

const calculator = document.querySelector('#buttons');
const keys = calculator.querySelector('.button');

calculator.addEventListener('click', ev => {
    if (ev.target.matches('button')) {
        const key = ev.target;
        const action = key.dataset.action;
        if (!action) {
            console.log('number key');
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
})






