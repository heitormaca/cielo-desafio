# Desafio Cielo


## Requisitos

- Nodejs v16.15.0 ou acima;
- Pnpm package manager;

## Configuração do Back-end

Esse backend foi desenvolvido para suportar o modulo de front

Durante a execução inicial o backend irá verificar os dados do `appsettings.json` e verificará se a propriedade `GenerateFakeData` for verdadeiro, caso seja a aplicação gerará 10.000 transações e as usará para retornar os dados, caso o valor seja falso ele irá carregar os dados do arquivo `data.json`.

> Os dados não são persistidos, ao iniciar a aplicação caso GenerateFakeData for positivo novos dados serão gerados

Para executar, além do código fonte também exisitirá 3 executáveis dentro de realises do repositório
- window
- macOS
- linux

Utilize os padrões do sistema operacional para executa-los e não se esqueça de dar permissão de execução, mesmo de desenvolvedores desconhecidos (estou olhando para você macOS)

Também existe um Dockerfile disponivel

> docker build . -t cielobackend

> docker run cielobackend -p 5000:80


## Configuração do Front

- Clone o projeto;
- Cria um arquivo .env na pasta raiz do seu projeto com o seguinte conteúdo: VITE_API='http://localhost:5000'
- Instale as dependências necessárias executando o comando: "pnpm install".
- Inicie o projeto, executando o comando "pnpm run dev". 
- Digite "http://localhost:3000" na barra de endereço do seu navegador.
