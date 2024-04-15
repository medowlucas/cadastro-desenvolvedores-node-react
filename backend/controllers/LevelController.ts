import { Request, Response } from 'express';
import Level from '../models/Level';

class LevelController {
  static async getAllLevels(req: Request, res: Response) {
    try {
      const levels = await Level.getAllLevels();
      res.json(levels);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Erro ao buscar os níveis.' });
    }
  }
}

export default LevelController;