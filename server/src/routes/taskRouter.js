import express from "express";
import * as taskController from "../controllers/taskController";
import extractTaskId from "../middlewares/task/extractTaskId";
import * as validateTask from "../middlewares/task/validateTask";


const taskRouter = express.Router();

taskRouter.post("/task",
    validateTask.onCreateValidation,
    taskController.saveTask
);
taskRouter.get("/tasks", taskController.getAllTasks);
taskRouter.get("/task/:id",extractTaskId, taskController.getTaskById);
taskRouter.put("/task/:id", extractTaskId, validateTask.onUpdateValidation,  taskController.updateTaskById);
taskRouter.delete("/task/:id", extractTaskId, taskController.deleteTaskById);

export default taskRouter;
