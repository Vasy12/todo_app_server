import {host, serverPort, taskPath, tasksPath} from "../constants/rest_path/index.js";

export const getList = async () => {
    const response = await fetch(`http://${host}:${serverPort}${tasksPath}`);
    const tasks = await response.json();
    console.table(tasks);
    return tasks;
};

export const createTask = async (task) => {
    const data = await fetch(`http://${host}:${serverPort}${taskPath}`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json;charset=utf-8'},
        body: JSON.stringify(task)
    });
    return await data.json();
};

export const markTask = async (id, currentIsDone) => {
    const data = await fetch(`http://${host}:${serverPort}${taskPath}/${id}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json;charset=utf-8'},
        body: JSON.stringify({isDone: !currentIsDone})
    });
    return await data.json();
};

export const deleteTask = async (id) => {
    const data = await fetch(`http://${host}:${serverPort}${taskPath}/${id}`, {
        method: 'DELETE',
    });
    return await data.json();
};