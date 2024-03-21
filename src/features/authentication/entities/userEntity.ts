import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

export enum UserRole{
    ADMIN = "admin",
    STAFF = "staff",
    USER = "user",
}

@Entity()
export class User{

    @PrimaryGeneratedColumn()
    id: number = 0

    @Column({type:"varchar"})
    firstName!:string

    @Column({type:"varchar"})
    lastName!:string

    @Column({type:"varchar"})
    email!:string

    @Column({type: "text"})
    password!:string

    @Column({
        type: "enum",
        enum: UserRole,
        default: UserRole.USER
    })
    role!: UserRole
}