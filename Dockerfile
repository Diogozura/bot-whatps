# Usa Node.js oficial como base
FROM node:22

# Cria o diretório de trabalho
WORKDIR /app

# Copia os arquivos do projeto
COPY . .

# Instala dependências
RUN npm install

# Expõe a porta 3000 (pode ajustar se necessário)
EXPOSE 3000

# Roda o bot.js ao iniciar
CMD ["node", "bot.js"]
