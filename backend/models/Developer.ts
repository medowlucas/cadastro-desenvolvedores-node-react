import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/sequelize';

interface DeveloperAttributes {
  id?: number;
  nome: string;
  sexo: string;
  datanascimento: Date;
  idade: number;
  hobby?: string;
  nivelId: number;
  createdAt?: Date;
  updatedAt?: Date;
}

class Developer extends Model<DeveloperAttributes> {
  public id!: number;
  public nome!: string;
  public sexo!: string;
  public datanascimento!: Date;
  public idade!: number;
  public hobby?: string;
  public nivelId!: number;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  // Método para buscar todos os desenvolvedores
  static async getAllDevelopers(): Promise<Developer[]> {
    return await Developer.findAll();
  }
}

Developer.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'O campo "nome" não pode ser vazio'
        }
      }
    },
    sexo: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'O campo "sexo" não pode ser vazio'
        }
      }
    },
    datanascimento: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'O campo "datanascimento" não pode ser vazio'
        }
      }
    },
    idade: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    hobby: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        notEmpty: {
          msg: 'O campo "hobby" não pode ser vazio'
        }
      }
    },
    nivelId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Levels',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      validate: {
        notEmpty: {
          msg: 'O campo "nivelId" não pode ser vazio'
        }
      }
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
    },
  },
  {
    sequelize,
    modelName: 'Developer',
    tableName: 'Developers',
    timestamps: true,
  }
);

export default Developer;
export { DeveloperAttributes };
