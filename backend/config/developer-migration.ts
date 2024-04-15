import Developer, { DeveloperAttributes } from '../models/Developer'; // Importe o modelo

async function popularTabelaDevelopers(): Promise<void> {
  try {
    // Populando a tabela com dados iniciais
    await Developer.bulkCreate([
      { name: 'Alice', sex: 'F', birthdate: new Date('1990-01-01'), age: 30, hobby: 'Escalada', levelId: 1, createdAt: new Date(), updatedAt: new Date()},
      { name: 'Clotilde', sex: 'F', birthdate: new Date('1985-05-15'), age: 25, hobby: 'Xadrez', levelId: 2, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Jhon', sex: 'M', birthdate: new Date('1985-05-15'), age: 45, hobby: 'Pescaria', levelId: 3, createdAt: new Date(), updatedAt: new Date() },
      { name: 'José', sex: 'M', birthdate: new Date('1985-05-15'), age: 32, hobby: 'Leitura', levelId: 4, createdAt: new Date(), updatedAt: new Date() },
    ] as DeveloperAttributes[]);

    console.log('Dados populados com sucesso.');
  } catch (error) {
    console.error('Erro ao popular tabela de levels:', error);
  }
}

// Chame a função para popular a tabela de levels
export {popularTabelaDevelopers};
