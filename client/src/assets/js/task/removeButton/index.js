
export default function (onClick) {
    const removeImageElem = document.createElement('img');
    removeImageElem.setAttribute('src', "./assets/img/icons/delete-forever.png");
    removeImageElem.setAttribute('alt', 'delete');

    const removeTaskButtonElem = document.createElement('div');
    removeTaskButtonElem.classList.add('deleteTaskButton');
    removeTaskButtonElem.appendChild(removeImageElem);

    removeTaskButtonElem.onclick = onClick;

    return removeTaskButtonElem;
}