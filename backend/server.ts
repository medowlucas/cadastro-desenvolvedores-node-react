import express, { Request, Response, NextFunction } from 'express';
import bodyParser from 'body-parser';
import developerRouter from './routes/developerRouter';
import levelRouter from './routes/levelRouter';
import sequelize from './config/sequelize'; 
import { popularTabelaLevels } from './config/level-migration';
import { popularTabelaDevelopers } from './config/developer-migration';

const app = express();
const PORT = process.env.PORT ?? 3000;
const cors = require('cors');

app.use(cors({ origin: 'http://localhost:8080' }));

// Middleware para analisar corpos de requisição JSON
app.use(bodyParser.json());

app.get('/', (req: Request, res: Response) => {
  res.send('API works!');
});
app.use('/api', developerRouter);
app.use('/api', levelRouter);

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
