import {Task} from "../db/models";
import appError from "../utils/error";

export async function saveTask(req, res, next) {
	const {body: task} = req;

	try {

		const newTask = await Task.create(task);

		if (newTask) {
			return res.status(201).send(newTask);
		}

		next(new appError.BadRequestError());

	} catch (e) {
		res.send(e);
	}

}


export async function getAllTasks(req, res, next) {
	try {

		const tasks = await Task.findAll({
			order: [['createdAt','DESC']]
		});

		res.send(tasks);


	} catch (e) {
		next(e);
	}
}


export async function updateTaskById(req, res, next) {

	try {
		const {body: newValue, taskId} = req;
		const task = await Task.findByPk(taskId);
		const result = await task.update(newValue);
		res.send(result);
	} catch (e) {
		next(e);
	}
}

export async function deleteTaskById(req, res, next) {
	const {taskId} = req;
	try {

		const task = await Task.findByPk(taskId);
		if (task) {
			await task.destroy();
			res.send(true);
			return;
		}
		next(new appError.ResourceNotFoundError());
	} catch (e) {
		next(e);
	}
}

export async function deleteTasks(req, res, next) {

	try {

	} catch (e) {
		next(e);
	}

}
