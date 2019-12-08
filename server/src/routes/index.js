import express from "express";
import taskRouter from "./taskRouter";


const router = express.Router();
router.use(taskRouter);


export default router;
