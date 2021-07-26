var mongoose = require('mongoose')

var countySchema = mongoose.Schema({

    countyId: String,
    countyName: String
  

 })
var countyModel = mongoose.model('counties', countySchema)
module.exports = countyModel;