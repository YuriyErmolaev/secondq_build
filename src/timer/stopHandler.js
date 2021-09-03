import {formatError} from "../common.js";
import { resultTimerElement, secondsInputElement, globals } from "./main.js";
import {startTimer, stopTimer} from "./timer.js";

export function handlerClickStop( event ){
    resultTimerElement.innerHTML = '';
    globals.inputSeconds = secondsInputElement.value;
    if( globals.inputSeconds ){
        stopTimer();
    } else {
        resultTimerElement.innerHTML = formatError( 'enter seconds' );
    }
};

