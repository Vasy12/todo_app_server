import * as TaskSchema from "../../utils/schema/TaskSchema";

export async function onCreateValidation(req, res, next) {


	try {
		await TaskSchema.createSchema.validateAsync(req.body);

		next();
	}catch (e) {

		next(e)
	}
	
}


export async function onUpdateValidation(req, res, next) {


	try {
		await TaskSchema.updateSchema.validateAsync(req.body);

		next();
	}catch (e) {

		next(e)
	}

}
