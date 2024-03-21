import { Product } from "../entities/productEntity";
import { IProductInterface } from "../interfaces/IProductInterface";
import { IProductRepositoryInterface } from "../interfaces/IProductRepositoryInterface";
export class ProductInteractor implements IProductInterface{
    private repository: IProductRepositoryInterface;
    constructor(repository: IProductRepositoryInterface){
        this.repository = repository;
    }

    async createProduct(input: any): Promise<Product>  {
        console.log("productInteractor(createProduct) ", input)
        const product = await this.repository.create(input)
        return product
    }
    async updateStock(id: number, stock: number): Promise<Product> {
        return await this.repository.update(id, stock)
    }
    async getProducts(): Promise<Product[]>{
        return await this.repository.getAll()
    }

    async getProductDetail(id: number): Promise<Product>{
        return await this.repository.find(id)
    }
}