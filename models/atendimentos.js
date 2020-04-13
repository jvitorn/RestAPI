const connection = require('../infra/connection');

class Atendimento {

    adicionar(atendimento){
        //sql query 
        const sql = 'INSERT INTO atendimentos SET ? '
        //commant
        connection.query(sql, atendimento, (error,results)=> {
            if(error){
                console.log(error)
            }else{
                console.log(results)
            }
        });
    }
}
module.exports = new Atendimento;