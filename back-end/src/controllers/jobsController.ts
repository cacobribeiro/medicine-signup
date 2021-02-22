import { Request, Response } from 'express'

import { Jobs } from '../../models'

class JobsController {
  // Retorna todos os Jobs para cadastro
  public async getAllJobs (req : Request, res: Response): Promise<Response> {
    const allJobs = await Jobs.findAll()
    return res.status(200).json(allJobs)
  }
}

export default new JobsController()
