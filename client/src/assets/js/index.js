'use strict';

import * as restPath from './constants/rest_path/index.js'

import {
    taskInputElem,
    addTaskButtonElem,
    resetInputButtonElem,
    tasksListElem,
} from './controls/index.js';

import createTaskListItemElem from './task/index.js';


let taskCounter = 0;

addTaskButtonElem.onclick = function (e) {
    const {value} = taskInputElem;
    if (value) {
        tasksListElem.appendChild(createTaskListItemElem({
            id: ++taskCounter,
            value,
            isDone: Math.random() > 0.5,
        }));
        taskInputElem.value = "";
    }
};


resetInputButtonElem.onclick = function (e) {
    taskInputElem.value = "";
};
