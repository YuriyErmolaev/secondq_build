import {formatError} from "../common.js";
import { resultTimerElement, secondsInputElement, globals } from "./main.js";
import {startTimer} from "./timer.js";

export function handlerClickStart( event ){
    resultTimerElement.innerHTML = '';
    globals.inputSeconds = secondsInputElement.value;
    if( globals.inputSeconds ){
        startTimer();
    } else {
        resultTimerElement.innerHTML = formatError( 'enter seconds' );
    }
};

