# Projeto Desenvolvimento Web - Bimestre 2

## Instalação e Execução

Siga os passos abaixo para rodar o projeto localmente:

---

## 🧪 Ambiente Local (Node.js direto)

1. Clonar o repositório:

   ```sh
   git clone https://github.com/luan-tavares/unifaat-2026-dw-project
   ```

2. Entrar na pasta do projeto:

   ```sh
   cd unifaat-2026-dw-project
   ```

3. Instalar as dependências:

   ```sh
   npm install
   ```

5. Iniciar o servidor:

   ```sh
   node _web.js
   ```

6. (Opcional) Instalar o `nodemon` globalmente e iniciar o servidor com ele:

   ```sh
   npm install -g nodemon
   nodemon _web.js
   ```

   Ou instalar localmente e executar direto do `.bin`:

   ```sh
   npm install --save-dev nodemon
   ./node_modules/.bin/nodemon _web.js
   ```

O servidor estará disponível em: [http://localhost:3000](http://localhost:3000)

---

## 🧭 Estrutura do Projeto

O projeto está organizado nas seguintes pastas principais:

- `app/`
  - Contém as regras de negócio da aplicação.
  - Em `app/Controllers/` estão os arquivos que tratam as rotas e retornam o conteúdo ao usuário, como `ListFilesController.js` e `GetFileController.js`.
- `bootstrap/`
  - Guarda a inicialização e as configurações base do app.
  - `app.js` contém a função de bootstrap da aplicação e `config.js` define constantes usadas em todo o projeto.
- `public/`
  - Pasta de arquivos estáticos servidos pelo servidor.
  - Inclui recursos acessíveis diretamente pelo navegador, como `404.html`.
- `routes/`
  - Contém o roteador principal da aplicação.
  - `router.js` define as rotas HTTP, registra o middleware estático e trata o fallback para 404.
- `storage/`
  - Utilizada para armazenar dados ou arquivos de exemplo do servidor.
  - `arquivo.txt` é lido pela rota `/arquivo` e enviado como resposta.
- `node_modules/`
  - Pasta gerada pelo `npm install` com todas as dependências do projeto.
  - Não deve ser commitada no Git.
