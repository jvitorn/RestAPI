//require
const customExpress = require('./config/customExpress');
const connection    = require('./infra/connection');
const Tables        = require('./infra/tables');

connection.connect((error)=>{
    // verificando se tem algum problema de conexao nao vai iniciar o servidor
    if(error){
        console.log(error);
    }
    else{
        Tables.init(connection);
        const app = customExpress();
        //iniciando servidor
        app.listen(3000,()=>{
            console.log('Servidor Iniciado e Rodando no link http://localhost:3000');
        });
        // db
        console.log('DB Connectado com sucesso na aplicação!');
    }
});
