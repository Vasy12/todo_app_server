import {serverIP, serverPort, tasksPath, taskPath} from "../constants/rest_path/index.js";


export const getList = (fillList) => {
    const request = new XMLHttpRequest();
    request.open('GET', `http://${serverIP}:${serverPort}${tasksPath}`);

    request.onload = function () {
        const data = JSON.parse(this.responseText);
        fillList(data)
    };

    request.send();
};

export const createTask = (task, onCreate) => {
    const request = new XMLHttpRequest();

    request.open('POST', `http://${serverIP}:${serverPort}${taskPath}`);
    request.setRequestHeader("Content-type", "application/json");

    request.onload = function () {
        const data = JSON.parse(this.responseText);
        onCreate(data);
    };

    const body = JSON.stringify(task);

    request.send(body);
};

export const updateTask = (id, isDone, onUpdate) => {
    const request = new XMLHttpRequest();

    request.open('PUT', `http://${serverIP}:${serverPort}${taskPath}/${id}`);
    request.setRequestHeader("Content-type", "application/json");

    request.onload = function () {
        const data = JSON.parse(this.responseText);
        onUpdate(data);
    };

    const body = JSON.stringify({isDone: !isDone});

    request.send(body);
};

export const deleteTask = (id, onDelete) => {
    const request = new XMLHttpRequest();

    request.open('DELETE', `http://${serverIP}:${serverPort}${taskPath}/${id}`);

    request.onload = function () {
        const data = JSON.parse(this.responseText);
        onDelete(data);
    };

    request.send();
};