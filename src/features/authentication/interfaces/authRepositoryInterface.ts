import { User } from "../entities/userEntity";

export interface AuthRepositoryInterface{
    login(user: User): Promise<User | null>
    register(user: User): Promise<User>
}