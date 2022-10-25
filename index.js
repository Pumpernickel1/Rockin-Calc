let display = document.getElementById('display');

let buttons = Array.from(document.getElementsByClassName('button'));

let storeValue1 = 'No value stored';
let storeValue2 = 'No value stored';

buttons.map( button => {
    button.addEventListener('click', (e) => {
        switch (e.target.innerText) {
            case 'Store 1':
                storeValue1 = display.innerText;
                break;
            case 'Recall 1':
                display.innerText = storeValue1;
                break;
            case 'Store 2':
                storeValue2 = display.innerText;
                break;
            case 'Recall 2':
                display.innerText = storeValue2;
                break;
            case 'C':
                display.innerText = '';
                break;
            case '←':
                if (display.innerText) {
                    display.innerText = display.innerText.slice(0, -1);
                };
                break;
            case '=':
                try {
                    display.innerText = eval(display.innerText);
                } catch {
                    display.innerText = 'ERROR';
                };
                break;
            default:
                if (display.innerText === '0') {
                    if (e.target.innerText === '0') {
                        display.innerText = '0';
                    } else if (e.target.innerText !== '0') {
                        display.innerText = e.target.innerText;
                    }; 
                } else if (display.innerText === 'No value stored') {
                    if (e.target.innerText !== 'Store 1' || 'Store 2') {
                        display.innerText = e.target.innerText;
                    };
                } else if (display.innerText === 'ERROR') {
                    if (e.target.innerText) {
                        display.innerText = e.target.innerText;
                    };
                } else (display.innerText += e.target.innerText);
                    if (display.innerText.length > 25) {
                        display.innerText = display.innerText.slice(0, -1);
                };
        };
    });
});