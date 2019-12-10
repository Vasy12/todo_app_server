'use strict';

import * as restPath from './constants/rest_path/index.js'

import {
    taskInputElem,
    addTaskButtonElem,
    resetInputButtonElem,
    tasksListElem,
} from './controls/index.js';

import createTaskListItemElem from './task/index.js';
import {getList, createTask, deleteTask, updateTask} from "./crud/index.js";

const onUpdateClick = e => {
    const id = e.currentTarget.dataset.id;

    const isDone = e.currentTarget.dataset.isDone === 'true';

    updateTask(id, isDone, task => {
        const newTask = createTaskListItemElem(task, onUpdateClick, onDeleteClick);
        const oldChild = document.getElementById(id);

        tasksListElem.replaceChild(newTask, oldChild)
    })
};

const onDeleteClick = e => {
    const id = e.currentTarget.dataset.id;

    deleteTask(id, data => {
        if (data) {
            const oldChild = document.getElementById(id);
            oldChild.remove();
        }
    })
};

addTaskButtonElem.onclick = function (e) {
    const {value} = taskInputElem;
    if (value) {
        createTask({value}, task => {
            tasksListElem.prepend(createTaskListItemElem(task, onUpdateClick, onDeleteClick));
        });

        taskInputElem.value = "";
    }
};


resetInputButtonElem.onclick = function (e) {
    taskInputElem.value = "";
};

const fillList = (list) => {
    for (const task of list) {
        tasksListElem.appendChild(createTaskListItemElem(task, onUpdateClick, onDeleteClick));
    }
};

window.onload = () => {
    getList(fillList)
};