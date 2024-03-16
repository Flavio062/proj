const fs = require('fs');

function salvarDados() {
  const input1 = document.getElementById('input1').value;
  const input2 = document.getElementById('input2').value;
  
  // Salva os dados em um arquivo chamado 'dados.txt'
  fs.writeFile('dados.txt', `${input1}\n${input2}`, function (err) {
    if (err) throw err;
    console.log('Dados salvos com sucesso!');
    window.location.href = 'google.com'; // Redireciona para outro link
  });
}