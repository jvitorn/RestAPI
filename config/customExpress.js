// require
const express = require('express');
const consign = require('consign');

module.exports = ()=>{
    // criando um app em express
    const app = express();
    //consign esta incluindo tudo que esta na pasta 'controllers' para dentro do app
    consign()
        .include('controllers')
        .into(app)
        
    return app;
    
}