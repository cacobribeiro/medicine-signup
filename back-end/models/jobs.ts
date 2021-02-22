import { BuildOptions, DataTypes, Model, Sequelize } from 'sequelize'

export interface especialidadeAttributes {
    id: string;
    especialidade:string;
}

export interface UserModel extends Model<especialidadeAttributes>, especialidadeAttributes {}
export class User extends Model<UserModel, especialidadeAttributes> {}

export type UserStatic = typeof Model & {
    new (values?: object, options?: BuildOptions): UserModel;
};

export function allJobs (sequelize: Sequelize): UserStatic {
  return <UserStatic>sequelize.define('especialidades', {
    especialidade: DataTypes.STRING
  },
  {
    timestamps: false
  }
  )
}
