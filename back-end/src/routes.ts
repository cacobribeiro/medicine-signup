import { Router } from 'express'
import UserController from './controllers/registerControllers'

const route = Router()

// Rota que traz todos os médicos cadastrados.
route.get('/', UserController.getAllDoctors)

// Rota que registra um novo médico.
route.post('/register', UserController.registerOnDoctor)

// Rota que atualiza um médico
route.put('/update/:id', UserController.updateADoctor)

// Rota que deleta um médico
route.delete('/delete/:id', UserController.deleteADoctor)

export default route
