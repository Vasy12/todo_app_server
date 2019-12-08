'use strict';

export default function (task) {
    const {value, isDone} = task;
    const taskText = document.createTextNode(value);


    const taskValueElem = document.createElement("main");
    taskValueElem.classList.add('taskText');
    taskValueElem.setAttribute('title', value);
    taskValueElem.appendChild(taskText);

    const taskValueWrapper = document.createElement('div');
    //taskValueWrapper.classList.add('taskValueWrapper', (isDone ? "doneTask" : " "));
    taskValueWrapper.setAttribute('class', (isDone ? "taskValueWrapper doneTask" : "taskValueWrapper"));
    taskValueWrapper.appendChild(taskValueElem);

    return taskValueWrapper;
}