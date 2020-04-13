//require
const customExpress = require('./config/customExpress');
const app = customExpress();
//iniciando servidor
app.listen(3000,()=>{
    console.log('Servidor Iniciado e Rodando no link http://localhost:3000');
});