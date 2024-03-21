import { NextFunction, Request, Response } from "express";
import { JWT } from "../../utils/jwt";
import { MiddlewareError, TokenError } from "../errors/middlewareError";
import { JsonWebTokenError, TokenExpiredError } from "jsonwebtoken";
export const productMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers['authorization']
    var token = authHeader && authHeader.split(' ')[1].replace(' ', '')

    console.log("token: ", token)

    if(!authHeader){
         return res.status(401).json({"error":"Authorization is required"})
    }
    if(!token){
        return res.status(401).json({"error":"Token is required"})
    }


    const jwt = new JWT()
    try{
        jwt.verify(token!)
    }catch(error){
        if(error instanceof TokenExpiredError){
            return res.status(401).json({"error":error.message})
        }else if(error instanceof JsonWebTokenError){
            return res.status(401).json({"error":error.message})
        }else{
            res.status(500).json({"error":"Internal Error"})
        }
    }
    next()
}