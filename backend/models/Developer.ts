import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/sequelize';

interface DeveloperAttributes {
  id?: number;
  name: string;
  sex: string;
  birthdate: Date;
  age: number;
  hobby?: string;
  levelId: number;
  createdAt?: Date;
  updatedAt?: Date;
}

class Developer extends Model<DeveloperAttributes> {
  public id!: number;
  public name!: string;
  public sex!: string;
  public birthdate!: Date;
  public age!: number;
  public hobby?: string;
  public levelId!: number;
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
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    sex: {
      type: DataTypes.CHAR(1),
      allowNull: false,
    },
    birthdate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    hobby: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    levelId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Levels',
        key: 'id',
      },
      onUpdate: 'CASCADE',
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
