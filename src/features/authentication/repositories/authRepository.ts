import { Repository } from "typeorm";
import { User } from "../entities/userEntity";
import { AuthRepositoryInterface } from "../interfaces/authRepositoryInterface";
import { RegisterError } from "../../../core/errors/authError";

export class AuthRepository implements AuthRepositoryInterface{
    private appDataSource:  Repository<User>
    constructor(appDataSource: Repository<User>){
        this.appDataSource = appDataSource
    }
    async login(user: User): Promise<User | null> {
        return await this.appDataSource.findOneBy({email: user.email})
    }
    async register(user: User): Promise<User> {

        if(!await this.appDataSource.findOneBy({email: user.email})){
            return await this.appDataSource.save(user)
        }
        throw new RegisterError("User Already Exists")
    }
}