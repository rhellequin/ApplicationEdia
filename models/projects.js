var mongoose = require('mongoose')

var projectSchema = mongoose.Schema({

        projectId: String,
        projectName: String,
        projectDomain: String
  

 })
    
var projectModel = mongoose.model('projects', projectSchema)
module.exports = projectModel;