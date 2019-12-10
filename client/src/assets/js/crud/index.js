import {serverIP, serverPort, tasksPath, taskPath} from "../constants/rest_path/index.js";

export const getList = (fillList) => {
    const oReq = new XMLHttpRequest();
    oReq.addEventListener("load", function (){
        fillList(JSON.parse(this.responseText));
    });
    oReq.open("GET", `http://${serverIP}:${serverPort}${tasksPath}`);
    oReq.send();
};

export const createTask = (task, onCreate) => {
    const xhr = new XMLHttpRequest();

    const body = JSON.stringify(task);

    xhr.open("POST", `http://${serverIP}:${serverPort}${taskPath}`);
    xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.onload = function() {
        onCreate(JSON.parse(this.responseText));
    };

    xhr.send(body);
};

export const markTask = (id, currentIsDone, onUpdate) => {
    const xhr = new XMLHttpRequest();

    xhr.open("PUT", `http://${serverIP}:${serverPort}${taskPath}/${id}`);
    xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.onload = function() {
        onUpdate(JSON.parse(this.responseText));
    };

    xhr.send(JSON.stringify({isDone: !currentIsDone}));
};

export const deleteTask = (id, onDelete) => {
    const xhr = new XMLHttpRequest();
    xhr.open("DELETE", `http://${serverIP}:${serverPort}${taskPath}/${id}`);

    xhr.onload = function () {
        console.log(this.responseText);
        onDelete(this.responseText);
    };

    xhr.send();
};
