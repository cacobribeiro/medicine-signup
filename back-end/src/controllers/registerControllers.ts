import { Request, Response } from 'express'
import { Op } from 'sequelize'

import RegisterValidation from '../yup/RegisterValidation'
import { User } from '../../models'

class UserController {
  // Retorna todos os Medicos
  public async getAllDoctors (req : Request, res: Response): Promise<Response> {
    const allUsers = await User.findAll()
    return res.status(200).json(allUsers)
  }

  // Busca o medico especifico
  public async getADoctor (req : Request, res: Response): Promise<Response> {
    try {
      const { searchType, search } = req.body
      console.log(req.body)
      const allUsers = await User.findAll({ where: { [searchType]: { [Op.substring]: search } } })
      return res.status(200).json(allUsers)
    } catch (error) {
      console.log(error)
    }
  }

  // Cadastra um novo medico
  public async registerOnDoctor (req : Request, res: Response): Promise<Response> {
    try {
      console.log('CHAMOU', req)
      await RegisterValidation({ ...req.body })
      const userStatus = await User.create({ ...req.body })
      return res.status(201).json(userStatus)
    } catch (error) {
      error.sql
        ? res.status(400).json({ message: 'CRM já cadastrado' })
        : res.status(400).json({ message: error.message })
    }
  }

  // Atualiza um medico pelo ID
  public async updateADoctor (req : Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params
      await User.update({ ...req.body }, { where: { id } })
      const refresh = await User.findOne({ where: { id } })
      return res.status(200).json(refresh)
    } catch (error) {
      error.sql
        ? res.status(400).json({ message: 'CRM já cadastrado' })
        : res.status(400).json({ message: error.message })
    }
  }

  public async deleteADoctor (req: Request, res : Response): Promise<Response> {
    const { id } = req.params
    await User.destroy({ where: { id } })
    return res.status(202).json({ messsage: 'Deleted' })
  }
}

export default new UserController()
