# cadastro-desenvolvedores-node-react
Criação de uma aplicação fullstack Node + React

# 1 - Estrutura Inicial do Projeto

Neste ponto do projeto, foi definida a estrutura inicial das pastas e arquivos que compõem a aplicação. Bem como configuração de variáveis do banco de dados no .env e a primeira versão do docker-compose.yml que vai ser gerado no futuro. A imagem a seguir ilustra essa estrutura:

![Estrutura Inicial](passos/estrutura-inicial.png)

# 2 - Configuração do Backend

Este capítulo detalha os passos para configurar o ambiente de backend do projeto utilizando Node.js e Express.

## Inicialização do Projeto Node.js
   ```bash
   cd backend
   npm init
   npm install express --save
   npm install sequelize sequelize-typescript pg @types/sequelize
   npm install express-validator
   npm install jest --save-dev
   npm install swagger-ui-express
  ```
## Configuração do TypeScript

O TypeScript é um superconjunto de JavaScript que adiciona tipagem estática e outros recursos úteis que podem melhorar a qualidade do código e a experiência de desenvolvimento. Abaixo estão os passos para adicionar o TypeScript ao seu projeto backend Node.js.

**TypeScript e Jest como uma dependência de desenvolvimento:**
   ```bash
   npm install --save-dev typescript
   npx tsc --init
   npm install --save-dev @types/express
   npm install --save-dev ts-node-dev
   npm install --save-dev jest ts-jest @types/jest
   npm install --save-dev jest supertest
   npm install cross-env --save-dev
   ```
Com isso, o nosso backend inicial está pronto para começar o desenvolvimento

![Estrutura Backend](passos/configurando-arquivos-back.png)
![Serviço](passos/subindo-servidor.png)

Dando seguimento, nessa etapa foi criado os models para desenvolvedores e níveis, bem como as rotas para os mesmos:

![Estrutura Backend 2](passos/criando-pastas-models-sequelize.png)

Também foi necessário configurar corretamente o Dockerfile e docker-compose.yml para validar o funcionamento:

![Docker no Backend](passos/dockercompose.png)

