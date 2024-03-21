import { Product } from "../entities/productEntity";
import { IProductRepositoryInterface } from "../interfaces/IProductRepositoryInterface";
import {  Repository } from "typeorm";

export class ProductRepository implements IProductRepositoryInterface{
    private productRepository: Repository<Product>;
    constructor(productRepository: Repository<Product>){
        this.productRepository = productRepository;
    }

    async create(data: Product): Promise<Product> {
        try{
            return  this.productRepository.save(data)

        }catch(error){
            console.log(error)
            throw new Error("repostiory exception")
        }
    }
    async update(id: number, stock: number): Promise<Product > {
        const product = await this.productRepository.findOneBy({id:id})
        if(!product){
            throw new Error("Product doesn't exists")
        }
        product.stock = stock
        return await this.productRepository.save(product)   
    }
    async find(id:number): Promise<Product > {

        const product = await this.productRepository.findOneBy({id:id})
        if(!product){
            throw new Error("Product doesn't exists")

        }
        return product

    }

    async getAll(): Promise<Product[]>{
        const product = await this.productRepository.find()
        console.log(product)
        return product
    }

}