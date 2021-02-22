import * as yup from 'yup'
import type { Asserts } from 'yup'

const schema = yup.object({
  name: yup.string().required().max(120),
  CRM: yup
    .string()
    .matches(/^\d{2}.\d{3}.\d{2}/, 'CRM não está no formato correto!')
    .max(9, 'CRM não está no formato correto!')
    .required(),
  fixFone: yup
    .string()
    .matches(/^\([0-9]{2}\)[0-9]{4}-[0-9]{4}$/, 'Telefone não está no formato correto!')
    .required()
    .max(13),
  fone: yup
    .string()
    .matches(/^\([0-9]{2}\)[0-9]{5}-[0-9]{4}$/, 'Celular não está no formato correto!')
    .required()
    .max(14),
  cep: yup
    .string()
    .matches(/^\d{5}-\d{3}$/, 'CEP não está no formato correto!')
    .required()
    .max(9),
  andress: yup.string(),
  especialidade: yup.string().required(),
  especialidade2: yup.string().required()

})

type Person = Asserts<typeof schema>

async function RegisterValidation (newUser: Person) : Promise<Person> {
  console.log('VALID')

  return schema.validateSync(newUser)
}

export default RegisterValidation
