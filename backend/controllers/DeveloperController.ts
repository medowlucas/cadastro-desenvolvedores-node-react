import { Request, Response } from 'express';
import Developer from '../models/Developer';
import { calculateAge, isValidDate } from '../utils';
import { Level } from '../models';

class DeveloperController {
  public async getAllDevelopers(req: Request, res: Response): Promise<void> {
    try {
      const developers = await Developer.findAll({
        include: Level,
      });

      if (!developers.length) {
        res.status(404).json({ message: 'Não foram encontrados desenvolvedores cadastrados' });
        return;
      }

      res.json(developers);
    } catch (error) {
      console.error('Erro ao obter desenvolvedores:', error);
      res.status(500).json({ message: 'Erro interno do servidor' });
    }
  }

  public async getDeveloperById(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const developer = await Developer.findByPk(id, {
        include: Level,
      });

      if (!developer) {
        res.status(404).json({ message: 'Desenvolvedor não encontrado' });
        return;
      }

      res.json(developer);
    } catch (error) {
      console.error('Erro ao obter desenvolvedor:', error);
      res.status(500).json({ message: 'Erro interno do servidor' });
    }
  }

  public async createDeveloper(req: Request, res: Response): Promise<void> {
    try {
      const message = 'O corpo da requisição está incorreto';

      if (!req.body.nivelId || !req.body.nome || !req.body.sexo || !req.body.datanascimento || !req.body.hobby) {
        res.status(400).json({ message: message });
        return;
      }

      if (req.body.datanascimento && isValidDate(req.body.datanascimento)) {
        req.body.idade = calculateAge(req.body.datanascimento);
      } else {
        res.status(400).json({ message: message + ': data inválida' });
        return;
      }

      const developer = await Developer.create(req.body);
      res.status(201).json(developer);
    } catch (error) {
      if (error instanceof Error) {
        console.error('Erro ao inserir desenvolvedor:', error);
        res.status(400).json({ message: error.message });
      } else {
        console.error('Erro desconhecido ao inserir o desenvolvedor:', error);
        res.status(500).json({ message: 'Erro interno do servidor' });
      }
    }
  }

  public async updateDeveloper(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const message = 'O corpo da requisição está incorreto';

      if (!req.body.nivelId || !req.body.nome || !req.body.sexo || !req.body.datanascimento || !req.body.hobby) {
        res.status(400).json({ message: message });
        return;
      }

      if (req.body.datanascimento && isValidDate(req.body.datanascimento)) {
        req.body.idade = calculateAge(req.body.datanascimento);
      } else {
        res.status(400).json({ message: message + ': data inválida' });
        return;
      }

      const developer = await Developer.findOne({ where: { id } });

      if (!developer) {
        res.status(404).json({ message: 'Desenvolvedor não encontrado' });
        return;
      }

      await Developer.update(req.body, { where: { id } });
      const updatedDeveloper = await Developer.findOne({ where: { id } });
      res.status(200).json(updatedDeveloper);
    } catch (error) {
      console.error('Erro ao atualizar desenvolvedor:', error);
      res.status(500).json({ message: 'Erro interno do servidor' });
    }
  }

  public async patchDeveloper(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const message = 'O corpo da requisição está incorreto';

      if (!req.body.nivelId || !req.body.nome || !req.body.sexo || !req.body.datanascimento || !req.body.hobby) {
        res.status(400).json({ message: message });
        return;
      }

      if (req.body.datanascimento && isValidDate(req.body.datanascimento)) {
        req.body.idade = calculateAge(req.body.datanascimento);
      } else {
        res.status(400).json({ message: message + ': data inválida' });
        return;
      }

      const developer = await Developer.findOne({ where: { id } });

      if (!developer) {
        res.status(404).json({ message: 'Desenvolvedor não encontrado' });
        return;
      }

      await Developer.update(req.body, { where: { id } });
      const updatedDeveloper = await Developer.findOne({ where: { id } });
      res.status(200).json(updatedDeveloper);
    } catch (error) {
      console.error('Erro ao atualizar parcialmente desenvolvedor:', error);
      res.status(500).json({ message: 'Erro interno do servidor' });
    }
  }

  public async deleteDeveloper(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const developer = await Developer.findOne({ where: { id } });

      if (!developer) {
        res.status(404).json({ message: 'Desenvolvedor não encontrado' });
        return;
      }

      await Developer.destroy({ where: { id } });
      res.status(204).send();
    } catch (error) {
      if (error instanceof Error) {
        console.error('Erro ao excluir desenvolvedor:', error);
        res.status(400).json({ message: error.message });
      } else {
        console.error('Erro ao excluir desenvolvedor:', error);
        res.status(500).json({ message: 'Erro interno do servidor' });
      }
    }
  }
}

export default new DeveloperController();
