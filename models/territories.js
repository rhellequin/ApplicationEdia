var mongoose = require('mongoose')

var territorySchema = mongoose.Schema({

        territoryId: String,
        territoryName: String
  

 })
var territoryModel = mongoose.model('territories', territorySchema)
module.exports = territoryModel;