import Level, { LevelAttributes } from '../models/Level'; // Importe o modelo

async function popularTabelaLevels(): Promise<void> {
  try {
    // Populando a tabela com dados iniciais
    await Level.bulkCreate([
      { nivel: 'Trainee', createdAt: new Date(), updatedAt: new Date() },
      { nivel: 'Júnior', createdAt: new Date(), updatedAt: new Date() },
      { nivel: 'Pleno', createdAt: new Date(), updatedAt: new Date() },
      { nivel: 'Sênior', createdAt: new Date(), updatedAt: new Date() }
    ] as LevelAttributes[]);

    console.log('Dados populados com sucesso.');
  } catch (error) {
    console.error('Erro ao popular tabela de níveis:', error);
  }
}

// Chame a função para popular a tabela de levels
export {popularTabelaLevels};
