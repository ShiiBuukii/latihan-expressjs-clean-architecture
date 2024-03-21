export class UserLoginDomain{
    public readonly email: string
    public readonly token: string
    constructor(email: string, token: string){
        this.email = email
        this.token = token
    }
}

export class UserRegisterDomain{
    public readonly email: string
    constructor(email: string){
        this.email = email
    }
}