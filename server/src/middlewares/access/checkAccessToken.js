import jwt from 'jsonwebtoken';

export default function (req, res, next) {

    try{
        const {accessToken} = req.headers.authorization;


    }catch (e) {
        next(e)
    }

}
