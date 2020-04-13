const moment     = require('moment');
const connection = require('../infra/connection');

class Atendimento {

    adicionar(atendimento,res){
        //capturando data atual
        const dataCriacao = moment().format('YYYY-MM-DD HH:MM:SS');
        //formatando data
        const data = moment(atendimento.data,'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS');
        //comparando a data atual e verificando se ela é depois da data de criação
        const dataValida = moment(data).isSameOrAfter(dataCriacao);
        //comparando se o nome do cliente tem mais de 5 caracteres
        const clienteValido = (atendimento.cliente.length) >= 5;
        // validacoes desses parametros
        const validacoes = [
            {
                nome:'data',
                valido: dataValida,
                msg:'Data deve ser maior ou igual a data atual'
            },
            {
                nome:'cliente',
                valido:clienteValido,
                msg:'Cliente deve ter pelo menos 5 caracteres'
            }
        ]
        const erros = validacoes.filter(campo => !campo.valido);
        const existemErros = erros.length;

        // verificando caso exista erros , caso nao , sera inserido o dado no BD
        if(existemErros){
            res.status(400).json(erros);
        }else{
            //enviando dados
            const atendimentoDatado = {...atendimento,dataCriacao,data}
            //sql query 
            const sql = 'INSERT INTO atendimentos SET ? '
            //commant
            connection.query(sql, atendimentoDatado, (error,results)=> {
                if(error){
                    //400 - bad request - client
                    res.status(400).json(error)
                }else{
                    //201 - created    - server
                    res.status(201).json(results)
                }
            });
        }

        
    }
}
module.exports = new Atendimento;