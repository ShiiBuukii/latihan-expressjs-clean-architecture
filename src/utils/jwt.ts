    import dotenv from "dotenv"
import { NextFunction , Request, Response} from "express"
import jwt, { JsonWebTokenError } from "jsonwebtoken"
import { MiddlewareError, TokenError } from "../core/errors/middlewareError"

export class JWT{
    constructor(){
        dotenv.config()
    }

    generate(id: number): string{
        return jwt.sign({id: id}, `${process.env.JWT_SECRET}`, {expiresIn:process.env.JWT_EXPIRES})
    }

    verify(token: string){

        jwt.verify(token, `${process.env.JWT_SECRET}`, (err,user)=>{
            if(err) throw err
        })
    }

}