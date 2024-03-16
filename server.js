const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/enviar', (req, res) => {
  const info1 = req.body.info1;
  const info2 = req.body.info2;

  const data = `Informação 1: ${info1}\nInformação 2: ${info2}\n`;

  fs.appendFile('informacoes.txt', data, (err) => {
    if (err) throw err;
    console.log('Informações salvas com sucesso!');
  });

  res.redirect('/');
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});