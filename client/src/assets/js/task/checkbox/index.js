'use strict';


export default function(task, onClick) {



    const checkBoxElem = document.createElement('div');
    checkBoxElem.classList.add('checkMarkContainer');
    checkBoxElem.setAttribute('data-task-id', task.id);
    checkBoxElem.setAttribute('data-task-is-done', task.isDone);
    checkBoxElem.onclick = onClick;

    if(task.isDone){
        const checkMarkImage = document.createElement('img');
        checkMarkImage.setAttribute('src', "./assets/img/icons/check.png");
        checkMarkImage.setAttribute('alt', "X");
        checkBoxElem.appendChild(checkMarkImage);
    }

    return checkBoxElem;
}


