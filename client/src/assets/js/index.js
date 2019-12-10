'use strict';


import {
    taskInputElem,
    addTaskButtonElem,
    resetInputButtonElem,
    tasksListElem,
} from './controls/index.js';

import createTaskListItemElem from './task/index.js';
import {createTask, deleteTask, getList, markTask} from "./crud/index.js";


const onClickMark = async (e) => {
    const id = e.currentTarget.dataset.taskId;
    const currentValue = e.currentTarget.dataset.taskIsDone === 'true';

    try {
        const res = await markTask(id, currentValue);

        const oldChild = document.getElementById(id);
        const newChild = createTaskListItemElem(res, onClickMark, onClickDelete);
        tasksListElem.replaceChild(newChild, oldChild);
    } catch (e) {
        console.error(e);
    }
};

const onClickDelete = async (e) => {
    const id = e.currentTarget.dataset.taskId;

    const res = await deleteTask(id);

    if (res) {
        const li = document.getElementById(id);
        li.remove();
    }
};

addTaskButtonElem.onclick = async function (e) {
    const {value} = taskInputElem;
    if (value) {
        const createdTask = await createTask({value});
        tasksListElem.prepend(createTaskListItemElem(createdTask, onClickMark, onClickDelete));
        taskInputElem.value = "";
    }
};


resetInputButtonElem.onclick = function (e) {
    taskInputElem.value = "";
};

window.onload = async () => {
    const list = await getList();

    for (const task of list) {
        await tasksListElem.appendChild(await createTaskListItemElem(task, onClickMark, onClickDelete));
    }
};