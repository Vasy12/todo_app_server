'use strict';

import * as restPath from './constants/rest_path/index.js'

import {
    taskInputElem,
    addTaskButtonElem,
    resetInputButtonElem,
    tasksListElem,
} from './controls/index.js';

import createTaskListItemElem from './task/index.js';
import {getList, createTask, deleteTask, markTask} from "./crud/index.js";


const onClickMark = e => {
    const id = e.currentTarget.dataset.taskId;
    const currentValue = e.currentTarget.dataset.taskIsDone === 'true';

    markTask(id, currentValue, function (res) {
        const oldChild = document.getElementById(id);
        const newChild = createTaskListItemElem(res, onClickMark, onClickDelete);
        tasksListElem.replaceChild(
            newChild,
            oldChild,
        );
    })
};

const onClickDelete = e => {
    const id = e.currentTarget.dataset.taskId;

    deleteTask(id, function (res) {
        if (res === 'true') {
            const li = document.getElementById(id);
            li.remove();
        }
    })
};

addTaskButtonElem.onclick = function (e) {
    const {value} = taskInputElem;
    if (value) {
        createTask({value}, function (createdTask) {
            tasksListElem.prepend(createTaskListItemElem(createdTask, onClickMark, onClickDelete));
            taskInputElem.value = "";
        });
    }
};


resetInputButtonElem.onclick = function (e) {
    taskInputElem.value = "";
};

const fillList = list => {
    for (const task of list) {
        tasksListElem.appendChild(createTaskListItemElem(task, onClickMark, onClickDelete));
    }
};

window.onload = () => {
    getList(fillList)
};