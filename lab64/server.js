const express = require('express');
const path = require('path');
const http = require('http');
const multer = require('multer');

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

const upload = multer({dest:'uploads/'})

app.post('/upload',upload.single("file"),(req,res)=>{
    res.send('<h1>Arquivo recebido</h1>')
})

app.use((req,res)=>{
    res.status(404).send("Página não encontrada <h1> Erro 404 </h1>")
})
// Inicia o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});