import { BuildOptions, DataTypes, Model, Sequelize } from 'sequelize'

export interface UserAttributes {
    id?: number;
    name: string;
    CRM: string;
    fixFone: string;
    fone: string;
    cep:string;
    andress:string;
    especialidade:string;
    especialidade2:string;
}

export interface UserModel extends Model<UserAttributes>, UserAttributes {}
export class User extends Model<UserModel, UserAttributes> {}

export type UserStatic = typeof Model & {
    new (values?: object, options?: BuildOptions): UserModel;
};

export function Register (sequelize: Sequelize): UserStatic {
  return <UserStatic>sequelize.define('Doctors', {
    name: {
      type: DataTypes.STRING,
      validate: {
        len: [0, 120]
      }
    },
    CRM: {
      type: DataTypes.STRING,
      unique: true,
      validate: {
        len: [9, 9]
      }
    },
    fixFone: {
      type: DataTypes.STRING,
      validate: {
        len: [13, 13]
      }
    },
    fone: {
      type: DataTypes.STRING,
      validate: {
        len: [14, 14]
      }
    },
    cep: {
      type: DataTypes.STRING,
      validate: {
        len: [9, 9]
      }
    },
    andress: {
      type: DataTypes.STRING
    },
    especialidade: {
      type: DataTypes.STRING,
      validate: {
        isIn: {
          args: [
            [
              'ALERGOLOGIA',
              'ANGIOLOGIA',
              'BUCO MAXILO',
              'CARDIOLOGIA CLÍNICA',
              'CARDIOLOGIA INFANTIL',
              'CIRURGIA CABEÇA E PESCOÇO',
              'CIRURGIA CARDÍACA',
              'CIRURGIA DE TÓRAX'
            ]
          ],
          msg: 'Especialidade desconhecida.'
        }
      }
    },
    especialidade2: {
      type: DataTypes.STRING,
      validate: {
        isIn: {
          args: [
            [
              'ALERGOLOGIA',
              'ANGIOLOGIA',
              'BUCO MAXILO',
              'CARDIOLOGIA CLÍNICA',
              'CARDIOLOGIA INFANTIL',
              'CIRURGIA CABEÇA E PESCOÇO',
              'CIRURGIA CARDÍACA',
              'CIRURGIA DE TÓRAX'
            ]
          ],
          msg: 'Especialidade desconhecida.'
        }
      }
    }
  },
  {
    timestamps: false
  }
  )
}
