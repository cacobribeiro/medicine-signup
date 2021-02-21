import { Router } from 'express'
import UserController from './controllers/registerControllers'

const route = Router()

// Rota que traz todos os médicos cadastrados.
route.get('/', UserController.getAllDoctors)

// Rota que registra um novo médico.
route.post('/register', UserController.registerOnDoctor)

// Rota que atualiza um médico
route.put('/update', UserController.updateADoctor)

export default route