import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/sequelize';

interface LevelAttributes {
  id?: number;
  nivel: string;
  createdAt?: Date;
  updatedAt?: Date;
}

class Level extends Model<LevelAttributes> {
  public id!: number;
  public nivel!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  static async getAllLevels(): Promise<Level[]> {
    return await Level.findAll();
  }
}

Level.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nivel: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'O campo "nivel" não pode ser vazio'
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
    modelName: 'Level',
    tableName: 'Levels',
  }
);

export default Level;
export { LevelAttributes };
