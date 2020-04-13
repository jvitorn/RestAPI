const moment     = require('moment');
const connection = require('../infra/connection');

class Atendimento {

    adicionar(atendimento){
        //capturando data atual
        const dataCriacao = moment().format('YYYY-MM-DD HH:MM:SS');
        //formatando data
        const data = moment(atendimento.data,'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS');
        //enviando dados
        const atendimentoDatado = {...atendimento,dataCriacao,data}
        //sql query 
        const sql = 'INSERT INTO atendimentos SET ? '
        //commant
        connection.query(sql, atendimentoDatado, (error,results)=> {
            if(error){
                console.log(error)
            }else{
                console.log(results)
            }
        });
    }
}
module.exports = new Atendimento;