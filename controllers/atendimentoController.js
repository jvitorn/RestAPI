
module.exports =  (app) => {
    app.get('/atendimentos',(req,res)=>{
        res.send('Voce esta na rota de atendimentos pelo controller');
    });
}