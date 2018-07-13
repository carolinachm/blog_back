'use Strict'
const mongoose = require('mongoose')

class Tag {
    constructor() {
        mongoose.model('Tag', {

            valor: String
        })
    }
}
module.exports = Tag;