// require
const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');

module.exports = ()=>{
    // criando um app em express
    const app = express();
    //use midwares
    app.use(bodyParser.urlencoded({extended:true}));
    app.use(bodyParser.json());
    //consign esta incluindo tudo que esta na pasta 'controllers' para dentro do app
    consign()
        .include('controllers')
        .into(app)
     

    return app;
    
}