import Level, { LevelAttributes } from '../models/Level'; // Importe o modelo

async function popularTabelaLevels(): Promise<void> {
  try {
    // Populando a tabela com dados iniciais
    await Level.bulkCreate([
      { level: 'Trainee', createdAt: new Date(), updatedAt: new Date() },
      { level: 'Júnior', createdAt: new Date(), updatedAt: new Date() },
      { level: 'Pleno', createdAt: new Date(), updatedAt: new Date() },
      { level: 'Sênior', createdAt: new Date(), updatedAt: new Date() }
    ] as LevelAttributes[]);

    console.log('Dados populados com sucesso.');
  } catch (error) {
    console.error('Erro ao popular tabela de levels:', error);
  }
}

// Chame a função para popular a tabela de levels
export {popularTabelaLevels};
