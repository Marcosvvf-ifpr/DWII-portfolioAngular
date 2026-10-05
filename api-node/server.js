const express = require('express');
const cors = require('cors')
const pool = require('./db');
const app = express();
const PORTA = 3000;

app.use(cors());

app.get('/api/projetos', async (req, res) => {
    try {
        const sql = "SELECT id, nome, categoria, descricao, ano_criacao FROM tecnologias WHERE status = 'ativo' ORDER BY categoria, nome";
        const [tecnologias] = await pool.query(sql);
        res.json(tecnologias);
    } catch (erro) {
        res.status(500).json({ erro: 'Falha no servidor: ' + erro.message});
    }
});

app.listen(PORTA, () => {
    console.log('API no ar em http://localhost' + PORTA);
});

/**app.get('/api/projeto', (req, res) => {
    res.json(projetos);
});*/
