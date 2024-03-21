export class MiddlewareError extends Error{
    constructor(message:string){
        super(message)
    }
}

export class TokenError extends Error{
    constructor(message: string){
        super(message)
    }
}