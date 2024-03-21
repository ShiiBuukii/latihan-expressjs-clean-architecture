    import dotenv from "dotenv"
import { NextFunction , Request, Response} from "express"
import jwt, { JsonWebTokenError } from "jsonwebtoken"

export class JWT{
    constructor(){
        dotenv.config()
    }

    generate(id: number): string{
        return jwt.sign({id: id}, `${process.env.JWT_SECRET}`, {expiresIn:process.env.JWT_EXPIRES})
    }

    verify(req: Request, res: Response, next: NextFunction){
        try{
            const authHeader = req.headers['authorization']
            const token = authHeader && authHeader.split(' ')[1].replace(' ', '')

            console.log("token: ", token)

            if(token ==null) {
                return res.status(401)

            }

            jwt.verify(token, `${process.env.JWT_SECRET}`, (err,user)=>{
                if(err) return res.status(403)
            })
        next()
        }catch(error){
            console.log(error)
            throw error
            
        }
    }

}