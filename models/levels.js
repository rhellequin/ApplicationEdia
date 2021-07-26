var mongoose = require('mongoose')

var levelSchema = mongoose.Schema({

        levelId: String,
        levelName: String
  

 })
    
var levelModel = mongoose.model('levels', levelSchema)
module.exports = levelModel;