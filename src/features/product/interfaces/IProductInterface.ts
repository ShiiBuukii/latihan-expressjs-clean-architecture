import { Product } from "../entities/productEntity"

export interface IProductInterface{
    createProduct(input: any): Promise<Product>
    updateStock(id: number, stock: number): Promise<Product>
    getProducts(): Promise<Product[]>
    getProductDetail(id: number): Promise<Product>
}