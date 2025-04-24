const express = require('express');
const app = express();
const port = 3000;

// Rota 1 - Página inicial
app.get('/', (req, res) => {
  res.send(`
    <html>
      <head><title>Home</title></head>
      <body>
        <h1>Bem-vindo à Página Inicial!</h1>
        <p>Esta é a rota principal da aplicação.</p>
        <a href="/sobre">Ir para Sobre</a> |
        <a href="/contato">Ir para Contato</a>
      </body>
    </html>
  `);
});

// Rota 2 - Sobre
app.get('/sobre', (req, res) => {
  res.send(`
    <html>
      <head><title>Sobre</title></head>
      <body>
        <h1>Sobre Nós</h1>
        <p>Esta página contém informações sobre a aplicação.</p>
        <a href="/">Voltar para Home</a> |
        <a href="/contato">Ir para Contato</a>
      </body>
    </html>
  `);
});

// Rota 3 - Contato
app.get('/contato', (req, res) => {
  res.send(`
    <html>
      <head><title>Contato</title></head>
      <body>
        <h1>Fale Conosco</h1>
        <p>Entre em contato pelo e-mail: contato@exemplo.com</p>
        <a href="/">Voltar para Home</a> |
        <a href="/sobre">Ir para Sobre</a>
      </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
