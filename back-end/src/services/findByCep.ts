import { XMLHttpRequest } from 'xmlhttprequest'
import { User } from '../../models'

interface BodyUser {
  name: string,
  CRM: string,
  fixFone: string,
  fone: string,
  cep: string,
  andress: string,
  numero: number,
  especialidade: string,
  especialidade2: string
}

const findByCep = async (body: BodyUser): Promise<void> => {
  const url = 'https://viacep.com.br/ws/04651-160/json/'
  const xhr = new XMLHttpRequest()
  xhr.open('GET', url)
  xhr.send()

  xhr.onload = async function () {
    const andress = JSON.parse(xhr.responseText)
    const result = { ...body, andress: andress.logradouro }
    await User.create(result)
  }
}

export default findByCep
