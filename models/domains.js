var mongoose = require('mongoose')

var domainSchema = mongoose.Schema({

        domainId: String,
        domainName: String
  

 })
    
var domainModel = mongoose.model('domains', domainSchema)
module.exports = domainModel;