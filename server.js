const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(express.json()); 
app.use(cors()); 

// Configuração do banco de dados
const conexao = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'projeto'
});

// Teste de conexão com o banco
conexao.connect((erro) => {
    if (erro) {
        console.error('Erro ao conectar ao banco:', erro);
        return;
    }
    console.log('Conectado ao banco com sucesso!');
});

// Rota para receber dados do formulário
app.post('/enviar-dados', (req, res) => {
    const { nome, cpf, email, telefone } = req.body;

    const query = 'INSERT INTO usuarios (nome, cpf, email, telefone) VALUES (?, ?, ?, ?)';
    conexao.query(query, [nome, cpf, email, telefone], (erro, resultado) => {
        if (erro) {
            console.error('Erro ao inserir dados:', erro);
            res.status(500).json({ mensagem: 'Erro ao salvar os dados' });
            return;
        }
        res.json({ mensagem: 'Dados salvos com sucesso!' });
    });
});

// Iniciar o servidor
app.listen(8080, () => {
    console.log('Servidor rodando na porta 8080');
});
