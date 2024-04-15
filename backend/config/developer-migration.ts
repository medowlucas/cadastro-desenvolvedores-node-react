import Developer, { DeveloperAttributes } from '../models/Developer'; // Importe o modelo

async function popularTabelaDevelopers(): Promise<void> {
  try {
    // Populando a tabela com dados iniciais
    await Developer.bulkCreate([
      { nome: 'Alice', sexo: 'F', datanascimento: new Date('1990-01-01'), idade: 34, hobby: 'Escalada', nivelId: 1, createdAt: new Date(), updatedAt: new Date()},
      { nome: 'Clotilde', sexo: 'F', datanascimento: new Date('1990-01-01'), idade: 34, hobby: 'Xadrez', nivelId: 2, createdAt: new Date(), updatedAt: new Date() },
      { nome: 'Jhon', sexo: 'M', datanascimento: new Date('1990-01-01'), idade: 34, hobby: 'Pescaria', nivelId: 3, createdAt: new Date(), updatedAt: new Date() },
      { nome: 'José', sexo: 'M', datanascimento: new Date('1990-01-01'), idade: 34, hobby: 'Leitura', nivelId: 4, createdAt: new Date(), updatedAt: new Date() },
    ] as DeveloperAttributes[]);

    console.log('Dados populados com sucesso.');
  } catch (error) {
    console.error('Erro ao popular tabela de desenvolvedores:', error);
  }
}

// Chame a função para popular a tabela de levels
export {popularTabelaDevelopers};
