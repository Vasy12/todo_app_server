'use strict';

import {
    taskInputElem,
    addTaskButtonElem,
    resetInputButtonElem,
    tasksListElem,
} from './controls/index.js';

import createTaskListItemElem from './task/index.js';
import {getList, createTask, deleteTask, updateTask} from "./crud/index.js";


const addTask = task => createTaskListItemElem(task, onUpdateClick, onDeleteClick);

const onUpdateClick = async ({currentTarget: {dataset: {id, isDone}}}) => {
    tasksListElem.replaceChild(
        addTask(await updateTask(id, isDone === 'true')),
        document.getElementById(id)
    )
};

const onDeleteClick = async ({currentTarget: {dataset: {id}}}) => {
    if (await deleteTask(id)) {
        document.getElementById(id).remove();
    }
};

addTaskButtonElem.onclick = async function (e) {
    const {value} = taskInputElem;
    if (value) {
        tasksListElem.prepend(addTask(await createTask({value})));
        taskInputElem.value = "";
    }
};

resetInputButtonElem.onclick = function (e) {
    taskInputElem.value = "";
};

window.onload = async () => {
    for (const task of await getList()) {
        tasksListElem.appendChild(addTask(task));
    }
};