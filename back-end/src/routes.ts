import { Router } from 'express'
import UserController from './controllers/registerControllers'
import JobsController from './controllers/jobsController'

const route = Router()

// Rota que traz todos os médicos cadastrados.
route.get('/', UserController.getAllDoctors)

// Rota que traz todos os médicos cadastrados.
route.get('/search', UserController.getADoctor)
route.post('/search', UserController.getADoctor)

// Rota que registra um novo médico.
route.post('/register', UserController.registerOnDoctor)

// Rota que atualiza um médico
route.put('/update/:id', UserController.updateADoctor)

// Rota que deleta um médico
route.delete('/delete/:id', UserController.deleteADoctor)

// Rota para enviar os cargos
route.get('/register', JobsController.getAllJobs)

export default route
