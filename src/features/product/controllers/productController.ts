import { NextFunction, Request, Response } from "express";
import { ProductInteractor } from "../interactors/productInteractor";


export class ProductController {
    private interactor: ProductInteractor
    constructor(interactor: ProductInteractor){
        this.interactor = interactor
    }
    async onCreateProduct(req: Request, res: Response, next: NextFunction){
        try{
            const body = req.body

            const data = await this.interactor.createProduct(body)
            return res.status(201).json(data)
        }catch(error){
            next(error)
        }
    }
    async onGetProducts(req: Request, res:Response, next: NextFunction){
        try{
            const data = await this.interactor.getProducts()
            return res.status(200).json(data)
        }catch(error){
            next(error)
        }
    }
    async onGetProductDetail(req: Request, res: Response, next: NextFunction){
        try{
            
            const data = await this.interactor.getProductDetail(parseInt(req.params.id))
            res.status(200).json(data)
        }catch(error){
            next(error)
        }
    }
    async onUpdateStock(req: Request, res: Response, next: NextFunction){
        console.log(req.params)
        try{
            if(!req.body['stock']){
                res.status(400).json(
                    {
                        "error": "stock is required"
                    }
                )
            }

            const data = await this.interactor.updateStock(parseInt(req.params.id), parseInt(req.body['stock']))
            res.status(200).json(data)
            
        }catch(error){
            next(error)
        }

    }
}