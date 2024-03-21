import express from 'express'
import { ProductController } from '../controllers/productController'
import { ProductRepository } from '../repositories/productRepository';
import { ProductInteractor } from '../interactors/productInteractor';
import { AppDataSource } from '../../../configs/data-source';
import { Product } from '../entities/productEntity';
import { productMiddleware } from '../../../core/middlewares/productMiddleware';

const productRoute = express.Router()

const appDataSource =  AppDataSource.getRepository(Product)

const repository = new ProductRepository(appDataSource)
const interactor = new ProductInteractor(repository)

const controller = new ProductController(interactor);

productRoute.get("/products", productMiddleware, controller.onGetProducts.bind(controller));
productRoute.get("/products/:id",productMiddleware, controller.onGetProductDetail.bind(controller));
productRoute.post("/create",productMiddleware, controller.onCreateProduct.bind(controller));
productRoute.patch("/products/:id", productMiddleware,controller.onUpdateStock.bind(controller));

export default productRoute;