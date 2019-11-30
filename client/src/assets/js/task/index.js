'use strict';

import {createTaskCheckboxElem} from './checkbox/index.js';
import {createTaskTextElem} from './text/index.js';


export function createTaskElem(task) {

    const taskElem = document.createElement('li');
    taskElem.setAttribute( 'id', task.id );
    taskElem.appendChild( createTaskCheckboxElem(task) );
    taskElem.appendChild( createTaskTextElem(task) );
    return taskElem;

}
