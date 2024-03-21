import { Product } from "../entities/productEntity";

export interface IProductRepositoryInterface{
    create(data: Product): Promise<Product>
    update(id: number, stock: number): Promise<Product>
    find(id:number): Promise<Product>
    getAll(): Promise<Product[]>
}