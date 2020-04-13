const Atendimento = require('../models/atendimentos');
const atendimentosRoute = {
    list:'/atendimentos',
    listId:'/atendimentos/:id'
}
module.exports =  (app) => {
    app.route(atendimentosRoute.list)
        .get((req,res)=>{
            Atendimento.listar(res);
        })
        .post((req,res)=>{
            const atendimento = req.body;
            Atendimento.adicionar(atendimento,res);
        });
    app.route(atendimentosRoute.listId)
        .get((req,res)=>{
            const id = parseInt(req.params.id);

            Atendimento.buscaPorId(id,res);
        })
        .patch((req,res)=>{
            const id = parseInt(req.params.id);
            const valores = req.body;
            Atendimento.alterar(id,valores,res);
        })
        .delete((req,res)=>{
            const id = parseInt(req.params.id);
            Atendimento.deletar(id,res);
        });
}

