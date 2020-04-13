const Atendimento = require('../models/atendimentos');

module.exports =  (app) => {
    app.route('/atendimentos')
        .get((req,res)=>{
            res.send('Voce esta na rota de atendimentos pelo controller GET');
        })
        .post((req,res)=>{
            console.log(req.body);
            const atendimento = req.body;
            Atendimento.adicionar(atendimento);
            res.send('Voce esta na rota de atendimentos pelo controller POST');
        });
}

