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

const onUpdateClick = async e => {
    const id = e.currentTarget.dataset.id;

    const isDone = e.currentTarget.dataset.isDone === 'true';

    const task = await updateTask(id, isDone);
    const newTask = createTaskListItemElem(task, onUpdateClick, onDeleteClick);
    const oldChild = document.getElementById(id);

    tasksListElem.replaceChild(newTask, oldChild)
};

const onDeleteClick = async e => {
    const id = e.currentTarget.dataset.id;

    const data = await deleteTask(id);

    if (data) {
        const oldChild = document.getElementById(id);
        oldChild.remove();
    }
};

const onClickCreate = async value => {
    const task = await createTask({value});
    tasksListElem.prepend(createTaskListItemElem(task, onUpdateClick, onDeleteClick));
    taskInputElem.value = "";
};

addTaskButtonElem.onclick = async function (e) {
    const {value} = taskInputElem;
    if (value) {
        const createResult = await onClickCreate(value);
        console.log(createResult)
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

window.onload = async () => {
    const list = await getList();
    fillList(list);
};