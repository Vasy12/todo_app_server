"use strict";

import createTaskCheckboxElem from "./checkbox/index.js";
import createTaskValueElem from "./text/index.js";
import createTaskRemoveButton from './removeButton/index.js'

export default function(task, onUpdateClick, onDeleteClick) {

    const taskElem = document.createElement("li");
    taskElem.classList.add('taskContainer');
    taskElem.setAttribute("id", task.id);

    taskElem.appendChild(createTaskCheckboxElem(task, onUpdateClick));

    taskElem.appendChild(createTaskValueElem(task));

    taskElem.appendChild(createTaskRemoveButton(task, onDeleteClick));

    return taskElem;
}
