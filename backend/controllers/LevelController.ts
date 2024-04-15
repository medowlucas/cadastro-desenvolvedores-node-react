import { Request, Response } from 'express';
import Level from '../models/Level';
import { Developer } from '../models';

class LevelController {
  public async getAllLevels(req: Request, res: Response): Promise<void> {
    try {
      const levels = await Level.findAll();
      if (!levels.length) {
        res.status(404).json({ message: 'Não foram encontrados níveis cadastrados' });
        return;
      }
      res.status(200).json(levels);
    } catch (error) {
      console.error('Erro ao obter os níveis:', error);
      res.status(500).json({ message: 'Erro interno do servidor' });
    }
  }

  public async getLevelById(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const level = await Level.findByPk(id);

      if (!level) {
        res.status(404).json({ message: 'Nível não encontrado' });
        return;
      }

      res.json(level);
    } catch (error) {
      console.error('Erro ao obter nível:', error);
      res.status(500).json({ message: 'Erro interno do servidor' });
    }
  }

  public async createLevel(req: Request, res: Response): Promise<void> {
    try {
      const level = await Level.create(req.body);
      res.status(201).json(level);
    } catch (error) {
      if (error instanceof Error) {
        console.error('Erro ao criar nível:', error);
        res.status(400).json({ message: error.message });
      } else {
        console.error('Erro desconhecido ao criar nível:', error);
        res.status(500).json({ message: 'Erro interno do servidor' });
      }
    }
  }

  public async updateLevel(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;

      if (!req.body.nivel) {
        res.status(400).json({ message: 'O corpo da requisição está incorreto' });
        return;
      }

      const level = await Level.findOne({ where: { id } });

      if (!level) {
        res.status(404).json({ message: 'Nível não encontrado' });
        return;
      }

      await Level.update(req.body, { where: { id } });
      const updatedLevel = await Level.findOne({ where: { id } });
      res.status(200).json(updatedLevel);
    } catch (error) {
      console.error('Erro ao atualizar nível:', error);
      res.status(500).json({ message: 'Erro interno do servidor' });
    }
  }

  public async patchLevel(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;

      if (!req.body.nivel) {
        res.status(400).json({ message: 'O corpo da requisição está incorreto' });
        return;
      }

      const level = await Level.findOne({ where: { id } });

      if (!level) {
        res.status(404).json({ message: 'Nível não encontrado' });
        return;
      }

      await Level.update(req.body, { where: { id } });
      const updatedLevel = await Level.findOne({ where: { id } });
      res.status(200).json(updatedLevel);
    } catch (error) {
      console.error('Erro ao atualizar parcialmente o nível:', error);
      res.status(500).json({ message: 'Erro interno do servidor' });
    }
  }

  public async deleteLevel(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const associatedDevelopers = await Developer.findAll({ where: { nivelId: id } });

      if (associatedDevelopers.length > 0) {
        res.status(400).json({ message: 'Não é possível excluir o nível. Existem desenvolvedores associados a ele.' });
        return;
      }

      const level = await Level.findOne({ where: { id } });

      if (!level) {
        res.status(404).json({ message: 'Nível não encontrado' });
        return;
      }

      await Level.destroy({ where: { id } });
      res.status(204).send();
    } catch (error) {
      console.error('Erro ao excluir nível:', error);
      res.status(500).json({ message: 'Erro interno do servidor' });
    }
  }
}

export default new LevelController;