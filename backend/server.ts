import express, { Request, Response } from 'express';

const app = express();
const port = 3000;

// Rota GET para a raiz
app.get('/', (req: Request, res: Response) => {
  res.send('Hello Gazin Tech!');
});

// Inicia o servidor na porta especificada
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
