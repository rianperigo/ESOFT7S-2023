import { Router } from 'express'
import healthCheckController from './controller/healthCheckController'
import userController from './controller/userController'


const routes = Router()

routes.get('/health-check', healthCheckController.check)
routes.get('/users', userController.index)

export default routes