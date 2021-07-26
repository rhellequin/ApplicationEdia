var mongoose = require('mongoose')

var typeSchema = mongoose.Schema({

        typeId: String,
        typeName: String
  

 })
    
var typeModel = mongoose.model('types', typeSchema)
module.exports = typeModel;