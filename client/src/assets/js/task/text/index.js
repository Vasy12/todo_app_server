'use strict';

export function createTaskTextElem(task) {

    const {value} = task;
    const taskText = document.createElement("h3");
    taskText.setAttribute('title', value);
    taskText.innerText = value;

    return taskText;
}