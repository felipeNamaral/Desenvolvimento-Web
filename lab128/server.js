
const express = require('express');
const path = require('path');
const http = require('http');       

const app = express();
const port = 3000;
app.use(express.static(path.join(__dirname, 'public')));

app.post('/', (req, res) => {
    res.sendFile(path.join(__dirname,'public','index.html'));
});

app.use((req,res)=>{
    res.status(404).send("Página não encontrada <h1> Erro 404 </h1>")
})
// Inicia o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});