import { Request, Response } from 'express';
import Developer from '../models/Developer'; // Importe o modelo Developer

class DeveloperController {
  public async getAllDevelopers(req: Request, res: Response): Promise<void> {
    try {
      const developers = await Developer.findAll(); // Supondo que você tenha um método findAll() no modelo Developer
      res.json(developers);
    } catch (error) {
      console.error('Erro ao obter desenvolvedores:', error);
      res.status(500).json({ message: 'Erro interno do servidor' });
    }
  }

  // Adicione outras funções para lidar com outras operações CRUD para desenvolvedores
}

export default new DeveloperController(); // Exporte uma instância do DeveloperController
