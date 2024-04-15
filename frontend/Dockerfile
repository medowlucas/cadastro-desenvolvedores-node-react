FROM node:20.12.2

# Defina o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copie apenas o arquivo package.json
COPY package.json /app/

# Instale as dependências
RUN npm install

# Copie o restante do código-fonte
COPY . /app/

ENV PORT=8080

# Construa o aplicativo React
RUN npm run build

# Exponha a porta 8080 para que possa ser acessada
EXPOSE 8080

# Comando para iniciar o servidor de desenvolvimento do create-react-app
CMD ["npm", "start"]
