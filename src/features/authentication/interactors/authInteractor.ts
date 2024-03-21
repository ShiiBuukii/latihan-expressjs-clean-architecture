import { JWT } from "../../../utils/jwt";
import { UserLoginDomain, UserRegisterDomain } from "../domains/userDomain";
import { User } from "../entities/userEntity";
import { AuthInteractorInterface } from "../interfaces/authInteractorInterface";
import bcrypt from "bcryptjs";
import { AuthRepositoryInterface } from "../interfaces/authRepositoryInterface";
import { LoginError } from "../../../core/errors/authError";

export class AuthInteractor implements AuthInteractorInterface{

    private repository: AuthRepositoryInterface
    private jwt: JWT
    constructor(repository: AuthRepositoryInterface, jwt: JWT){
        this.repository = repository
        this.jwt = jwt
    }


    async login(input: any): Promise<UserLoginDomain | null> {
        const user = await this.repository.login(input)
        if(!user){
            return null
        }
        
        if(user && bcrypt.compareSync(input.password, user.password)){
            const token = this.jwt.generate(user.id)
            return new UserLoginDomain(user.email, token)
        }else{
            throw new LoginError("Invalid password")
        }
        
    }
    async register(input: any): Promise<UserRegisterDomain> {
        const password = bcrypt.hashSync(input.password, 10)
        input.password = password
        const result = await this.repository.register(input)
        return new UserRegisterDomain(result.email)
    }

}