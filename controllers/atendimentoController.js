const Atendimento = require('../models/atendimentos');

module.exports =  (app) => {
    app.route('/atendimentos')
        .get((req,res)=>{
            res.send('Voce esta na rota de atendimentos pelo controller GET');
        })
        .post((req,res)=>{
            const atendimento = req.body;
            Atendimento.adicionar(atendimento,res);
        });
}

