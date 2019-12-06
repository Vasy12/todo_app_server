import express from 'express';
import * as taskController from '../controllers/taskController';

const taskRouter = express.Router();

taskRouter.post("/task", taskController.saveTask);
taskRouter.get("/tasks", taskController.getAllTasks);
taskRouter.put("/task", taskController.updateTaskById);
taskRouter.delete("/task", taskController.deleteTaskById);

export default taskController;
