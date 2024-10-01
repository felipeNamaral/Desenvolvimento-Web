const express = require('express');
const path = require('path');
const http = require('http');

const app = express();
const port = 3000;

// Configura o Express para servir arquivos estáticos da pasta "public"
app.use(express.static(path.join(__dirname, 'public')));

// Rota para a página inicial
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Rota para a página "Sobre"
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'about.html'));
});

app.get('/envio', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'envio.html'));
});

app.post('/upload', (req, res) => {
    if (req.method === 'POST' && req.url === '/upload') {
        let fileData = '';
        req.on('data', chunk => {
            fileData += chunk.toString();
        });
        req.on('end', () => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/plain; charset=utf-8');
            res.end('Upload simulado com sucesso!');
        });
    } else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain; charset=utf-8');
        res.end('Rota não encontrada');
    }
});


app.use((req,res)=>{
    res.status(404).send("Página não encontrada <h1> Erro 404 </h1>")
})
// Inicia o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});