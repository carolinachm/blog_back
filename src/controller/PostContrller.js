'use strict'
const PostService = require('../service/PostService');

class PostController{
  
    /* 1) Método: Selecionar Post (acessar em: GET http://localhost:3000/Posts */
     static async findAll(req, res){
        try {
            //Aqui estamos definindo a função que ira retornar todos Post do banco:
            res.json(await PostService.find({}))
        } catch (e) {
            res.status(500).send('Falha ao processar sua requisição');
            global.logger.error(e.message);
        }
    }

    /** 3)  Método: Selecionar Por Id (acessar em: GET http://localhost:3000/Posts/:id ) */
    static async getById(req,res){
        try {
             //Caso não haja erros, retornar para o usuário:
            res.json(await PostService.getById(req.params.id,{ message: "Post adicionado com Sucesso!"}))
           
        } catch (e) {
            res.status(500).send('Falha ao processar sua requisição');
            global.logger.error(e.message);
        }
    }
    
    /* 2) Método: Criar Posts (acessar em: POST http://localhost:3000/Posts) */
    static async create(req, res){
        try {
            
            let result = await PostService.create(req.body);
           res.json(result);
            
        } catch (e) {
            res.status(500).send('Falha ao processar sua requisição');
            global.logger.error(e.message);
        }
    }
    /* 5) Método: Atualizar (acessar em: PUT http://localhost:3000/Posts/:id ) */
    static async update(req, res){
        if(!req.body.id) return res.status(400).send("É preciso fornecer o ID do usuario para alterá-lo");
        try {

            let result = await PostService.update(req.body);
            res.json(result);
            
        } catch (e) {
            res.status(500).send('Falha ao processar sua requisição');
            global.logger.error(e.message);
        }
    }
    /** 4) Método: Excluir (acessar em: http://localhost:3000/Posts/:id ) */
    static async remove(req,res){
        if(!req.body.id) return res.status(400).send("É preciso fornecer o ID do usuario para remove-lo");
        try {
            let result = await PostService.remove(req.body);
            
             req.json({ message: "Post excluído com Sucesso!", result })
            
        } catch (e) {
            res.status(500).send('Falha ao processar sua requisição');
            global.logger.error(e.message);
        }
    }

}
module.exports = PostController;