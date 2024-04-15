import express, { Request, Response, NextFunction } from 'express';
import bodyParser from 'body-parser';
import developerRouter from './routes/developerRouter'; // Importe o router para desenvolvedores
import levelRouter from './routes/levelRouter'; // Importe o router para níveis
import sequelize from './config/sequelize'; // Importe a instância do Sequelize
import Developer from './models/Developer'; // Importe o modelo Developer
import Level from './models/Level'; // Importe o modelo Level
import { popularTabelaLevels } from './config/level-migration'; // Importa a função de população
import { popularTabelaDevelopers } from './config/developer-migration';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para analisar corpos de requisição JSON
app.use(bodyParser.json());

// Rota raiz
app.get('/', (req: Request, res: Response) => {
  res.send('API works!');
});

// Rota para desenvolvedores
app.use('/developers', developerRouter);

// Rota para níveis
app.use('/levels', levelRouter);

// Middleware para tratar erros de rota não encontrada
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).send('Rota não encontrada');
});

// Middleware para tratar erros internos do servidor
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).send('Erro interno do servidor');
});

async function startServer() {
  try {
    await sequelize.sync();
    popularTabelaLevels();
    popularTabelaDevelopers();

    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
    });
  } catch (error) {
    console.error('Erro ao iniciar o servidor:', error);
  }
}

startServer();
