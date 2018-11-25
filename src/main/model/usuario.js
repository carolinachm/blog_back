'use strict'

const mongoose = require('mongoose');

class Usuario extends mongoose.Schema{
    constructor() {


            super({
                      // Declaração simples do tipo de dado que será usado:
                      name: String,
                      // Você pode adicionar detalhes a cada um que ajuda na validação, como fazer algo necessário ou exclusivo
                      username: {
                          type: String,
                          required: true,
                          unique: true
                      },
                      password: {
                          type: String,
                          required: true
                      },
                      emailAddress: [String],
                      // Adicionar 'enum' de uma matriz de opções para forçar a seleção entre um determinado número de opções.
                      // Qualquer outra coisa que não seja "masculino" ou "feminino" será inválida.
                      gender: {
                          type: String,
                          enum: ["male", "female"]
                      }
                  });

        mongoose.model('Usuario', this);
    }

}
module.exports = Usuario;