'use strict';

import {
    taskInputElem,
    addTaskButtonElem,
    resetInputButtonElem,
    tasksListElem,
} from './controls/index.js';

import {createTaskElem} from './task/index.js';


let taskCounter = 0;

addTaskButtonElem.onclick = function (e) {
    const {value} = taskInputElem;
    if (value) {
        tasksListElem.appendChild(createTaskElem({
            id: ++taskCounter,
            value,
        }))
    }
};
