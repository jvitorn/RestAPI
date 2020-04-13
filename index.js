// require
const express = require('express');
// criando um app em express
const app = express();

app.get('/atendimentos',(req,res)=>{
    res.send('Voce esta na rota de atendimentos');
});
//iniciando servidor
app.listen(3000,()=>{
    console.log('Servidor Iniciado e Rodando no link http://localhost:3000');
});