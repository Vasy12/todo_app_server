import express from "express";
import taskRouter from "./taskRouter";
import authorizationRouter from "./authorizationRouter";

const router = express.Router();

router.use(taskRouter);
router.use(authorizationRouter);


export default router;
