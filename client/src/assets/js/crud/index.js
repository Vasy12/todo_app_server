import {serverIP, serverPort, tasksPath, taskPath} from "../constants/rest_path/index.js";


export const getList = async () => {
    const response = await fetch(`http://${serverIP}:${serverPort}${tasksPath}`);
    return response.json();
};

export const createTask = async (task) => {
    const response = await fetch(`http://${serverIP}:${serverPort}${taskPath}`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json',},
        body: JSON.stringify(task),
    });
    return response.json();
};

export const updateTask = async (id, isDone) => {
    const response = await fetch(`http://${serverIP}:${serverPort}${taskPath}/${id}`, {
        method: "PUT",
        headers: {'Content-Type': 'application/json',},
        body: JSON.stringify({isDone: !isDone}),
    });
    return response.json();
};

export const deleteTask = async (id) => {
    const response = await fetch(`http://${serverIP}:${serverPort}${taskPath}/${id}`, {
        method: 'DELETE',
    });
    return response.json();
};