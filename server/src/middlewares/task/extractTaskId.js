import appError from "../../utils/error";

export default function (req, res, next) {

	req.taskId = req.params.id || req.query.id || req.body.id;
	if( req.taskId ){
		return next();
	}
	next( new appError.BadRequestError());

}