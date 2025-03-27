const connection = mysql.createConnection({
    host: 'localhost', // Ou o IP do seu servidor MySQL
    user: 'host',
    password: '3042',
    database: 'Os Bravos'
});

connection.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao MySQL:', err);
        return;
    }
    console.log('Conectado ao MySQL!');
});

module.exports = connection;
