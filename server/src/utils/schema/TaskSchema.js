import Joi from "@hapi/joi";
import {TASK_VALUE} from "../../constants/patterns";


export const createSchema = Joi.object({
	isDone: Joi.boolean().optional(),
	value: Joi.string()
		.pattern(TASK_VALUE)
		.required()
});


export const updateSchema = Joi.object({
	isDone: Joi.boolean().optional(),
	value: Joi.string()
		.pattern(TASK_VALUE)
		.optional()
});

