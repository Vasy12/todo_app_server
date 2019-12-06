import ApplicationError from "../utils/error/ApplicationError";

export default function (err, req, res, next) {
    if (err instanceof ApplicationError) {
        return res.status(err.status).send(
            {
                message: err.message,
                data: err.data,
            }
        )
    }

    res.status(400).send("bad request");
}