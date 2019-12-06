import {Task} from '../db/models';
import appError from '../utils/error';

export function saveTask(req, res, next) {
    const {body: task} = req;

    Task.create(task)
        .then(newTask => {
            res.send(newTask);
        })
        .catch(err => {
            next(err);
        })

}


export async function getAllTasks(req, res, next) {
    try {
        const {limit, offset} = req.query;
        const tasks = await Task.findAll({});




        res.send(tasks);


    } catch (e) {
        next(e);
    }
}


export async function updateTaskById(req, res, next) {

    try {


    } catch (e) {
        next(e);
    }
}

export async function deleteTaskById(req, res, next) {
    try {


    } catch (e) {
        next(e);
    }
}

