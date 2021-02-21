import { Request, Response } from 'express'

import RegisterValidation from '../yup/RegisterValidation'
// const { Op } = require('sequelize');
// const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
import { User } from '../../models'
// const findCep = require('../services/API_Correios');
// const concaAndress = require('../services/concaAndress');

class UserController {
  // Retorna todos os Medicos
  public async getAllDoctors (req : Request, res: Response): Promise<Response> {
    try {
      const allUsers = await User.findAll()
      return res.status(200).json({ allUsers })
    } catch (error) {
      console.log(error)
    }
  }

  // Cadastra um novo medico
  public async registerOnDoctor (req : Request, res: Response): Promise<Response> {
    try {
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
}

export default new UserController()
