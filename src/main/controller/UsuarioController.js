'use strict'
const UsuarioService = require('../service/UsuarioService');


class UsuarioController{
  
    /* 1) Método: Selecionar Usuario (acessar em: GET http://localhost:3000/Usuarios */
     static async findAll(req, res){
        try {
            //Aqui estamos definindo a função que ira retornar todos Usuario do banco:
            res.json(await UsuarioService.find({}))
        } catch (e) {
            res.status(500).send('Falha ao processar sua requisição');
            global.logger.error(e.message);
        }
    }

    /** 3)  Método: Selecionar Por Id (acessar em: GET http://localhost:3000/Usuarios/:id ) */
    static async getById(req,res){
        try {
             //Caso não haja erros, retornar para o usuário:
            res.json(await UsuarioService.getById(req.params.id,{ message: "Usuario adicionado com Sucesso!"}))
           
        } catch (e) {
            res.status(500).send('Falha ao processar sua requisição');
            global.logger.error(e.message);
        }
    }
    
    /* 2) Método: Criar Usuarios (acessar em: Usuario http://localhost:3000/Usuarios) */
    static async create(req, res){
        try {
            req.body.foto = req.file.path;
            let result = await UsuarioService.create(req.body);
             res.json(result);
            
        } catch (e) {
            res.status(500).send('Falha ao processar sua requisição');
            global.logger.error(e.message);
        }
    }
    /* 5) Método: Atualizar (acessar em: PUT http://localhost:3000/Usuarios/:id ) */
    static async update(req, res){
        if(!req.body.id) return res.status(400).send("É preciso fornecer o ID do usuario para alterá-lo");
        try {

            let result = await UsuarioService.update(req.body);
            res.json(result);
            
        } catch (e) {
            res.status(500).send('Falha ao processar sua requisição');
            global.logger.error(e.message);
        }
    }
    /** 4) Método: Excluir (acessar em: http://localhost:3000/Usuarios/:id ) */
    static async remove(req,res){
        if(!req.body.id) return res.status(400).send("É preciso fornecer o ID do usuario para remove-lo");
        try {
            let result = await UsuarioService.remove(req.body);
            
             req.json({ message: "Usuario excluído com Sucesso!", result })
            
        } catch (e) {
            res.status(500).send('Falha ao processar sua requisição');
            global.logger.error(e.message);
        }
    }

}
module.exports = UsuarioController;