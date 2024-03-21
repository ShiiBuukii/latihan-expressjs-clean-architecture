import { UserLoginDomain, UserRegisterDomain } from "../domains/userDomain";
import { User } from "../entities/userEntity";

export interface AuthInteractorInterface{
    login(input: any): Promise<UserLoginDomain | null>
    register(input: any): Promise<UserRegisterDomain>
}