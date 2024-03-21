import { NextFunction , Response, Request} from "express";
import { AuthInteractor } from "../interactors/authInteractor";
import { LoginError, RegisterError } from "../../../core/errors/authError";

export class AuthController{

    private interactor: AuthInteractor
    constructor(interactor: AuthInteractor){
        this.interactor = interactor
    }

    async onLogin(req: Request, res: Response, next: NextFunction){
        try{
           const user = await this.interactor.login(req.body)
           if(!user){
            res.status(404).json({"error":"User not found"})
           }
           res.status(200).json(user)
        }catch(error){
            if(error instanceof LoginError){
                res.status(401).json({"error":error.message})
            }
        }
    }

    async onRegister(req: Request, res: Response, next: NextFunction){
        try{
            const result = await this.interactor.register(req.body)
            res.status(201).json(result)
        }catch(error){
            if(error instanceof RegisterError){
                res.status(401).json({"error":error.message})
            }
        }
    }
}