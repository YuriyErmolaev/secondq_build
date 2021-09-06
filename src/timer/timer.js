import { resultTimerElement, globals } from "./main.js";
import {beep} from "./beep.js";

export function startTimer(){
    globals.timer = setInterval(function() {
        globals.inputSeconds -= 1;
        if( globals.inputSeconds == 0 ){
            stopTimer();
            beep();
        }
        resultTimerElement.innerHTML = globals.inputSeconds;
    }, 1000);
}

export function stopTimer(){
    clearInterval(globals.timer);
}