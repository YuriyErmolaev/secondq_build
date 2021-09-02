import {formatError} from "./common.js";
import {diffDate} from "./diff.js";

const   formElement = document.getElementById('dateCalc-form'),
        resultElement = document.getElementById('dateCalc-result');

formElement.addEventListener('submit', handleSubmit);

function handleSubmit( event ){
    event.preventDefault();
    let { firstDate, secondDate } = event.target.elements;
    firstDate = firstDate.value;
    secondDate = secondDate.value;

    if( firstDate && secondDate ){
        console.log( diffDate( firstDate, secondDate ) );
    } else {
        // console.warn('enter dates');
        const resultEl = document.getElementById('dateCalc-result');
        resultEl.innerHTML = formatError( 'enter dates' );
    }

};