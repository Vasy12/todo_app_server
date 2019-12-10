import {serverIP, serverPort, tasksPath, taskPath} from "../constants/rest_path/index.js";

export const getList = () => {
    return fetch(`http://${serverIP}:${serverPort}${tasksPath}`)
        .then(data => data.json())
};

export const createTask = (task) => {
    return fetch(`http://${serverIP}:${serverPort}${taskPath}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(task)
    }).then(data => data.json())
};

export const markTask = (id, currentIsDone) => {
    return fetch(`http://${serverIP}:${serverPort}${taskPath}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({isDone: !currentIsDone})
    }).then(data => data.json());
};

export const deleteTask = (id) => {
    return fetch(`http://${serverIP}:${serverPort}${taskPath}/${id}`, {
        method: 'DELETE',
    }).then(data => data.json());
};
