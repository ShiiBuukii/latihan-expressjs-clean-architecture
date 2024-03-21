import express from 'express'
import { AuthController } from '../controllers/authController';
import { AuthInteractor } from '../interactors/authInteractor';
import { AuthRepository } from '../repositories/authRepository';
import { AppDataSource } from '../../../configs/data-source';
import { User } from '../entities/userEntity';
import { JWT } from '../../../utils/jwt';

const authRoute = express.Router()


const appDataSource = AppDataSource.getRepository(User)
const repository = new AuthRepository(appDataSource)
const jwt = new JWT()
const interactor = new AuthInteractor(repository,jwt)
const authController = new AuthController(interactor)

authRoute.post("/login", authController.onLogin.bind(authController))
authRoute.post("/register", authController.onRegister.bind(authController))

export default authRoute;