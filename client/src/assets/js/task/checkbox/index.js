'use strict';


export default function(task, onChange) {

    const checkMarkImage = document.createElement('img');
    checkMarkImage.setAttribute('src', "./assets/img/icons/check.png");
    checkMarkImage.setAttribute('alt', "X");

    const inputCheckBox = document.createElement('input');
    inputCheckBox.setAttribute('type', "checkbox");
    inputCheckBox.checked = task.isDone;
    inputCheckBox.onchange = onChange;

    const labelElement = document.createElement('label');
    labelElement.classList.add('checkMarkContainer');
    labelElement.appendChild(inputCheckBox);
    labelElement.appendChild(checkMarkImage);

    return labelElement;
}


