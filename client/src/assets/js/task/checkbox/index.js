'use strict';


export function createTaskCheckboxElem(task) {
    const taskCheckBox = document.createElement('input');
    taskCheckBox.setAttribute('type', "checkbox");
    taskCheckBox.setAttribute('data-taskid', task.id);
    return taskCheckBox;
}


