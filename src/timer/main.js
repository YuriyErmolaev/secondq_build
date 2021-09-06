import {handlerClickStart} from "./startHandler.js";
import {handlerClickStop} from "./stopHandler.js";

export const secondsInputElement = document.getElementById('inputSeconds');
export const startButton = document.getElementById('start');
export const stopButton = document.getElementById('stop');
export const resultTimerElement = document.getElementById('timer-result');

export let globals = {'timer':'', 'inputSeconds':''};

startButton.addEventListener('click', handlerClickStart);
stopButton.addEventListener('click', handlerClickStop);



