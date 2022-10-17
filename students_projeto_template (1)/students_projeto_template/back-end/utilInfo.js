//Passo a passo de como dockerizar uma aplicação:

//1) Primeiro cria-se um arquivo Dockerfile na raiz do projeto

//2) Na primeira linha do arquivo dockerfile definimos a base que queremos
// a nossa aplicação rode. Exemplo: FROM NODE (base node)

//3) Depois definimos um diretório dentro da imagem node que será gerada onde a
//nossa aplicação será armazenada (WORKDIR /usr/src/) e depois (COPY ...)

//4) Adicionamos o expose, isso é, em qual porta que queremos que a nossa aplicação
//rode

//    "start": "npm run prisma:deploy && node dist/src/server.js"


