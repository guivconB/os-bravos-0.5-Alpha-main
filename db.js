const mysql = require('mysql2'); // Importando corretamente a biblioteca

const connection = mysql.createConnection({
    host: 'localhost', // Ou o IP do seu servidor MySQL
    user: 'root', // Correção do nome do usuário
    password: '1234',
    database: 'projeto' 
});

connection.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao MySQL:', err);
        return;
    }
    console.log('Conectado ao MySQL!');
});

module.exports = connection;
